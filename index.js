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
  client.on('guildMemberAdd', async newMember => {
    // IMPORTANT NOTE: Make Sure To Use async and rename bot to client or whatever name you have for your bot events!
    const welcomeChannel = newMember.guild.channels.cache.find(channel => channel.name === '🙏║𝐖𝐄𝐋𝐂𝐎𝐌𝐄')

    let msgEmbed = new Discord.MessageEmbed()
    .setTitle (`WELCOME TO OUR SERVER`)
    // welcomeChannel.send(msgEmbed) | (that's commented so you know to use it only if you want an embed and also don't delete the other "welcomeChannel.send" just change it in there and say "welcomeChannel.send(msgEmbed)" and define the msgEmbed variable as a let and define it above the "welcomeChannel.send" so the bot will check and see that it's defined so errors won't happen!
    if (newMember.client) return; // checks if it's a bot that joined so the channel won't be spammed with "*Discord Bot* has joined the server" and stuff like that, so check that.
    const newbieRole = newMember.roles.cache.find(role => role.name === '彡( MEMBERS )彡') // that was to define the role to give newbies (you can name the variable however you want that doesn't matter!)
    newMember.roles.add(newbieRole.id) // this will add the role to that member!
  })


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