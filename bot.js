const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';

client.on('ready', () => {
  console.log("I am ready");
});

client.on('message', message => {
  if (message.conten === '!ai') {
    // generate sentence
  }
});

client.login(token);