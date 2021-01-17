module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#fa0202')
            .setTitle('SERVER GOING-OFFLINE')
            .setFooter('ADMIN')

        message.channel.send(newEmbed)
    }


}