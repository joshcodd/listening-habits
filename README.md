# Listening Habits

React application that utalizes the Spotify Web API, to view your top artist, tracks
and genres. <br/>
Access at: <https://listening-habits.herokuapp.com>
(May take a minute due to Heroku)
<br/>
![github](https://user-images.githubusercontent.com/65715894/91501990-dac51200-e8be-11ea-8796-eaee592f595d.gif)

## What did i learn?

- Using cookies
- Practiced further with API's.
- Practiced further with OAuth2.

## More...

To run on your own machine you will have to create a app at: <https://developer.spotify.com/dashboard/login> <br> Set the re-direct URI to: http://localhost:5000/response

In the root of the project create a .env file with the following variables: <br/>

```
SPOTIFY_KEY=<Your Spotify client ID>
SPOTIFY_SECRET=<Your Spotify client secret>
SPOTIFY_REDIRECT_URL_LOCAL=http://localhost:5000/response
```

<br/>

Next, in the root project run:

### `npm install`

### `node server.js`

<br/>

In another tab, navigate to the client directory:

### `cd client`

<br/>

Finally, run:

### `npm install`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
