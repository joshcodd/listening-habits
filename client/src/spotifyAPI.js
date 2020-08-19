export async function getProfileData(token) {
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: "Bearer " + token },
  });
  const body = await res.json();

  return {
    image: body.images[0].url,
    name: body.display_name,
    followers: body.followers.total,
  };
}

export async function getFollowing(token) {
  const res = await fetch(
    "https://api.spotify.com/v1/me/following?type=artist",
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  const body = await res.json();
  console.log(body);
  console.log(body.artists.total);
  return body.artists.total;
}

export async function getTopArtists(token) {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=20&offset=0",
    { headers: { Authorization: "Bearer " + token } }
  );
  const topData = await res.json();

  let topArtists = [];
  for (let i = 0; i < 10; i++) {
    topArtists.push({
      name: topData.items[i].name,
    });
  }
  return topArtists;
}

export async function getTopTracks(token) {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=20&offset=0",
    { headers: { Authorization: "Bearer " + token } }
  );
  const topData = await res.json();

  let topTracks = [];
  for (let i = 0; i < 10; i++) {
    topTracks.push({
      name: topData.items[i].name,
      artist: topData.items[i].artists[0].name,
      album: topData.items[i].album.name,
      release: topData.items[i].album.release_date,
    });
  }

  return topTracks;
}
