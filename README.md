# RedditLite

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. The project is a web app that enables users to browse Reddit posts and comments using a search bar.

## Features

The redditlite app features a **header** with a logo and **search bar**. The main body of the web app, by default, displays a **list of posts** from r/all, upon entering a search term in the search bar, the list will display posts relating to the provided search term. Below the header and above the search results, the user is provided with **filter buttons** that specify the type of search result (either posts or comments). As it stands however, due to difficulties with the reddit API, the comments filter cannot be used. Users are able to click on posts displayed in the search results to view the **full post page**. The post page features all of the basic post information (subreddit, author, post age, title, body, and upvotes) along with a **media gallery** that allows users to flick through any images provided with the post. Below the post itself, the user will find a **comments thread**. The comments thread, at present, only displays as many comments as are provided by default by the reddit API. Due to requests for the post page data being rejected by the reddit API, unfortunately, the user is not able to access the post page for particular posts. Upon clicking on a post search result, the user will be met with post page using mock data obtained directly from a reddit URI. This was included for demonstrative purposes.

## Future Work

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
