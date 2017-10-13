const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzY4NDcwMjM2MzA0NzY5MDI0.DMKcOQ.443gBxhab9tzZwZCKSu4INAXuyE';

client.on('ready', () => {
  console.log("I am ready");
});

client.on('message', message => {
  if (message.conten === '!ai') {
    // generate sentence
  }
});

client.login(token);