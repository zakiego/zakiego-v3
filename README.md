# zakiego.my.id

This project uses Lee Robinson's template (https://github.com/leerob/leerob.io)

# Built With

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Supabase](https://supabase.io/)
- **Deployment**: [Vercel](https://vercel.com)
- **Deployment**: [Heroku](https://www.heroku.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Bot**: [Discord API](https://discord.com/developers/docs/intro)
- **Serverless application**: [Cloudflare Workers](https://workers.cloudflare.com/)

## Overview

- `data/*` - MDX data that is used for blogs, newsletters, and code snippets.
- `layouts/*` - The different page layouts each MDX category (blog, newsletter, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction).
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `scripts/*` - Two useful scripts to generate an RSS feed and a sitemap.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

```bash
$ git clone https://github.com/leerob/leerob.io.git
$ cd leerob.io
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/leerob/leerob.io/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/leerob/leerob.io/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.).
