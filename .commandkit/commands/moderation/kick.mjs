import {
  __commonJS,
  __require,
  init_esm_shims
} from "../../chunk-LT2LYCCO.mjs";

// src/commands/moderation/kick.js
var require_kick = __commonJS({
  "src/commands/moderation/kick.js"(exports, module) {
    init_esm_shims();
    var {
      SlashCommandBuilder,
      EmbedBuilder,
      PermissionFlagsBits
    } = __require("discord.js");
    module.exports = {
      data: new SlashCommandBuilder().setName("kick").setDescription("Kick a member from the server.").setDMPermission(false).setDefaultMemberPermissions(PermissionFlagsBits.KickMembers).addUserOption(
        (option) => option.setName("target").setDescription("The target to kick.").setRequired(true)
      ).addStringOption(
        (option) => option.setName("reason").setDescription("Specify a reason for kicking this member.").setMinLength(1).setMaxLength(512).setRequired(false)
      ),
      /** @param {import('commandkit').SlashCommandProps} param0 */
      run: async ({ interaction }) => {
        const { options, member } = interaction;
        const target = options.getMember("target");
        const reason = options.getString("reason") ?? "No reason provided.";
        try {
          await target.kick(reason);
          const embed = new EmbedBuilder().setColor("Green").setTitle("Target kicked successfully.").setFields(
            {
              name: "Target",
              value: `${target.user.tag} \`${target.user.id}\``,
              inline: true
            },
            {
              name: "Moderator",
              value: `${member.user.tag} \`${member.user.id}\``,
              inline: true
            },
            {
              name: "Reason",
              value: reason,
              inline: false
            }
          );
          await interaction.reply({ embeds: [embed] });
          return;
        } catch {
          const errorEmbed = new EmbedBuilder().setColor("Red").setDescription("There was an error kicking this member.");
          await interaction.reply({
            embeds: [errorEmbed]
          });
          return;
        }
      },
      /** @type {import('commandkit').CommandOptions} */
      options: {
        botPermissions: ["KickMembers"]
      }
    };
  }
});
export default require_kick();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL21vZGVyYXRpb24va2ljay5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3Qge1xyXG4gICAgU2xhc2hDb21tYW5kQnVpbGRlcixcclxuICAgIEVtYmVkQnVpbGRlcixcclxuICAgIFBlcm1pc3Npb25GbGFnc0JpdHNcclxufSA9IHJlcXVpcmUoJ2Rpc2NvcmQuanMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YTogbmV3IFNsYXNoQ29tbWFuZEJ1aWxkZXIoKVxyXG4gICAgICAgIC5zZXROYW1lKCdraWNrJylcclxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ0tpY2sgYSBtZW1iZXIgZnJvbSB0aGUgc2VydmVyLicpXHJcbiAgICAgICAgLnNldERNUGVybWlzc2lvbihmYWxzZSlcclxuICAgICAgICAuc2V0RGVmYXVsdE1lbWJlclBlcm1pc3Npb25zKFBlcm1pc3Npb25GbGFnc0JpdHMuS2lja01lbWJlcnMpXHJcbiAgICAgICAgLmFkZFVzZXJPcHRpb24oKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAuc2V0TmFtZSgndGFyZ2V0JylcclxuICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbignVGhlIHRhcmdldCB0byBraWNrLicpXHJcbiAgICAgICAgICAgICAgICAuc2V0UmVxdWlyZWQodHJ1ZSlcclxuICAgICAgICApXHJcbiAgICAgICAgLmFkZFN0cmluZ09wdGlvbigob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICBvcHRpb25cclxuICAgICAgICAgICAgICAgIC5zZXROYW1lKCdyZWFzb24nKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKCdTcGVjaWZ5IGEgcmVhc29uIGZvciBraWNraW5nIHRoaXMgbWVtYmVyLicpXHJcbiAgICAgICAgICAgICAgICAuc2V0TWluTGVuZ3RoKDEpXHJcbiAgICAgICAgICAgICAgICAuc2V0TWF4TGVuZ3RoKDUxMilcclxuICAgICAgICAgICAgICAgIC5zZXRSZXF1aXJlZChmYWxzZSlcclxuICAgICAgICApLFxyXG5cclxuICAgIC8qKiBAcGFyYW0ge2ltcG9ydCgnY29tbWFuZGtpdCcpLlNsYXNoQ29tbWFuZFByb3BzfSBwYXJhbTAgKi9cclxuICAgIHJ1bjogYXN5bmMgKHsgaW50ZXJhY3Rpb24gfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgb3B0aW9ucywgbWVtYmVyIH0gPSBpbnRlcmFjdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy5nZXRNZW1iZXIoJ3RhcmdldCcpO1xyXG4gICAgICAgIGNvbnN0IHJlYXNvbiA9IG9wdGlvbnMuZ2V0U3RyaW5nKCdyZWFzb24nKSA/PyAnTm8gcmVhc29uIHByb3ZpZGVkLic7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRhcmdldC5raWNrKHJlYXNvbik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgLnNldENvbG9yKCdHcmVlbicpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUoJ1RhcmdldCBraWNrZWQgc3VjY2Vzc2Z1bGx5LicpXHJcbiAgICAgICAgICAgICAgICAuc2V0RmllbGRzKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1RhcmdldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgJHt0YXJnZXQudXNlci50YWd9IFxcYCR7dGFyZ2V0LnVzZXIuaWR9XFxgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdNb2RlcmF0b3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7bWVtYmVyLnVzZXIudGFnfSBcXGAke21lbWJlci51c2VyLmlkfVxcYGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUmVhc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlYXNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7IGVtYmVkczogW2VtYmVkXSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvckVtYmVkID0gbmV3IEVtYmVkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAuc2V0Q29sb3IoJ1JlZCcpXHJcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ1RoZXJlIHdhcyBhbiBlcnJvciBraWNraW5nIHRoaXMgbWVtYmVyLicpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoe1xyXG4gICAgICAgICAgICAgICAgZW1iZWRzOiBbZXJyb3JFbWJlZF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKiBAdHlwZSB7aW1wb3J0KCdjb21tYW5ka2l0JykuQ29tbWFuZE9wdGlvbnN9ICovXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgYm90UGVybWlzc2lvbnM6IFsnS2lja01lbWJlcnMnXVxyXG4gICAgfVxyXG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFNO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSixJQUFJLFVBQVEsWUFBWTtBQUV4QixXQUFPLFVBQVU7QUFBQSxNQUNiLE1BQU0sSUFBSSxvQkFBb0IsRUFDekIsUUFBUSxNQUFNLEVBQ2QsZUFBZSxnQ0FBZ0MsRUFDL0MsZ0JBQWdCLEtBQUssRUFDckIsNEJBQTRCLG9CQUFvQixXQUFXLEVBQzNEO0FBQUEsUUFBYyxDQUFDLFdBQ1osT0FDSyxRQUFRLFFBQVEsRUFDaEIsZUFBZSxxQkFBcUIsRUFDcEMsWUFBWSxJQUFJO0FBQUEsTUFDekIsRUFDQztBQUFBLFFBQWdCLENBQUMsV0FDZCxPQUNLLFFBQVEsUUFBUSxFQUNoQixlQUFlLDJDQUEyQyxFQUMxRCxhQUFhLENBQUMsRUFDZCxhQUFhLEdBQUcsRUFDaEIsWUFBWSxLQUFLO0FBQUEsTUFDMUI7QUFBQTtBQUFBLE1BR0osS0FBSyxPQUFPLEVBQUUsWUFBWSxNQUFNO0FBQzVCLGNBQU0sRUFBRSxTQUFTLE9BQU8sSUFBSTtBQUU1QixjQUFNLFNBQVMsUUFBUSxVQUFVLFFBQVE7QUFDekMsY0FBTSxTQUFTLFFBQVEsVUFBVSxRQUFRLEtBQUs7QUFFOUMsWUFBSTtBQUNBLGdCQUFNLE9BQU8sS0FBSyxNQUFNO0FBRXhCLGdCQUFNLFFBQVEsSUFBSSxhQUFhLEVBQzFCLFNBQVMsT0FBTyxFQUNoQixTQUFTLDZCQUE2QixFQUN0QztBQUFBLFlBQ0c7QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE9BQU8sR0FBRyxPQUFPLEtBQUssR0FBRyxNQUFNLE9BQU8sS0FBSyxFQUFFO0FBQUEsY0FDN0MsUUFBUTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDSSxNQUFNO0FBQUEsY0FDTixPQUFPLEdBQUcsT0FBTyxLQUFLLEdBQUcsTUFBTSxPQUFPLEtBQUssRUFBRTtBQUFBLGNBQzdDLFFBQVE7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0ksTUFBTTtBQUFBLGNBQ04sT0FBTztBQUFBLGNBQ1AsUUFBUTtBQUFBLFlBQ1o7QUFBQSxVQUNKO0FBRUosZ0JBQU0sWUFBWSxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNDO0FBQUEsUUFDSixRQUFRO0FBQ0osZ0JBQU0sYUFBYSxJQUFJLGFBQWEsRUFDL0IsU0FBUyxLQUFLLEVBQ2QsZUFBZSx5Q0FBeUM7QUFFN0QsZ0JBQU0sWUFBWSxNQUFNO0FBQUEsWUFDcEIsUUFBUSxDQUFDLFVBQVU7QUFBQSxVQUN2QixDQUFDO0FBQ0Q7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBO0FBQUEsTUFHQSxTQUFTO0FBQUEsUUFDTCxnQkFBZ0IsQ0FBQyxhQUFhO0FBQUEsTUFDbEM7QUFBQSxJQUNKO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K