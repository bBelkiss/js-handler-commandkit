const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Says pong'),

    /** @param {import('commandkit').SlashCommandProps} param0 */
    run: async ({ client, interaction, handler }) => {
        await interaction.reply('Pong');
    },
};