# Part II: Adding APIs

In this portion of the lab, your stock tracking app will be communicating with two APIs...
  1. [A local Rails API](https://git.generalassemb.ly/ga-wdi-exercises/react-router-lab-api). This will be used store stocks the user wants to track.
  1. Either [Markit on Demand](http://dev.markitondemand.com/MODApis/) which is deprecated but has functional query routes, or the robust [AlphaVantage API](https://www.alphavantage.co/). One of these can be used to retrieve the latest information about a particular stock.

Markit On Demand, though deprecated, is a potentially little easier to deal with due to the simplicity of its responses. Its responses are in `jsonp` format and you must use jQuery since Axios doesn't support `jsonp`.

Alpha Vantage has more detailed information included in its responses, which contain nested objects. It also requires a relatively painless and fast sign-up for an API key. If you go this route, you can use Axios.

**[Before you continue, make sure to clone down and run the Rails API.](https://git.generalassemb.ly/ga-wdi-exercises/react-router-lab-api)**

This version of the stock tracking app should see the following additional functionalities...

## 1. Dashboard (`/stocks`)

Instead of listing the hard-coded stocks, this page should retrieve all stocks from the local Rails API (i.e., `localhost:3000/stocks`) and display them on the page.

## 2. Search (`/search`)

#### Update Navigation

Add a "Search" link to the navigation bar.

#### Search for a Stock

If a user visits `/search` or clicks on "Search" in the navigation bar, they should be directed to a search page with a single-input form. If a user submits a stock symbol (e.g., `AAPL`) through the form, a call will be made to the external API you've chosen, Markit On Demand or Alpha Vantage.

If the API call is successful, the app should display the name and symbol of that stock below the search form. To the right of this information, there should be a "Track Stock" button.

##### Markit On Demand

Use the following base URL for making requests to the deprecated Markit On Demand API `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=`. If a user submits a stock symbol (e.g., `AAPL`) through the form, a request will be made to `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=AAPL` that gets a response containing a JSON representation of the searched stock.

> **Important Note:** The Markit on Demand API, unfortunately, does not have CORS enabled. That means when making an API call to it from our app, we need to request `jsonp` as the data type. Axios does not support `jsonp`.
>
> An alternative approach is to import jQuery and use AJAX. Install it first by running `$ npm install --save jquery`. Then [take a look at this snippet](https://github.com/ga-wdi-exercises/react-omdb/commit/70c28576d35e93331d37a425e45b73127f0713b3#diff-a2c44f5da6f2e8575db9456a7e28d50c) to see how we would go about using it.
>
> When using `$.ajax`, make sure to specify `jsonp` as the `dataType`

##### Alpha Vantage

[Alpha Vantage Docs](https://www.alphavantage.co/documentation/)

You may use Axios to interact with this API. Its responses contain nested objects like this...

```js
{
  "Meta Data": {
    "1. Information": "Intraday (1min) prices and volumes",
    "2. Symbol": "MSFT",
    "3. Last Refreshed": "2017-07-11 16:00:00",
    "4. Interval": "1min",
    "5. Output Size": "Compact",
    "6. Time Zone": "US/Eastern"
  },
  "Time Series (1min)": {
    "2017-07-11 16:00:00": {
      "1. open": "70.0700",
      "2. high": "70.1250",
      "3. low": "69.9900",
      "4. close": "69.9900",
      "5. volume": "2311827"
    },
    "2017-07-11 15:59:00": {
      "1. open": "70.0650",
      "2. high": "70.0700",
      "3. low": "70.0500",
      "4. close": "70.0650",
      "5. volume": "115405"
    },
    ... //and so so forth
  }
}
```

There is a very new Object method in Javascript that can be very useful when dealing with responses like this, `Object.values()`. It can extract all of the values in an object and place them into an array. See [documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values); it's an 'experimental' feature and isn't supported in IE at all.

See also [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).


#### Track a Stock

When the user clicks on a stock's "Track Stock" button, the following should happen...
- A `POST` request is made to the local Rails API. If successful, it will add the newly-tracked stock to the database.
- The user is redirected to the dashboard view. The tracked stock should now be visible

## 3. Stock (`/stocks/:symbol`)

The stock information beyond name and symbol (e.g., `Current Price`, `Change`) should no longer be pulled from hard-coded data. Instead, this information should be pulled from the [Markit on Demand API](http://dev.markitondemand.com/MODApis/).

When this view loads, a call will be made to the [Markit on Demand API](http://dev.markitondemand.com/MODApis/) that returns a JSON representation of the stock in question.

> Please reference the earlier note about the Markit on Demand API and `jsonp`

If the API call is successful, that stock's information should be displayed on the page.
