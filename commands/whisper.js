const { PermissionFlagsBits, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("whisper")
    .setDescription("have nim say things in DMs")
    .addUserOption((option) =>
      option.setName("target").setDescription("The user to DM").setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("message").setDescription("Message to send").setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(true),
  async execute(interaction) {
    const user = interaction.options.getUser("target");
    const msg = interaction.options.getString("message");

    await user.send(msg);

    await interaction.reply("done :)");
  }
};
