const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file/endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`COSMIC ASSISTANT IS ONLINE !`);
  client.user.setActivity("OVER MY MY WORLD SERVER", {type: 3});


});

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.delete();
    message.channel.send('pong');

  } else if(command === "say"){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  } else if(command === 'kick'){
    client.commands.get('kick').execute(message, args);

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
