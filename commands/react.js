const { PermissionFlagsBits, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("react")
    .setDescription("make nim react to things")
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

    await resolvedMessage.react(emoji);

    await interaction.reply("done :)");
  }
};
