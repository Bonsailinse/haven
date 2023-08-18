const { SapphireClient } = require('@sapphire/framework');
const { GatewayIntentBits } = require('discord.js');

const client = new SapphireClient({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// const fs = require('node:fs');
// const path = require('node:path');

const { token } = require('./config.staging.json');

client.login(token);
