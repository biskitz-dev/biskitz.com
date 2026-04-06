# Biskitz Company Website

這是一個可直接部署到 Cloudflare Pages 的靜態公司官網專案。

目前也已補上 `wrangler.jsonc`，可直接走 Cloudflare Workers Static Assets / Workers Builds。

## 本地開發

```bash
npm install
npm run build
npm run dev
```

## 部署到 Cloudflare Workers / Pages

1. 將此 repo push 到 GitHub。
2. 到 Cloudflare Dashboard 連接此 GitHub repo。
3. 若 Cloudflare 要求 Build command，填入 `npm run build`。
4. 若 Cloudflare 要求 Output directory，填入 `dist`。
5. 完成後綁定自訂網域。

## 內容調整

- 主要文案在 `index.html`
- 視覺樣式在 `styles.css`
- 進場動畫在 `script.js`
- 安全標頭在 `_headers`
- SEO 基本檔案在 `robots.txt` 與 `sitemap.xml`
- Worker 設定在 `wrangler.jsonc`
