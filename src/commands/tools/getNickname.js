const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getnickname')
    .setDescription('Return selected user nickname')
    .addUserOption((option) => option
        .setName("target")
        .setDescription("The user you'd like to get the nickname of")
        .setRequired(false)),
    async execute(interaction, client) {
        const selectedUser = interaction.options.getUser("target") || interaction.user;
        await interaction.reply({ content: interaction.member.nickname == null ? `${selectedUser.username}` : `${interaction.member.nickname}`})
    }
}