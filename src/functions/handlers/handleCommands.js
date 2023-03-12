const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync(`./src/commands`);
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
            
            const { commands, commandsArray } = client;
            for (const file of commandFiles) {
                const commands = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandsArray.push(command, command.data.toJSON());
                console.log(`Command ${command.data.name} loaded!`);
            }
        }
    }
}