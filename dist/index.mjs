/* Optimized production build generated by CommandKit */
import {
  __dirname,
  __require,
  init_esm_shims
} from "./chunk-U6E35Z6M.mjs";

// src/index.js
init_esm_shims();
__require("dotenv/config");
var { Client, GatewayIntentBits } = __require("discord.js");
var { CommandKit } = __require("commandkit");
var path = __require("path");
var client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});
new CommandKit({
  client,
  eventsPath: path.join(__dirname, "events"),
  commandsPath: path.join(__dirname, "commands")
});
client.login(process.env.TOKEN);
