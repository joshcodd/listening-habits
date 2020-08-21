var cookieParser = require("cookie-parser");
const path = require("path");
const express = require("express");
var request = require("request"); // "Request" library
const app = express();

app.use(cookieParser());
require("dotenv").config();

const port = process.env.PORT || 5000;
let redirectURL = process.env.SPOTIFY_REDIRECT_URL_LOCAL;
let home = "http://localhost:3000/";

if (process.env.NODE_ENV === "production") {
  //get env variables to work
  redirectURL = "https://listening-habits.herokuapp.com/response";
  home = "https://listening-habits.herokuapp.com";

  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

//Get spotify authorization code
app.get("/APIlogin", function (req, res) {
  var scope = "user-top-read user-follow-read";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      "client_id=" +
      process.env.SPOTIFY_KEY +
      "&response_type=code" +
      "&redirect_uri=" +
      redirectURL +
      "&scope=" +
      scope
  );
});

//Exchange spotify authorization code for access token & refresh token
app.get("/response", function (req, res) {
  const authorizationCode = req.query.code;

  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: authorizationCode,
      redirect_uri: redirectURL,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.SPOTIFY_KEY + ":" + process.env.SPOTIFY_SECRET
        ).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    var accessToken = body.access_token;
    var refreshToken = body.refresh_token;

    res.cookie("accessToken", accessToken);
    res.redirect(home);
  });
});

app.listen(port, function () {
  console.log("Server running on port 5000.");
});
