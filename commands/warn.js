const { MessageEmbed } = require("discord.js")
const fs = require('fs')
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))

const moment = require('moment')

module.exports = {
  name: "warn",
  description: "Send a survey",
  guildOnly: true,
  cooldown: 5,

  run(msg, args) {

    // Embed na permisjebota
    const permisjebota = new MessageEmbed()
    .setTitle("⛔ I have no authority! :O")
    .setColor('ffff00')
    .setDescription("I am not authorized to this command! Give me permissions or consult the server admin!")
    .setTimestamp()
    // Embed na permisje dla użytkownika
    const permisje = new MessageEmbed()
    .setTitle("You are not allowed to this command! :O")
    .setColor('ffff00')
    .setDescription("I am not authorized to this command! Give me permissions or consult the server admin!")

    if (!msg.member.guild.me.hasPermission("ADMINISTRATOR"))
        return msg.channel.send(permisjebota)
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(permisje)

    if(!args[1]) {
        const bananekbot = new MessageEmbed()
        .setTitle("You did not provide arguments!")
        .setColor('ffff00')
        .setDescription("Correct use: `m!warn <nick> <reason>`")
        return msg.channel.send(bananekbot)
    }

    var warnUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))

    var reason = args.slice(1).join(" ")

    if (!warnUser) return msg.channel.send("No valid use argument: m!warn <nick> <reason>")

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0,
    } 

    warns[warnUser.id].warns++

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
        if(err) console.log(err)
    })

    const warnembed = new MessageEmbed()
    .setTitle("✅Warn was given")
    .setColor('ffff00')
    .setTimestamp()
    .setDescription(`User: ${warnUser} (${warnUser.id})
    Suitable warn: ${msg.author}
    Powód: ${reason}`)
    return msg.channel.send(warnembed)
  }
}