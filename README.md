# Wanderlust Travel Blog

A travel blog about places in Bangladesh, built with Next.js (App Router) and plain JavaScript. It is a practice project, so the stories are samples.

## Pages

- `/` - home page with categories and the latest stories
- `/blog` - all stories with a search box and category buttons
- `/blog/[slug]` - one page for each story
- `/about` - about this project

## How to run

You need Node.js installed.

```
npm install
npm run dev
```

Open http://localhost:3000

To test the production version:

```
npm run build
npm start
```

## Add a story

Open `data/posts.js`, copy one story object, change the text and the `slug`, and save. The new page is created automatically.

## Images

Pictures go in `public/images/`. File names are in the image guide. If a picture is missing, a coloured box shows instead.

Built with Next.js and React.
