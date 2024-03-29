# RedditLite

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. The project is a web app that enables users to browse Reddit posts and comments using a search bar.

## Features

The redditlite app features a **header** with a logo and **search bar**.
The main body of the web app, by default, displays a **list of posts** from r/all, upon entering a search term in the search bar, the list will display posts relating to the provided search term.
Below the header and above the search results, the user is provided with **filter buttons** that specify the type of search result (either posts or comments). As it stands however, due to difficulties with the reddit API, the comments filter cannot be used.
Users are able to click on posts displayed in the search results to view the **full post page**. The post page features all of the basic post information (subreddit, author, post age, title, body, and upvotes) along with a **media gallery** that allows users to flick through any images provided with the post.
Below the post itself, the user will find a **comments thread**. The comments thread, at present, only displays as many comments as are provided by default by the reddit API. Due to requests for the post page data being rejected by the reddit API, unfortunately, the user is not able to access the post page for particular posts. Upon clicking on a post search result, the user will be met with post page using mock data obtained directly from a reddit URI. This was included for demonstrative purposes.
The app has an **error page** which users will be directed to if a post page fails to load, however, as the post page is currently set up to use mock data, the only way to see this page is by manually searching for the URL. The error page consists of a simple error message and a home button that directs users back to the r/all posts page.
Users can return to this page at any time by clicking on the logo in the header which doubles as a home button.
The app features animated skeleton style loading screens.
The project makes use of custom functions for handling encoded characters in fetched data, and for calculating data age in sensible time denominations given its epoch time of creation.
The aesthetic of the web app is meant to resemble a lightweight version of reddit's own web pages, so the layout and colour scheme were made to match reddit's exactly.

## Future Work

As mentioned in the app description, there is a number of features which don't work as intended due to difficulties with the reddit API, resolving this issue will of course be a priority.
The post media gallery curently does not support video, it instead only displays the thumbnail. Implementing a video a player would be a good inclusion.
The ability to search for comments and posts filtered by subreddit would also be a helpful feature for users which could be implemented in future.
