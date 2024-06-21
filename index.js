

const dotenv = require('dotenv');
const {Client, ActivityType} = require("discord.js");
const client = new Client({intents: []});

dotenv.config();



client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN)
    .catch(error => {
        console.error('Failed to log in:', error);
    });
