# Part I: React Router

This version of the application should use hard-coded parks data, which you can
find in [`/src/data/parks.json`](./src/data/parks.json). Pass this data into the
`<App />` component from inside `index.js` (i.e. follow
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html))

Your national parks app should have the following features:

## 1. Navigation

No matter what route the user is visiting, they should always see a navigation
bar at the top of the window. Clicking the title should take the user back to
the homepage.

## 2. Park List (`/`)

If the user visits your application's home page (i.e. `localhost:3000`), they
should see the list of parks. The images and names for these links should be
pulled from [`src/data/parks.json`](./src/data/parks.json).

## 3. Park Detail (`/park/:id`)

Every object in the `parks.json` data has an `id` property which uniquely
identifies each object. We want to use this in the url so we can link to
individual parks. If a user visits a url that follows the `park/:id` pattern,
find the object with that id from the parks data and render that to the user.
This is called `params`.

> The resources listed at the bottom of the [readme](README.md) might come in
> handy when building this out.
