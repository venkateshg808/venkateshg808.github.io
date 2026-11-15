# Venkatesh Gudepu — personal academic website

A static academic website with a portrait, biography, research areas, selected publications, teaching, professional service, and contact information. Includes year filters, responsive navigation, and a persistent light/dark theme.

## Publish on GitHub Pages

1. Create a public repository. For your main personal website, use `YOUR_USERNAME.github.io`, replacing YOUR_USERNAME with your actual GitHub username. Alternatively, use a project name such as `personal-website`.
2. Extract this ZIP and upload the CONTENTS of this folder into the repository root. `index.html` must be at the top level, not inside another folder. Include `.nojekyll` if your file picker displays it.
3. Commit the files to `main`.
4. Open repository Settings → Pages.
5. Under Build and deployment, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
6. Wait for the Pages deployment to finish. Use the live URL shown in Settings → Pages.

A personal repository produces https://YOUR_USERNAME.github.io/ . A project repository produces https://YOUR_USERNAME.github.io/REPOSITORY_NAME/ . These are templates, not already-created addresses.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edit your site

- `index.html`: biography, academic details, research, publications, and links.
- `style.css`: colors, typography, layout, and mobile rules.
- `script.js`: navigation, theme, and year filtering.
- `portrait.jpg`: profile photograph.
- `.nojekyll`: marks this as a plain static site.

No package installation, build command, API key, or server is required. Open index.html in your browser to preview it locally.

## Content scope

The site contains three selected publication entries with DOI links and links to the full DBLP/ORCID records. It does not claim to be a complete bibliography. Education includes the verified Ph.D. at IIT Dharwad. Teaching is presented by topic, without invented course counts or assistantship dates.

Your reference inspired the academic section structure; its biography, papers, awards, photographs, and artwork have not been reused. Gallery, awards, downloadable CV, personal projects, and additional degrees can be added once you supply or confirm the relevant content. No placeholder or invented links are displayed.

To add a publication, duplicate one article with class `pub`, update its title, authors, DOI, and data-year attribute, and add a corresponding year filter if needed. Keep the initial screen-reader results count in sync with the number of entries.

After the final GitHub URL is known, an absolute og:image URL can be added for social sharing previews.
