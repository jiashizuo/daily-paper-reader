# Daily Paper Reader API Proxy

Cloudflare Worker proxy for using an OpenAI-compatible relay from the GitHub Pages frontend.

The browser calls:

```text
https://YOUR_WORKER.workers.dev/v1/chat/completions
```

The Worker forwards to:

```text
https://api.apikey.fun/v1/chat/completions
```

Your API key stays in Cloudflare Worker secrets and is not exposed in the webpage.

## Deploy

1. Install Wrangler:

   ```powershell
   npm install -g wrangler
   ```

2. Login:

   ```powershell
   wrangler login
   ```

3. Enter this folder:

   ```powershell
   cd D:\Code\daily-paper-reader\cloudflare-worker
   ```

4. Set your relay API key as a Worker secret:

   ```powershell
   wrangler secret put OPENAI_API_KEY
   ```

5. Deploy:

   ```powershell
   wrangler deploy
   ```

6. In Daily Paper Reader, set:

   ```text
   Base URL: https://YOUR_WORKER.workers.dev/v1
   Model: gpt-5.5
   ```

For the API Key field in the webpage, use any non-empty placeholder such as:

```text
browser-placeholder
```

The Worker ignores browser-provided API keys and uses the secret stored in Cloudflare.
