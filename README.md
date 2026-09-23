# Rafael John — Portfolio

A personal portfolio site built with Next.js (App Router) and Tailwind CSS,
exported as a static site. Content covers a final-year forecasting project,
an IoT/BI internship, and an in-progress SQL project.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to see it. Edit content in `components/*.tsx` —
each section (Hero, Readouts, About, Experience, Projects, Skills, Contact)
is its own file.

## Build

```bash
npm run build
```

This produces a static export in the `out/` folder (`output: "export"` is
set in `next.config.ts`), which is what gets deployed.

## Deploying — new GitHub repo + Netlify

1. **Create the GitHub repo.** On github.com, click **New repository**, give
   it a name (e.g. `portfolio`), leave it empty (no README/gitignore — this
   project already has them), and create it.
2. **Push this project to it.** From this project's folder:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git add -A
   git commit -m "Initial portfolio"
   git push -u origin main
   ```

3. **Connect Netlify to the repo.** On app.netlify.com, click **Add new
   site → Import an existing project**, choose GitHub, authorize it, and
   pick the repo you just pushed.
4. **Build settings.** Netlify should auto-detect these from
   `netlify.toml`, but confirm:
   - Build command: `npm run build`
   - Publish directory: `out`
5. **Deploy.** Netlify builds and gives you a `*.netlify.app` URL. To reuse
   the old `rafaeljohn.netlify.app` address, go to **Site configuration →
   Domain management → Options → Edit site name** on the new site and set
   it back to `rafaeljohn`.

## Editing content

Real project details, dates, and figures live directly in the component
files under `components/` — there's no CMS or data file. To update a
project, edit its entry in `components/Projects.tsx`; to add a new one,
add another object to the `projects` array and (optionally) a matching
motif in `components/motifs.tsx`.
