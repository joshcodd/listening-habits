# Listening Habits

React application that utalizes the Spotify Web API, to view your top artist, tracks
and genres. <br/>
Access at: <https://listening-habits.herokuapp.com>
(May take a minute due to Heroku)

## What did i learn?

- Using cookies
- Practiced further with API's.
- Practiced further with OAuth2.

## More...

To run on your own machine you will have to create a app at: <https://developer.spotify.com/dashboard/login>.
Set the re-direct URI to: http://localhost:5000/response

In the root of the project create a .env file with the following variables:
SPOTIFY_KEY=<Your Spotify client ID>
SPOTIFY_SECRET=<Your Spotify client Secren>
SPOTIFY_REDIRECT_URL_LOCAL=http://localhost:5000/response

Next, in the root project run:

### `npm install`

### `node server.js`

Then navigate to the client directory:

### `cd client`

Finally, run:

### `npm install`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
