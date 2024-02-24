const ms = require('ms');
const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mutea a un miembro del servidor.')
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .addUserOption((option) =>
        option
            .setName('target')
            .setDescription('El usuario a mutear.')
            .setRequired(true)
        )
        .addStringOption((option) =>
        option
            .setName('duration')
            .setDescription('La duración del mute.')
            .setRequired(true)
        )
        .addStringOption((option) =>
        option
            .setName('reason')
            .setDescription('La razón del mute.')
        ),

    /** @param {import('commandkit').SlashCommandProps} param0 */
    run: async ({ interaction }) => {
        const { options, members } = interaction;

        const target = options.getString('target');
        const duration = options.getString('duration');
        const formattedDuration = ms(duration);
        const maxDuration = ms('28 days');
        const reason = options.getString('reason')?? 'No reason provided.';

        if (formattedDuration > maxDuration) {
            const errorEmbed = new EmbedBuilder()
             .setColor('Red')
             .setDescription('La duración máxima es 28 dias.');

             await interaction.reply({
                embeds: [errorEmbed],
                ephemeral: true
            });

            return;
        }

        try {
            await target.timeout(formattedDuration, reason);

            const embed = new EmbedBuilder()
                .setColor("Yellow")
                .setTitle('Usuario muteado.')
                .setAuthor({
                    name: members.user.tag,
                    iconURL: members.user.displayAvatarURL({ size: 256 })
                })
                .setFields(
                    {
                        name: 'Usuario',
                        value: `${target.user.tag} \`${target.user.id}\``,
                        inline: true
                    },
                    {
                        name: 'Duración',
                        value: duration.toString(),
                        inline: true
                    },
                    {
                        name: 'Razón',
                        value: reason,
                        inline: false
                    }
                );
            
                await interaction.reply({
                    embeds: [embed] 
                });
                return;
        } catch (error) {
            console.error(error);
            
            const errorEmbed = new EmbedBuilder()
            .setColor('Red')
            .setDescription('Hubo un error al mutear al usuario');

            await interaction.reply({
               embeds: [errorEmbed],
               ephemeral: true
           });

           return;
        }
    },

    /** @type {import('commandkit').CommandOptions} */
    options: {
        botPermissions: ['ModerateMembers']
    }
};