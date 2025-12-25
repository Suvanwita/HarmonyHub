const { SlashCommandBuilder } = require("discord.js");
const { getLyrics } = require("../services/lyrics.service");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lyrics")
    .setDescription("Get song lyrics")
    .addStringOption(opt =>
      opt.setName("song").setDescription("Song name").setRequired(true)
    )
    .addStringOption(opt =>
      opt.setName("artist").setDescription("Artist name").setRequired(true)
    ),

  async execute(interaction) {
    try {
      await interaction.deferReply();

      const song = interaction.options.getString("song");
      const artist = interaction.options.getString("artist");

      let lyrics = await getLyrics(artist, song);

      if (!lyrics) lyrics = "Lyrics not found.";

      if (lyrics.length > 1900) {
        lyrics = lyrics.slice(0, 1900) + "\n\n...(truncated)";
      }

      await interaction.editReply(
        `🎵 **${song}** by **${artist}**\n\n${lyrics}`
      );
    } catch (err) {
      console.error(err);

      if (interaction.deferred || interaction.replied) {
        await interaction.editReply("Failed to fetch lyrics.");
      } else {
        await interaction.reply("Failed to fetch lyrics.");
      }
    }
  },
};
