const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const token = '';

var url = 'https://a.4cdn.org/s4s/1.json';

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body["threads"]);
    }
})

client.on('ready', () => {
    console.log("I am ready");
});

client.on('message', message => {
    if (message.content === '!ai') {
        // generate sentence
    }
});

client.login(token);