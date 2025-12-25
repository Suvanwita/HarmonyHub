const { SlashCommandBuilder } = require("discord.js");
const { spotifyGet } = require("../services/spotify.service");
const { baseEmbed } = require("../utils/embedBuilder");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("song")
    .setDescription("Get song information")
    .addStringOption(opt =>
      opt.setName("name").setDescription("Song name").setRequired(true)
    ),

  async execute(interaction) {
    const query = interaction.options.getString("name");
    const res = await spotifyGet(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&limit=1`
    );

    const track = res.data.tracks.items[0];
    if (!track) return interaction.reply("Song not found.");

    const embed = baseEmbed(`🎵 ${track.name}`)
      .addFields(
        { name: "Artist", value: track.artists[0].name, inline: true },
        { name: "Album", value: track.album.name, inline: true },
        { name: "Release", value: track.album.release_date, inline: true },
        {
          name: "Popularity",
          value: `${"█".repeat(track.popularity / 10)} ${track.popularity}%`,
        }
      )
      .setURL(track.external_urls.spotify)
      .setThumbnail(track.album.images[0]?.url);

    interaction.reply({ embeds: [embed] });
  },
};
