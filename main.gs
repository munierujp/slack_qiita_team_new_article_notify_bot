var moment = Moment.moment

var properties = PropertiesService.getScriptProperties()
var FETCH_COUNT = properties.getProperty('FETCH_COUNT')
var MESSAGE_TEMPLATE_DATE_LANG = properties.getProperty('MESSAGE_TEMPLATE_DATE_LANG')
var MESSAGE_TEMPLATE_GROUP = properties.getProperty('MESSAGE_TEMPLATE_GROUP')
var MESSAGE_TEMPLATE_NOT_GROUP = properties.getProperty('MESSAGE_TEMPLATE_NOT_GROUP')
var MESSAGE_TEMPLATE_CRATED_AT_FORMAT = properties.getProperty('MESSAGE_TEMPLATE_CRATED_AT_FORMAT')
var QIITA_API_TOKEN = properties.getProperty('QIITA_API_TOKEN')
var QIITA_TEAM_ID = properties.getProperty('QIITA_TEAM_ID')
var WEBHOOK_URL = properties.getProperty('WEBHOOK_URL')

var PROPERTY_KEY_HISTORY = 'HISTORY'

function exec () {
  // プロパティから履歴を読み込む
  var history = loadHistory_()
  var historyCreatedAt = new Date(history.created_at)

  // Qiita APIから記事リストを取得
  var articles = fetchArticles_()
  var newArticles = articles.filter(function (article) {
    return new Date(article.created_at) > historyCreatedAt
  })

  // 記事情報をSlackに投稿
  newArticles.reverse().forEach(function (article) {
    var message = createMessage_(article)
    postToSlack_(message)
    saveHistory_(article)
  })
}

/**
* プロパティから履歴を読み込みます。
* 履歴が存在しない場合、空のオブジェクトを返します。
* @return {Object} 履歴
*/
function loadHistory_ () {
  var history = properties.getProperty(PROPERTY_KEY_HISTORY)
  return history ? JSON.parse(history) : {}
}

/**
* プロパティに履歴を保存します。
* @param {Object} article - 記事
* @param {string} article.created_at - 記事の作成日時
* @param {string} article.id - 記事のID
* @param {string} article.title - 記事のタイトル
* @param {string} article.url - 記事のURL
*/
function saveHistory_ (article) {
  var history = {
    created_at: article.created_at,
    id: article.id,
    title: article.title,
    url: article.url
  }
  properties.setProperty(PROPERTY_KEY_HISTORY, JSON.stringify(history))
}

/**
* Qiita APIから記事リストを取得します。
* @return {Object[]} 記事リスト
*/
function fetchArticles_ () {
  var url = 'https://' + QIITA_TEAM_ID + '.qiita.com/api/v2/items?per_page=' + FETCH_COUNT
  var params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + QIITA_API_TOKEN
    }
  }
  var response = UrlFetchApp.fetch(url, params)
  return JSON.parse(response)
}

/**
* メッセージを作成します。
* @param {Object} article - 記事
* @param {string} article.title - 記事のタイトル
* @param {string} article.url - 記事のURL
* @param {string} article.created_at - 記事の作成日持
* @param {Object} article.user - 記事のユーザー
* @param {string} article.user.id - 記事のユーザーのID
* @param {string} article.user.name - 記事のユーザーの名前
* @param {Object} [article.group] - 記事のグループ
* @param {string} [article.group.name] - 記事のグループの名前
* @return {string} メッセージ
*/
function createMessage_ (article) {
  var group = article.group
  var template = group ? MESSAGE_TEMPLATE_GROUP : MESSAGE_TEMPLATE_NOT_GROUP
  var replacers = [
    [/{{title}}/g, article.title],
    [/{{url}}/g, article.url],
    [/{{created_at}}/g, moment(article.created_at).format(MESSAGE_TEMPLATE_CRATED_AT_FORMAT)],
    [/{{user_id}}/g, article.user.id],
    [/{{user_name}}/g, article.user.name]
  ]
  if (group) {
    replacers.push([/{{group_name}}/g, group.name])
  }
  return replaceText_(template, replacers)
}

/**
* 文字列を複数の条件で置換します。
* @param {string} source 文字列
* @param {Object[][]} replacers 置換用配列
* @return {string} 置換した文字列
*/
function replaceText_ (source, replacers) {
  var replaced = source
  for (var i in replacers) {
    var replacer = replacers[i]
    replaced = replaced.replace(replacer[0], replacer[1])
  }
  return replaced
}

/**
* Slackにメッセージを投稿します。
* @param {string} message - メッセージ
*/
function postToSlack_ (message) {
  var params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    payload: '{"text":"' + message + '"}'
  }
  UrlFetchApp.fetch(WEBHOOK_URL, params)
}
