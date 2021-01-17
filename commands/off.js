module.exports = {
    name: 'off',
    description: "Embeds!",                                                //created by COSMIC ALPHA  (OSMI(_ALPHA#1010

    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#fa0202')
            .setTitle('SERVER GOING-OFFLINE')
            .setFooter('𝗕𝗬 𝗦𝗘𝗥𝗩𝗘𝗥 𝗢𝗪𝗡𝗘𝗥')

        message.channel.send(newEmbed)
    }


}