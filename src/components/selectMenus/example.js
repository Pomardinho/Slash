module.exports = {
    data: {
        name: 'example-menu'
    },
    async execute(interaction, client) {
        await interaction.reply({ content: `Example select menu, selected: ${interaction.values[0]}` })
    }
}