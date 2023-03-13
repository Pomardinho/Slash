module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Logged int as ${client.user.tag}!`)
    }
}