# Grade 13

An editorial-style landing page for **Grade 13** — practical education for the things school did not teach.

The site introduces the Grade 13 philosophy, six life-skill curriculum areas, learning formats, and brand principles. It is intentionally a lightweight static prototype with no backend, database, authentication, or build process.

## Project files

- `index.html` — the landing page and GitHub Pages entry point
- `curriculum.html` — searchable curriculum explorer and subject browsing views
- `article.html` — reusable long-form lesson template, addressed by `?slug=` URLs
- `calculator.html` — interactive compound-interest projection tool
- `calculator.js` — calculation and responsive chart behaviour for the calculator
- `content.js` — structured subject and lesson data, separate from the UI
- `app.js` — reusable library, filtering, article rendering, and navigation behaviour
- `styles.css` — responsive design system, layout, visual styling, and interactions

## Run locally

You can open `index.html` directly in a browser. For a local static web server, run the following from the project folder:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## GitHub Pages deployment

This project is ready to publish from the root of a GitHub repository:

1. Create a GitHub repository and upload these project files to its default branch (usually `main`).
2. In the repository, open **Settings** → **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then select **Save**.
5. GitHub will provide the published URL after the deployment completes. It normally follows `https://<your-username>.github.io/<repository-name>/`.

All local site assets are linked with relative paths, so the site works when published at that repository subdirectory URL.

## Notes

- Typography is loaded from Google Fonts over HTTPS; no local font files are required.
- The navigation and buttons use in-page links in this prototype. Future lesson pages can be added with relative URLs (for example, `lessons/finance.html`).

