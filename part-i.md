## Part I: React Router

This version of the application should use hard-coded stocks data, which you can find in [`/data/stock-data.json`](#).

Your stock tracking app should have the following features...

### 0. Navigation

No matter what route the user is visiting, they should always see a navigation bar at the top of the window. It should contain links to "Home" and "About" pages.

> [It should look something like this](http://level-goat.surge.sh/).

### 1. Dashboard (`/`)

If a user visits `/` or clicks "Home" in the navigation bar, they should be directed to a dashboard page. This page should list all of the stocks that the user is tracking, specifically their `name` and `symbol`.

For now, the displayed stocks should correspond with the hard-coded data in [`/data/stock-data.json`](#).

> [It should look something like this](http://level-goat.surge.sh/).

### 2. Stock (`/stocks/:symbol`)

If a user clicks on one of the stocks listed in the dashboard view, they should be directed to an individual stock show view. This view should display all of a stock's properties.

> [It should look something like this](http://level-goat.surge.sh/stocks/AAPL).

### 3. About (`/about`)

If a user clicks on "About" in the navigation bar, they should be directed to an about page. This is just a static page that displays a description of your app.

> [It should look something like this](http://level-goat.surge.sh/about).
