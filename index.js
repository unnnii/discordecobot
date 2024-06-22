const dotenv = require('dotenv');
const {Client, ActivityType, GatewayIntentBits} = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]});

dotenv.config();



client.on("ready", () => {
    console.log(`${client.user.tag} Online`);
});




client.login(process.env.TOKEN)
    .catch(error => {
        console.error('Failed to log in:', error);
    });


    client.on("messageCreate", (message) => {
        console.log(`${message.content}`)
        console.log(`${message.author.tag}`)
    } )

client.on("messageCreate",(message) => {
    if (message.content == "aide"||message.content ==  "aidee") {
        message.reply("lorem impsum")
    }
})

client.on("messageCreate",(message) => {
    if (message.content == "shutdown") {
        client.destroy()
    }
})