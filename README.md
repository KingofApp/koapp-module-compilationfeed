# King of App Compilation Feed module

Privacy-safe build status and recent activity for a King of App application. The module reads only the allow-listed status API; it never renders raw Slack messages, internal IDs, email addresses, phone numbers, verification phone numbers, raw errors, or download links.

The module has Spanish and English UI text in `locale/`. The standalone website widget is hosted separately from the API on the static CDN; the API host serves data only.

## Configure

An app owner or administrator creates a public feed token through the authenticated King of App API (`POST /apps/{appId}/compilation-feed`). Paste the returned token in **Token de seguimiento / Public feed token**. Treat it as a revocable secret. Use the **Base API de estados / Status API base** only to point at the service returning JSON; it is not a widget host.

Revoke access with the authenticated `DELETE /apps/{appId}/compilation-feed` endpoint. Creating a replacement token rotates the old one.

## Website embed

The script and locale files are served from jsDelivr, not from the API. The API URL below is used only for the privacy-sanitized JSON response:

```html
<script async
  src="https://cdn.jsdelivr.net/gh/KingofApp/com.kingofapp.visualizer@fdb32b85a11f93bca854c547c2822adfbb06c3ef/www/widgets/compilation-feed.js"
  data-api="https://api.kingofapp.com"
  data-token="PASTE_PUBLIC_FEED_TOKEN"
  data-locale="es-ES"></script>
```

For a local build server, set `data-api` to an address reachable from the page's device and enable CORS for the `X-Compilation-Feed-Token` header. A server bound only to localhost cannot be used by remote visitors.

## Build and test

- `npm test` checks module metadata and that Spanish and English locale keys stay aligned.
- `npm run build` packages the module files as a versioned `.zip` for the King of App module publishing flow.
