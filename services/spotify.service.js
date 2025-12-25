const axios = require("axios");

let accessToken = "";
let tokenExpiry = 0;

async function getAccessToken() {
  if (Date.now() < tokenExpiry) return accessToken;

  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({ grant_type: "client_credentials" }),
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ":" +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  accessToken = res.data.access_token;
  tokenExpiry = Date.now() + res.data.expires_in * 1000;
  return accessToken;
}

async function spotifyGet(url) {
  const token = await getAccessToken();
  return axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

module.exports = { spotifyGet };
