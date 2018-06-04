[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# slack_qiita_team_notify_bot
Qiita:Teamの新着記事をSlackに投稿するBOT

## プロパティ
|プロパティ|説明|例|
|---|---|---|
|`FETCH_COUNT`|一度に取得する記事数（1〜100）|`100`|
|`HISTORY`|最後に投稿した記事の履歴|-|
|`QIITA_API_TOKEN`|Qiita:Teamのアクセストークン|`0123456789abcdef0123456789abcdef01234567`|
|`QIITA_TEAM_ID`|Qiita:TeamのチームID|`increments`|
|`WEBHOOK_URL`|SlackのWebhook URL|`https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX`|
