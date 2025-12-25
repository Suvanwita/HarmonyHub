const axios = require("axios");

async function getLyrics(artist, title) {
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  const res = await axios.get(url);
  return res.data.lyrics || "Lyrics not found.";
}

module.exports = { getLyrics };
