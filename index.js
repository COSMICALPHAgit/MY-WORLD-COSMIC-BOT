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

  if(command === 'off'){
    message.delete();
    message.channel.send('pong');

  } else if(command === "say"){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }
})

  client.on('message', (msg) => {
   
    if (msg.content === '!off') {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#fa0202')
      .setTitle('SERVER GOING-OFFLINE')                        
      .setFooter('ADMIN')
      msg.channel.send(exampleEmbed)
    } 
    else  if (msg.content === '!tell') {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#02fa44')
      .setTitle('ꜱᴇʀᴠᴇʀ ʀᴇꜱᴛᴀʀᴛɪɴɢ')
      .setFooter('𝗕𝗬 𝗦𝗘𝗥𝗩𝗘𝗥 𝗢𝗪𝗡𝗘𝗥')
      msg.channel.send(exampleEmbed)
    }
    else if (msg.content.startsWith('!kick')) {
      if (msg.mentions.users.size) {
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
      } else {
        msg.reply('Please tag a valid user!');
      }
    }
  
});

client.login(process.env.token);
