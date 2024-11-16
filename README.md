# Portfolio website

Built on [Astro](https://astro.build) with React components (via [Astro integration](https://docs.astro.build/en/guides/integrations-guide/react/)) and [Tailwind CSS](https://tailwindcss.com) styling. Self-hosted fonts via [Fontsource](https://fontsource.org), including Material Icons. Accepts unicode glyphs from [Material Icons](https://fonts.google.com/icons) (on Linux, press Ctrl+Shift+U, type the unicode code, then press Enter to register).

## How to use

Clone this repository and install dependencies.

```
pnpm install
```

### Development

Spin up an Astro dev server:

```
pnpm run dev
```

### Deployment

Build a local export to the `dist/` directory

```
pnpm run build
```

#### Deploy to Cloudflare Pages

- Allow Cloudflare Pages access to Github repositories, including the imported content submodule.
- Create the Cloudflare application, selecting the repository and setting the production branch to `build` (see <https://docs.astro.build/en/guides/deploy/cloudflare/>). Optionally disable preview deployments.
- Setup custom domains with DNS `CNAME` records.

#### Deploy to GitHub Pages using `gh-pages`

```
pnpm run build
pnpm gh-pages -d dev --nojekyll
```

If deploying to a project site, i.e. on a subdirectory, the `base` setting needs to be set. See <https://docs.astro.build/en/guides/deploy/github/>.
