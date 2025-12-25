const { EmbedBuilder } = require("discord.js");

function baseEmbed(title) {
  return new EmbedBuilder()
    .setTitle(title)
    .setColor(0x1db954)
    .setFooter({ text: "Music Info Bot 🎵" });
}

module.exports = { baseEmbed };
