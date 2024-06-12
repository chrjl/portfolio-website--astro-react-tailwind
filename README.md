# Portfolio website

Built on [Astro content collections](https://docs.astro.build/en/guides/content-collections/) with React components (via [Astro integration](https://docs.astro.build/en/guides/integrations-guide/react/)) and [Tailwind CSS](https://tailwindcss.com) styling.

Development of the Astro site is tracked on the `main` branch and the website build is tracked on the `build` branch. The `build` branch pulls external content into the collection directory `src/content` via a git submodule.

- Commit modifications to the Astro site to the `main` branch.
- Commit edits to content to an external repository.
- Merge updates to the `main` branch into the `build` branch.
- Pull content updates into the `src/content` submodule of the `build` branch.

## How to use

Clone this repository and install dependencies.

### Development

Spin up an Astro dev server:

```
npm run dev
```

Or spin up the server in a `node:lts-slim` container using the included Docker compose file:

```
docker compose up
```

- To manually generate or update content collection type definitions:

  ```
  npx astro sync
  ```

  > Running `astro dev`, `astro build` or `astro check` will run the sync command as well.

### Deployment

Deployment is from the `build` branch. Merge all desired updates from the `main` branch and pull all updates to content.

Check for Astro errors

```
astro check
```

Build a local export to the `dist/` directory

```
npm run build
```

#### Deploy to Cloudflare Pages

- Allow Cloudflare Pages access to Github repositories, including the imported content submodule.
- Create the Cloudflare application, selecting the repository and setting the production branch to `build` (see <https://docs.astro.build/en/guides/deploy/cloudflare/>). Optionally disable preview deployments.
- Setup custom domains with DNS `CNAME` records.
