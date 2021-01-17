const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';              //created by COSMIC ALPHA  (OSMI(_ALPHA#1010

const fs = require('fs');
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`COSMIC ASSISTANT IS ONLINE !`);
  memberCounter(client)
  client.user.setActivity("OVER MY MY WORLD SERVER", {
    type: 3
    
  });
  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '🙏║𝐖𝐄𝐋𝐂𝐎𝐌𝐄');
    let embed = new Discord.RichEmbed()
    .setTitle("Welcome")
    .setAuthor(`${member.user.tag} Has Joined.`, member.user.displayAvatarURL,)
    .setThumbnail(member.user.displayAvatarURL)
    .addField('Date Joined', member.user.createdAt, true)
    .addField('Total Members', member.guild.memberCount, true)
  
      channel.send(embed);
  });
  


});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  
  if (command === "say") {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  } else if (command === 'kick') {
    client.commands.get('kick').execute(message, args);

  } else if (command === 'ban') {
    client.commands.get('ban').execute(message, args);

  }else if (command === 'off') {
    message.delete();
    client.commands.get('off').execute(message, args, Discord);

  }else if (command === 'res') {
    message.delete();
    client.commands.get('res').execute(message, args, Discord);
  }else if (command === 'clear') {
    message.delete();
    client.commands.get('clear').execute(message, args);
  }




});

client.login(process.env.token);