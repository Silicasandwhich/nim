const { PermissionFlagsBits, SlashCommandBuilder } = require("discord.js");
const { bot } = require("../index.ts");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unreact")
    .setDescription("make nim unreact to things")
    .addStringOption((option) =>
      option.setName("url").setDescription("the url of the message").setRequired(true)
    )
    .addChannelOption((option) =>
      option.setName("channel").setDescription("channel of the message").setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("emoji").setDescription("emoji to react with").setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),
  async execute(interaction) {
    const messageLink = interaction.options.getString("url");
    const messageID = messageLink.split("/")[messageLink.split("/").length - 1];
    const resolvedMessage = await interaction.options
      .getChannel("channel")
      .messages.fetch(messageID);

    const emoji = interaction.options.getString("emoji");

    resolvedMessage.reactions.cache
      .find((reaction) => reaction.emoji.name == emoji)
      .users.remove(bot.client.user.id);

    await interaction.reply("done :)");
  }
};
