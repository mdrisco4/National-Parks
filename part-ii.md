# Part II: Adding APIs

In this portion of the lab, your stock tracking app will be communicating with two APIs...
  1. [Markit on Demand](http://dev.markitondemand.com/MODApis/). This will be used to retrieve the latest information about a particular stock.
  2. A local Rails API. This will be used store stocks the user wants to track.

**[Before you continue, make sure to clone down and run the Rails API.](https://github.com/ga-wdi-exercises/react-router-lab-api)**

This version of the stock tracking app should see the following additional functionalities...

## 1. Dashboard (`/`)

Instead of listing the hard-coded stocks, this page should retrieve all stocks from the local API (i.e., `localhost:3000/stocks`) and display them on the page.

## 2. Search (`/search`)

If a user visits `/search` or clicks on "Search" in the navigation bar, they should be directed to a search page with a single-input form.

If a user submits a stock symbol (e.g., `AAPL`) through the form, a call will be made to the [Markit on Demand API](http://dev.markitondemand.com/MODApis/) that returns a JSON representation of the searched stock.

> **Important Note:** The Markit on Demand API, unfortunately, does not have CORS enabled. That means when making an API call to it from our app, we need to request `jsonp` as the data type. Axios does not support `jsonp`.
>
> An alternative approach is to import jQuery and use AJAX. Install it first by running `$ npm install --save jquery`. Then [take a look at this snippet](https://github.com/ga-wdi-exercises/react-omdb/commit/70c28576d35e93331d37a425e45b73127f0713b3#diff-a2c44f5da6f2e8575db9456a7e28d50c) to see how we would go about using it.
>
> When using `$.ajax`, make sure to specify `jsonp` as the `dataType`

If the API call is successful, the app should display the name and symbol of that stock below the search form. To the right of this information, there should be a "Track Stock" button.

When the user clicks on a stock's "Track Stock" button, the following should happen...
- A `POST` request is made to the local Rails API. If successful, it will add the newly-tracked stock to the database.
- The user is redirected to the dashboard view. The tracked stock should now be visible

## 3. Stock (`/stocks/:symbol`)

The stock information beyond name and symbol (e.g., `Current Price`, `Change`) should no longer be pulled from hard-coded data. Instead, this information should be pulled from the [Markit on Demand API](http://dev.markitondemand.com/MODApis/).

When this view loads, a call will be made to the [Markit on Demand API](http://dev.markitondemand.com/MODApis/) that returns a JSON representation of the stock in question.

> Please reference the earlier note about the Markit on Demand API and `jsonp`

If the API call is successful, that stock's information should be displayed on the page.
