const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("https://discord.gg/M7VQxy")
setInterval(function() {
channel.send(`بسم الله الرحمن الرحيم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
