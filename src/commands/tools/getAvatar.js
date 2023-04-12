const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getavatar')
    .setDescription('Return selected user avatar')
    .addUserOption((option) => option
        .setName("target")
        .setDescription("The user you'd like to get the avatar of")
        .setRequired(false)),
    async execute(interaction, client) {
        const selectedUser = interaction.options.getUser("target") || interaction.user;
        await interaction.reply({ content: selectedUser.displayAvatarURL()});
    }
}