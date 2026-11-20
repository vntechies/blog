# B2B lead web app (VNTechies B2B Leads)

Google Apps Script backend for the lead form on `vntechies.dev/enterprises`.
It appends one row to the sheet, emails the team, and emails the requester the
fixed portfolio link. It never sends text taken from the request except the
person's name in a greeting, and it never runs a sheet value as a formula.

Files:

- `Code.gs` — the script. Only `doGet` / `doPost` touch Google services; the rest are pure and run in Node.
- `Code.test.mjs` — `node --test scripts/google-apps-script/b2b-leads/Code.test.mjs`.

## Deploy

1. Open the **VNTechies B2B Leads** sheet. Extensions → Apps Script, then delete the placeholder `myFunction` and paste `Code.gs`.
   (Better: bind by ID with `clasp`, but pasting is enough.)
2. Project Settings → **Script Properties** → Add script property `NOTIFY_TO`, value = the alert recipients, comma-separated, e.g. `a@example.org,b@example.org`.
   This list is deliberately **not** in the repo: the repo is public. Without it, alerts go only to `info@vntechies.dev`.
3. Deploy → **New deployment** → type **Web app**.
   - Description: `b2b-leads v11/2026`
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy, then authorize the scopes asked for (Sheets, Gmail/Mail, Script cache/properties).
4. Copy the `/exec` URL and put it in `leadScriptUrl` in `data/b2bPortfolio.js`, then rebuild and deploy the site.
   Until it is set, the site form shows the download plus the Zalo fallback.
5. Smoke test it (replace `<EXEC_URL>`):

   ```sh
   # health check
   curl -sL "<EXEC_URL>"
   # → {"ok":true,"service":"b2b-leads"}

   # one real submission
   curl -sL -X POST "<EXEC_URL>" \
     -H 'Content-Type: text/plain;charset=utf-8' \
     --data '{"name":"Lan","company":"Acme","email":"lan@acme.vn","phone":"0905068885","teamSize":"11–30","interests":["AI"],"message":"","consent":true,"website":"","page":"/enterprises","utm_source":"test","utm_medium":"","utm_campaign":"","deckVersion":"11/2026"}'
   # → {"ok":true}
   ```

   Then check: one new sheet row, one alert to `NOTIFY_TO`, one email to `lan@acme.vn` with the PDF link.
   Re-sending the same email within 10 minutes returns `{"ok":true,"duplicate":true}` and writes nothing.

6. **Updating the script:** Deploy → **Manage deployments** → pencil on the existing deployment → Version: **New version** → Deploy.
   This keeps the same `/exec` URL, so `data/b2bPortfolio.js` does not need to change.

## Limits to know

- Emails are sent **from the Google account that deployed** the web app, and count against that account's `MailApp` daily quota
  (consumer Gmail ≈ 100 recipients/day, Workspace ≈ 1,500). The script also caps itself at 200 submissions/day (`rate_limited`).
- Duplicates are detected with `CacheService` (10 minutes), so a second identical email inside that window is dropped.
- The sheet's first sheet is named `Leads` and gets the header row automatically when empty.

## Columns (row 1)

`Thời gian`, `Họ tên`, `Công ty`, `Email`, `Điện thoại`, `Quy mô`, `Mảng quan tâm`, `Nhu cầu`, `Trang`, `utm_source`, `utm_medium`, `utm_campaign`, `Phiên bản hồ sơ`, `Đồng ý`

## Errors returned to the site

`bad_request` (not JSON), `spam` (honeypot — answered `{"ok":true}` on purpose), `missing_name`, `missing_company`,
`missing_email`, `invalid_email`, `invalid_team_size`, `missing_consent`, `rate_limited`, `server_error`.
The site shows the download + Zalo fallback for every `{ ok: false }`.
