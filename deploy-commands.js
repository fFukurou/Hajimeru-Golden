const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
require('dotenv').config();

const clientId = process.env.CLIENTID;
const token = process.env.TOKEN;


function getFiles(dir) {
    const files = fs.readdirSync(dir, {
        withFileTypes: true
    });

    let commandFiles = [];

    for (const file of files) {
        if(file.isDirectory()) {
            commandFiles = [
                ...commandFiles,
                ...getFiles(`${dir}/${file.name}`)
            ]
        } 
        else if (file.name.endsWith(".js")) {
            commandFiles.push(`${dir}/${file.name}`);
        }
    }
    return commandFiles;
}



let commands = [];
const commandFiles = getFiles('./commands');

for (const file of commandFiles) {
    const command = require(file);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), {body: commands})
    .then(() => console.log(`Successfully registered application commands!`))
    .catch(console.error);