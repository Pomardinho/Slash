const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('menu')
    .setDescription('Return a select menu'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
        .setCustomId('example')
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions({ label: `Option 1`, value: `1` }, { label: `Option 2`, value: `2` });

        await interaction.reply({ components: [new ActionRowBuilder().addComponents(menu)] });
    }
}