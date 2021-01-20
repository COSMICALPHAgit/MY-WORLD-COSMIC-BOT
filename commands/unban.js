const {
    Client,
    Message
} = require("discord.js");

module.exports = {
    name: 'unban',
    description: "This command unban a member!",

    run: async (client, message, args) => {

        const member = args[0];

        if (!member) {
            return message.channel.send(data `Please enter a user id`)
        }

        try {

            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(data `$member) has been unbanned`);
        } catch (e) {
            return message.channel.send(data `An error occured!`)
        }
    }
}



