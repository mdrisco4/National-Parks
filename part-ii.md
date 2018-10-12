# Part II: Adding APIs

In this portion of the lab, your stock tracking app will be communicating with
two APIs:

1. [GA Stocks API](https://ga-stocks.herokuapp.com/stocks). This will be used
   store stocks the user wants to track.
1. [IEX Trading](https://iextrading.com/developer/docs/)

Start with the GA Stocks API. Once you have that working, move on to IEX
Trading.

## 1. Dashboard (`/stocks`)

Instead of listing the hard-coded stocks, this page should retrieve all stocks
from the API (i.e., `https://ga-stocks.herokuapp.com/stocks`) and display them
on the page.

## 2. Stock (`/stocks/:symbol`)

The stock information beyond name and symbol (e.g., `Current Price`, `Change`)
should no longer be pulled from hard-coded data. Instead, this information
should be pulled from [IEX Trading](https://iextrading.com/developer/docs/).

## Bonus: Axios

It's very common for React developers to use
[Axios](https://github.com/axios/axios) instead of `fetch()` for making AJAX
requests. The API is similar, so see if you can swap out your `fetch()` calls.

## Bonus: Deploy

You can easily build and deploy React apps using `create-react-app` and
[`surge.sh`](https://surge.sh). First, build a final version of your react app
with `npm build`. Then, follow the instructions on
[`surge.sh`](https://surge.sh) to deploy your React app.

## Bonus: Alpha Vantage

The [Alpha Vantage](https://www.alphavantage.co/documentation/) API has a lot of
data about stocks, including time-series data. As a bonus, swap out IEX Trading
for the Alpha Vantage API. Update your `/stocks/:symbol` view to show some of
the additional data provided by this API.

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
