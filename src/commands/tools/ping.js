const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Return my ping'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({ fetchReply: true });
        const newMessage = `API Latency is: ${client.ws.ping}ms\nClient Latency is: ${message.createdTimestamp - interaction.createdTimestamp}ms`;
        await interaction.editReply({ content: newMessage });
    }
}