const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
     console.log("connor is now online);
});

Client.on('message', message => {
    if (message.content === 'hello') {
       message.reply('Hello! make sure to read rules!');
    }
});

// THIS MUST BE THIS WAY
Client.login(process.env.BOT_TOKEN);
