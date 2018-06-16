[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# slack_qiita_team_notify_bot
Qiita:Teamの新着記事をSlackに投稿するBOT

## プロパティ
|プロパティ|説明|例|
|---|---|---|
|`FETCH_COUNT`|一度に取得する記事数（1〜100）|`100`|
|`HISTORY`|最後に投稿した記事の履歴|-|
|`MESSAGE_TEMPLATE`|メッセージのテンプレート|`{{#group}}[{{group.name}}] {{/group}}{{title}} by {{user.id}}\n{{{url}}}`|
|`MESSAGE_TEMPLATE_DATE_FORMAT`|メッセージのテンプレートの日付のフォーマット|`YYYY[/]M[/]D H[:]mm[:]ss`|
|`MESSAGE_TEMPLATE_DATE_LANG`|メッセージのテンプレートの日付の言語|`ja`|
|`QIITA_API_TOKEN`|Qiita:Teamのアクセストークン|`0123456789abcdef0123456789abcdef01234567`|
|`QIITA_TEAM_ID`|Qiita:TeamのチームID|`increments`|
|`WEBHOOK_URL`|SlackのWebhook URL|`https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX`|

### MESSAGE_TEMPLATE
以下のデータを用いて、[Mustache.js](https://github.com/janl/mustache.js/)の記法で書けます。

#### [article](https://qiita.com/api/v2/docs#%E6%8A%95%E7%A8%BF)
|プロパティ|型|必須|説明|
|---|---|---|---|
|`rendered_body`|string|○|HTML形式の本文|
|`body`|string|○|Markdown形式の本文|
|`coediting`|boolean|○|共同編集状態かどうか|
|`comments_count`|number|○|コメントの数|
|`created_at`|string|○|作成日時|
|`group`|object|×|グループ|
|`id`|string|○|記事ID|
|`reactions_count`|number|○|絵文字リアクションの数|
|`tags`|object[]|○|タグのリスト|
|`title`|string|○|タイトル|
|`updated_at`|string|○|更新日時|
|`url`|string|○|URL|
|`user`|object|○|ユーザー|
|`page_views_count`|number|×|閲覧数|

##### [group](https://qiita.com/api/v2/docs#%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97)
|プロパティ|型|必須|説明|
|---|---|---|---|
|`created_at`|string|○|作成日時|
|`id`|number|○|グループID|
|`name`|string|○|名前|
|`private`|boolean|○|非公開グループかどうか|
|`updated_at`|string|○|更新日時|
|`url_name`|string|○|URL用の名前|

##### [user](https://qiita.com/api/v2/docs#%E3%83%A6%E3%83%BC%E3%82%B6)
|プロパティ|型|必須|説明|
|---|---|---|---|
|`description`|string|×|自己紹介文|
|`facebook_id `|string|×|FacebookのID|
|`followees_count `|number|○|フォロー数|
|`followers_count `|number|○|フォロワー数|
|`github_login_name `|string|×| GitHubのID|
|`id`|string|○|ユーザーID|
|`items_count `|number|○|Qiita上の記事数|
|`linkedin_id `|string|×| LinkedInのID|
|`location `|string|×|居住地|
|`name `|string|×|名前|
|`organization `|string|×|所属組織|
|`permanent_id `|number|○|ユーザーの内部ID|
|`profile_image_url `|number|○|プロフィール画像のURL|
|`twitter_screen_name `|string|×| Twitterのユーザー名|
|`website_url `|string|×| ウェブサイトのURL|

##### [tag](https://qiita.com/api/v2/docs#%E3%82%BF%E3%82%AE%E3%83%B3%E3%82%B0)
|プロパティ|型|必須|説明|
|---|---|---|---|
|`name`|string|○|名前|
|`versions`|string[]|○|バージョンのリスト|

### MESSAGE_TEMPLATE_DATE_FORMAT
[Moment.js](https://momentjs.com/docs/#/displaying/format/)のフォーマットパターンを使用できます。

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
|Mustache|`13re0EpD6XiVa5zHXndGiYtcH-QMnbeE5MJH190pJ8xCYhmuW5sX2ZO5R`|
