const { PermissionFlagsBits, SlashCommandBuilder, AttachmentBuilder } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("nap")
    .setDescription("nim takes a nap")
    .addChannelOption(
      option => option.setName('target')
        .setDescription('The channel to speak in')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),
  async execute(interaction) {
    const channel = interaction.options.getChannel('target')
    const attachment = new AttachmentBuilder("https://media.discordapp.net/attachments/931307396561776641/1143008273784647762/Screenshot_20230819_113434_Instagram.jpg?width=673&height=672")

    await channel.send({ files: [attachment] })
    await interaction.reply("done :)")
  }
};
