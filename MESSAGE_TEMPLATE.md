# MESSAGE_TEMPLATE
以下のデータを用いて、[Mustache.js](https://github.com/janl/mustache.js/)の記法で書けます。

## [article](https://qiita.com/api/v2/docs#%E6%8A%95%E7%A8%BF)
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

### [group](https://qiita.com/api/v2/docs#%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97)
|プロパティ|型|必須|説明|
|---|---|---|---|
|`created_at`|string|○|作成日時|
|`id`|number|○|グループID|
|`name`|string|○|名前|
|`private`|boolean|○|非公開グループかどうか|
|`updated_at`|string|○|更新日時|
|`url_name`|string|○|URL用の名前|

### [user](https://qiita.com/api/v2/docs#%E3%83%A6%E3%83%BC%E3%82%B6)
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

### [tag](https://qiita.com/api/v2/docs#%E3%82%BF%E3%82%AE%E3%83%B3%E3%82%B0)
|プロパティ|型|必須|説明|
|---|---|---|---|
|`name`|string|○|名前|
|`versions`|string[]|○|バージョンのリスト|
