const Discord = require('discord.js');

const client = new Discord.Client()
const prefix = '!';

client.once('ready', () => {
  console.log(`COSMIC ASSISTANT IS ONLINE !`);
  client.user.setActivity("OVER MY MY WORLD SERVER", {type: 3});


});

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


  
});

client.login(process.env.token);
