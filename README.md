### Tally Prime TDL Playground

Generate TDL snippets via guided forms (Ledger, Voucher Type, Stock Item, Report). Copy or download the output as `.tdl`. No build step required.

### Run locally
- Open `index.html` in a browser.

### Deploy to Vercel
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-e326a4c0
```

Verify after a few seconds:
```bash
curl https://agentic-e326a4c0.vercel.app
```

### Files
- `index.html` UI layout and forms
- `styles.css` styling
- `tdl-language.js` Prism language definition for TDL
- `app.js` generators, format, copy, download
- `vercel.json` static hosting config

### Notes
- Generated TDL is simplified; adjust fields per your Tally company masters.