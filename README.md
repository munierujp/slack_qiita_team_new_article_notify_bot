[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# slack_qiita_team_notify_bot
Qiita:Teamの新着記事をSlackに投稿するBOT

## プロパティ
|プロパティ|説明|例|
|---|---|---|
|`FETCH_COUNT`|一度に取得する記事数（1〜100）|`100`|
|`HISTORY`|最後に投稿した記事の履歴|-|
|`MESSAGE_TEMPLATE_DATE_LANG`|メッセージのテンプレートの日付の言語|`ja`|
|`MESSAGE_TEMPLATE_GROUP`|メッセージのテンプレート（グループあり）|`[{{group_name}}] {{title}} by {{user_id}}\n{{url}}`|
|`MESSAGE_TEMPLATE_NOT_GROUP`|メッセージのテンプレート（グループなし）|`{{title}} by {{user_id}}\n{{url}}`|
|`MESSAGE_TEMPLATE_CRATED_AT_FORMAT`|メッセージのテンプレートの`created_at`のフォーマット|`YYYY[/]M[/]D H[:]mm[:]ss`|
|`QIITA_API_TOKEN`|Qiita:Teamのアクセストークン|`0123456789abcdef0123456789abcdef01234567`|
|`QIITA_TEAM_ID`|Qiita:TeamのチームID|`increments`|
|`WEBHOOK_URL`|SlackのWebhook URL|`https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX`|

### MESSAGE_TEMPLATE_GROUP
以下の変数を使用できます。

|変数|説明|例|
|---|---|---|
|`{{title}}`|タイトル|`Example title`|
|`{{url}}`|URL|`https://qiita.com/yaotti/items/4bd431809afb1bb99e4f`|
|`{{created_at}}`|作成日持|`2000-01-01T00:00:00+00:00`|
|`{{user_id}}`|ユーザーID|`yaotti`|
|`{{user_name}}`|ユーザー名|`Hiroshige Umino`|
|`{{group_name}}`|グループ名|`Dev`|

### MESSAGE_TEMPLATE_NOT_GROUP
以下の変数を使用できます。

|変数|説明|例|
|---|---|---|
|`{{title}}`|タイトル|`Example title`|
|`{{url}}`|URL|`https://qiita.com/yaotti/items/4bd431809afb1bb99e4f`|
|`{{created_at}}`|作成日持|`2000-01-01T00:00:00+00:00`|
|`{{user_id}}`|ユーザーID|`yaotti`|
|`{{user_name}}`|ユーザー名|`Hiroshige Umino`|

### MESSAGE_TEMPLATE_DATE_LANG
以下の言語を指定できます。  
指定しなかった場合や、これ以外の値を指定した場合は英語になります。

|値|説明|
|---|---|
|`ja`|日本語|

## ライブラリ
以下のライブラリを使用しています。

|ライブラリ|プロジェクトキー|
|---|---|
|Moment|`MHMchiX6c1bwSqGM1PZiW_PxhMjh3Sh48`|
