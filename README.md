[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# slack_qiita_team_notify_bot
Qiita:Teamの新着記事をSlackに投稿するBOT

## プロパティ
|プロパティ|説明|例|
|---|---|---|
|`FETCH_COUNT`|一度に取得する記事数（1〜100）|`100`|
|`HISTORY`|最後に投稿した記事の履歴|-|
|`MESSAGE_TEMPLATE`|メッセージのテンプレート|`{{#group}}[{{group.name}}] {{/group}}{{{title}}} by {{user.id}}\n{{{url}}}`|
|`MESSAGE_TEMPLATE_DATE_FORMAT`|メッセージのテンプレートの日付のフォーマット|`YYYY[/]M[/]D H[:]mm[:]ss`|
|`MESSAGE_TEMPLATE_DATE_LANG`|メッセージのテンプレートの日付の言語|`ja`|
|`QIITA_API_TOKEN`|Qiita:Teamのアクセストークン|`0123456789abcdef0123456789abcdef01234567`|
|`QIITA_TEAM_ID`|Qiita:TeamのチームID|`increments`|
|`WEBHOOK_URL`|SlackのWebhook URL|`https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX`|

### MESSAGE_TEMPLATE
[MESSAGE_TEMPLATE.md](MESSAGE_TEMPLATE.md)を参照してください。

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
|[Moment](https://momentjs.com/)|`MHMchiX6c1bwSqGM1PZiW_PxhMjh3Sh48`|
|[Mustache](https://github.com/munierujp/Mustache.gs)|`13re0EpD6XiVa5zHXndGiYtcH-QMnbeE5MJH190pJ8xCYhmuW5sX2ZO5R`|
