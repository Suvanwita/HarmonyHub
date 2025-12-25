const { SlashCommandBuilder } = require("discord.js");
const { spotifyGet } = require("../services/spotify.service");
const { baseEmbed } = require("../utils/embedBuilder");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("artist")
    .setDescription("Get artist information")
    .addStringOption(opt =>
      opt.setName("name").setDescription("Artist name").setRequired(true)
    ),

  async execute(interaction) {
    const query = interaction.options.getString("name");

    const res = await spotifyGet(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=artist&limit=1`
    );

    const artist = res.data.artists.items[0];
    if (!artist) return interaction.reply("Artist not found.");

    const embed = baseEmbed(`👤 ${artist.name}`)
      .setThumbnail(artist.images[0]?.url)
      .addFields(
        { name: "Genres", value: artist.genres.join(", ") || "N/A" },
        { name: "Followers", value: artist.followers.total.toString() }
      )
      .setURL(artist.external_urls.spotify);

    interaction.reply({ embeds: [embed] });
  },
};
