require('dotenv').config();
const { Client, Events, GatewayIntentBits, SlashCommandBuilder, InteractionCallback } = require('discord.js');

const token = process.env.TOKEN;


const client = new Client( {intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "ping") {
        interaction.reply("pong");
    }

    if (interaction.commandName === "hello") {
        let user = interaction.options.getUser('user') || interaction.user;
        interaction.reply(`hello ${user.globalName || user.username}!`);
    }

    if (interaction.commandName === "echo") {
        let text = interaction.options.getString('text');
        interaction.reply(text);
    }

});

client.login(token);