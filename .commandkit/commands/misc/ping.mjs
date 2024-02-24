import {
  __commonJS,
  __require,
  init_esm_shims
} from "../../chunk-LT2LYCCO.mjs";

// src/commands/misc/ping.js
var require_ping = __commonJS({
  "src/commands/misc/ping.js"(exports, module) {
    init_esm_shims();
    var { SlashCommandBuilder } = __require("discord.js");
    module.exports = {
      data: new SlashCommandBuilder().setName("ping").setDescription("Says pong"),
      /** @param {import('commandkit').SlashCommandProps} param0 */
      run: async ({ client, interaction, handler }) => {
        await interaction.reply("Pong");
      }
    };
  }
});
export default require_ping();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL21pc2MvcGluZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgeyBTbGFzaENvbW1hbmRCdWlsZGVyIH0gPSByZXF1aXJlKCdkaXNjb3JkLmpzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IG5ldyBTbGFzaENvbW1hbmRCdWlsZGVyKClcclxuICAgICAgICAuc2V0TmFtZSgncGluZycpXHJcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKCdTYXlzIHBvbmcnKSxcclxuXHJcbiAgICAvKiogQHBhcmFtIHtpbXBvcnQoJ2NvbW1hbmRraXQnKS5TbGFzaENvbW1hbmRQcm9wc30gcGFyYW0wICovXHJcbiAgICBydW46IGFzeW5jICh7IGNsaWVudCwgaW50ZXJhY3Rpb24sIGhhbmRsZXIgfSkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KCdQb25nJyk7XHJcbiAgICB9LFxyXG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFNLEVBQUUsb0JBQW9CLElBQUksVUFBUSxZQUFZO0FBRXBELFdBQU8sVUFBVTtBQUFBLE1BQ2IsTUFBTSxJQUFJLG9CQUFvQixFQUN6QixRQUFRLE1BQU0sRUFDZCxlQUFlLFdBQVc7QUFBQTtBQUFBLE1BRy9CLEtBQUssT0FBTyxFQUFFLFFBQVEsYUFBYSxRQUFRLE1BQU07QUFDN0MsY0FBTSxZQUFZLE1BQU0sTUFBTTtBQUFBLE1BQ2xDO0FBQUEsSUFDSjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==