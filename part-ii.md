# Part II: Adding APIs

For this portion of the lab, your national parks app will be communicating with
the [National Parks API](https://www.nps.gov/subjects/developer/index.htm).

First, you'll need to register for an API key with the National Parks API. Once
you have your key, review the documentation for the `/parks` endpoint. You'll
need to figure out how to make a request to get a list of parks with at least
the following properties:

1. `addresses`
1. `contacts`
1. `description`
1. `designation`
1. `name`
1. `url`
1. `parkCode`
1. `images`

> Note: The API is using something called Pagination, which means that every
> request returns 50 parks, of the almost 500 total parks. You just need to get
> the first set of 50.

## App

Instead of listing the hard-coded parks from the `parks.json` file, this page
should retrieve all parks from the API and display them on the page.

## Bonus: Axios

It's very common for React developers to use
[Axios](https://github.com/axios/axios) instead of `fetch()` for making AJAX
requests. The API is similar, so see if you can swap out your `fetch()` calls.

## Bonus: Deploy

You can easily build and deploy React apps using `create-react-app` and
[`surge.sh`](https://surge.sh). First, build a final version of your react app
with `npm build`. Then, follow the instructions on
[`surge.sh`](https://surge.sh) to deploy your React app.

> Note: Be sure to following the instructions for setting up a `202.html` file.
> Otherwise, the app will only work if the user navigates to the homepage first.
> Test it out by visiting a detail view and then refreshing the page.

