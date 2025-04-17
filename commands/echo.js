const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Repeats what you say')
    .addStringOption(option => {
        return option
            .setName('text')
            .setDescription("The text to repeat")
            .setRequired(true)
        }
    ),

    async execute(interaction) {

    }
}
