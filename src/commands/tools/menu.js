const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('menu')
    .setDescription('Return a select menu'),
    async execute(interaction, client) {
        const menu = new SelectMenuBuilder()
        .setCustomId('example')
        .setMinValues(1)
        .setMaxValues(1)
        .setOptions(new SelectMenuOptionBuilder({ label: `Option 1`, value: `1` }),
                    new SelectMenuOptionBuilder({ label: `Option 2`, value: `2` })
        );

        await interaction.reply({ components: [new ActionRowBuilder().addComponents(menu)] });
    }
}