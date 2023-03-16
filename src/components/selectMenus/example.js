module.exports = {
    data: {
        name: 'example'
    },
    async execute(interaction, client) {
        await interaction.reply({ content: `You selected: ${interaction.values[0]}` })
    }
}