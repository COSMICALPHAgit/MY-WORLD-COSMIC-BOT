const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
  console.log(`COSMIC ASSISTANT IS ONLINE !`);
  client.user.setActivity("OVER MY MY WORLD SERVER", {type: 3});


});

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.channel.send('pong');
    
  } else if(command === "say"){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }

  
});

client.login(process.env.token);
