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

export async function getProfileData(token) {
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: "Bearer " + token },
  });
  const body = await res.json();
  if (res.ok) {
    return {
      image:
        body.images.length > 0
          ? body.images[0].url
          : "https://yt3.ggpht.com/iMT9MVrt6qxAfTxeKUX17ESdppsDntW2eA9YvnONcPqxlbdt9SkVhaIRsAtE0PFqRiLA-arexQ=s900-c-k-c0xffffffff-no-rj-mo",
      name: body.display_name,

      followers: body.followers.total,
    };
  } else {
    return {
      image:
        "https://yt3.ggpht.com/iMT9MVrt6qxAfTxeKUX17ESdppsDntW2eA9YvnONcPqxlbdt9SkVhaIRsAtE0PFqRiLA-arexQ=s900-c-k-c0xffffffff-no-rj-mo",
      name: "",

      followers: "error",
    };
  }
}

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

export async function getTopArtists(token, timeRange) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=20&offset=0`,
    { headers: { Authorization: "Bearer " + token } }
  );
  const topData = await res.json();

  if (res.ok) {
    let topArtists = [];

    let length = topData.items.length;
    if (length > 10) {
      length = 10;
    }

    for (let i = 0; i < length; i++) {
      topArtists.push({
        name: topData.items[i].name,
        image: topData.items[i].images[0].url,
      });
    }
    return topArtists;
  } else {
    return "error";
  }
}

export async function getTopTracks(token, timeRange) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=20&offset=0`,
    { headers: { Authorization: "Bearer " + token } }
  );
  const topData = await res.json();

  if (res.ok) {
    let topTracks = [];

    let length = topData.items.length;
    if (length > 10) {
      length = 10;
    }
    for (let i = 0; i < length; i++) {
      topTracks.push({
        name: topData.items[i].name,
        artist: topData.items[i].artists[0].name,
        album: topData.items[i].album.name,
        release: topData.items[i].album.release_date,
        image: topData.items[i].album.images[0].url,
      });
    }

    return topTracks;
  } else {
    return "error";
  }
}
