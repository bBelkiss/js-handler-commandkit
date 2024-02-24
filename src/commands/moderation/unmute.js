const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits

} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
     .setName('unmute')
     .setDescription('Unmute a un miembro del servidor.')
     .setDMPermission(false)
     .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
     .addUserOption((option) =>
        option
          .setName('target')
          .setDescription('El usuario a desmutear.')
          .setRequired(true)
    ),

    /** @param {import('commandkit').SlashCommandProps} param0 */
    run: async ({ interaction }) => {
        const { options, members } = interaction;
        const target = options.getString('target');

        try {
            await target.timeout(null);

            const embed = new EmbedBuilder()
                .setColor("Yellow")
                .setTitle('Usuario desmuteado.')
                .setAuthor({
                    name: members.user.tag,
                    iconURL: members.user.displayAvatarURL({ size: 256 })
                })
                .setFields({
                    name: 'Usuario',
                    value: `${target.user.tag} \`${target.user.id}\``,
                    inline: true
                });

            await interaction.reply({ embeds: [embed] });
            return;
        } catch (error) {
            console.log(error);

            const errorEmbed = new EmbedBuilder()
                .setColor('Red')
                .setDescription('Hubo un error al intentar mutear al usuario.')
            
            await interaction.reply({
               embeds: [errorEmbed],
               ephemeral: true,
           });
           return;
        }
    },

    /** @type {import('commandkit').CommandOptions} */
    options: {
        botPermissions: ['ModerateMembers']
    }
    
}      