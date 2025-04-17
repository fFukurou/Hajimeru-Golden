const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Says hello to someone')
    .addUserOption(option => {
        return option
            .setName('user')
            .setDescription("The user I'm gonna greet")
            .setRequired(false)
        }
    ), 

    async execute(interaction) {

    }
}
