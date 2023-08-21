const { PermissionFlagsBits, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("make nim say things")
    .addChannelOption(
      option => option.setName('target')
        .setDescription('The channel to speak in')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName("message")
        .setDescription("Message to send")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),
  async execute(interaction) {
    const channel = interaction.options.getChannel('target')
    const msg = interaction.options.getString('message')

    await channel.send(msg)
    await interaction.reply("done :)")
  }
};
