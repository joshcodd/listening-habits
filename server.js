const express = require("express");
var request = require("request"); // "Request" library
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

//Get spotify authorization code
app.get("/APIlogin", function (req, res) {
  var scope = "user-top-read";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      "client_id=" +
      process.env.SPOTIFY_KEY +
      "&response_type=code" +
      "&redirect_uri=" +
      process.env.SPOTIFY_REDIRECT_URL +
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
      redirect_uri: process.env.SPOTIFY_REDIRECT_URL,
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

    res.redirect("http://localhost:3000/" + accessToken);
  });
});

app.listen(port, function () {
  console.log("Server running on port 5000.");
});
