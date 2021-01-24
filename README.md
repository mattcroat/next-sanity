# Sanity and Next.js

Example site powered by Sanity.io CMS, and Next.js.

**Example**

- Next.js available on `example.com`
- Sanity Studio accessible at `example.com/studio`

## Setup

1. `npm i` to install dependencies

1. `cd studio && npx sanity init` to initialize a new project, with the Blog (schema) template from the options.

1. `sanity manage` to open the dashboard in the browser where you can get the **project id**, and **dataset** name to fill in `.env`.

1. `npm run dev` starts Next.js at `http://localhost:3000/`.

1. `npm run start:sanity` starts Sanity Studio at `http://localhost:3333/`, but it's also available at `http://localhost:3000/studio`.

## Notes

It's important to set `"basePath": "/studio"` inside `sanity.json` for this to work. Learn more about [specifying the base path](https://www.sanity.io/docs/deployment#specifying-the-base-path-8a64d8e48697).
