# react-youtube-clone

[Powered By Youtube Data API](https://developers.google.com/youtube/v3/)

This simple web application makes use of the Youtube Data API. The app renders videos based on user's input in the searchbar, as well as lists similar videos, and renders a selected video based on user's click.
The app is built in React and uses fetch to request data.


# running the app

1. clone the repository
2. get your API key [here](https://developers.google.com/youtube/v3/getting-started). Most likely you will have to navigate to the developers console, enable APIs, create a new project, and click on Credentials to generate a new API key
3. update the 'YOUR_API_KEY_HERE' value in `src/components/App.js` with your own API key
4. cd into the cloned repository `cd react-youtube-clone`
5. `npm install` to install all the node modules
6. `npm start` to run the app