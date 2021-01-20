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
  client.user.setActivity("ᴏᴠᴇʀ ᴍʏ ᴡᴏʀʟᴅ ꜱᴇʀᴠᴇʀ", {
    type: 3
    
  });


  
  
  
      


  client.on("guildMemberAdd", guildmember =>{
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(guildmember.user.username)
    .setDescription("𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙊𝙐𝙍 𝙎𝙀𝙍𝙑𝙀𝙍 <a:verify2:785775855300247592>")
    .setFooter("𝙈𝙔 𝙒𝙊𝙍𝙇𝘿")
    .setThumbnail(guildmember.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    guildmember.guild.channels.cache.get('776796675125673984').send(`<@${guildmember.id}>`).then(guildmember.guild.channels.cache.get('776796675125673984').send(embed))
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
  }else if (command === 'off') {
    message.delete();
    client.commands.get('off').execute(message, args, Discord);

  }else if (command === 'res') {
    message.delete();
    client.commands.get('res').execute(message, args, Discord);
  }else if (command === 'clear') {
    message.delete();
    client.commands.get('clear').execute(message, args);
  }else if (command === 'unban'){
    message.delete();
    client.commands.get('unban').execute(message, args);
}



let messageArray = message.content.split(" ")
let args = messageArray.slice(1);

let cmd = messageArray[0];

if(cmd === "!ban") {
    let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

    const reason = args[1] || "There was no reason!";

    toBan.ban({
        reason: reason
    })
    message.channel.send(`${toBan} has been banned from the server!\nReason: ${reason}`)
}

if(cmd === "!unban") {
    let toBan = await bot.users.fetch(args[0])

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

    const reason = args[1] || "There was no reason!";

    message.guild.members.unban(toBan, reason)

    message.channel.send(`${toBan} has been unbanned from the server!`)
}





});

client.login(process.env.token);