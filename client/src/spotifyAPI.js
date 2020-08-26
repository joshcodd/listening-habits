let resultLimit = 10;

//Convert split button state into time range for Spotify API
export function convertTime(time) {
  switch (time) {
    case "4 Weeks":
      return "short_term";

    case "6 Months":
      return "medium_term";

    case "All Time":
      return "long_term";

    default:
      alert("Error");
      break;
  }
}

//Profile data
export async function getProfileData(token) {
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: "Bearer " + token },
  });

  const body = await res.json();

  if (res.ok) {
    return {
      image: body.images.length > 0 ? body.images[0].url : "/placeholder.jpg",
      name: body.display_name,
      followers: body.followers.total,
    };
  } else {
    return {
      image: "/placeholder.jpg",
      name: "",
      followers: "error",
    };
  }
}

//Following number
export async function getFollowing(token) {
  const res = await fetch(
    "https://api.spotify.com/v1/me/following?type=artist",
    {
      headers: { Authorization: "Bearer " + token },
    }
  );

  const body = await res.json();

  if (res.ok) {
    return body.artists.total;
  } else {
    return "error";
  }
}

//Top artists
export async function getTopArtists(token, timeRange) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${resultLimit}&offset=0`,
    { headers: { Authorization: "Bearer " + token } }
  );

  const topData = await res.json();

  if (res.ok) {
    return topData.items;
  } else {
    return "error";
  }
}

//Top tracks
export async function getTopTracks(token, timeRange) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${resultLimit}&offset=0`,
    { headers: { Authorization: "Bearer " + token } }
  );
  const topData = await res.json();

  if (res.ok) {
    return topData.items;
  } else {
    return "error";
  }
}

//Top genres
export async function getTopGenres(token, timeRange) {
  resultLimit = 50;
  let genres = [];
  let topArtists = await getTopArtists(token, timeRange);
  resultLimit = 10;

  if (topArtists !== "error") {
    topArtists.forEach((artist) => {
      genres = genres.concat(artist.genres);
    });

    let genreCount = {};
    genres.forEach((genre) => {
      let val = 0;
      if (genre in genreCount) {
        val = genreCount[genre];
      }
      val++;
      genreCount[genre] = val;
    });

    genreCount = Object.entries(genreCount);
    genreCount = genreCount.sort(function (a, b) {
      return b[1] - a[1];
    });

    return genreCount.slice(0, 10);
  } else {
    return "error";
  }
}
