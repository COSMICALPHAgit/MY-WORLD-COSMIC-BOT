module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args) {
        const member = message.mentions.users.first();                                   //created by COSMIC ALPHA  (OSMI(_ALPHA#1010
        if (member) {
            if (message.member.roles.cache.has('776786219145232406')) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            } else {



                message.channel.send('you you dont have the right Permission from the server owner');

            }
        }
    }
}