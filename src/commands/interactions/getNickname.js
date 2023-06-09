const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName('getNickname')
    .setType(ApplicationCommandType.User),
    async execute(interaction, client) {
        await interaction.reply({ content: interaction.member.nickname == null ? `${interaction.member.user.username}` : `${interaction.member.nickname}`});
    }
}