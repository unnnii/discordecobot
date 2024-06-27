const { REST, Routes } = require ('discord.js'); 
const dotenv = require('dotenv');
const {Client, ActivityType, GatewayIntentBits, SlashCommandBuilder} = require("discord.js");
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


const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

client.login(process.env.TOKEN)
    .catch(error => {
        console.error('Failed to log in:', error);
    });

async function main() {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
}

client.on("messageCreate",(message) => {
    if (message.content == "shutdown") {
        client.destroy()
    }
})

client.on("messageCreate",(message) => {
    if (message.content == "shutdown") {
        client.destroy()
    }
})

const commands = [
    {
      name: 'test',
      description: 'testing ahhhh',
    },
  ];
  

