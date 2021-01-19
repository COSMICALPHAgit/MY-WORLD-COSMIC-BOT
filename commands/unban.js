module.exports = {
    name: 'unban',
    description: "This command unban a member!",                      //created by COSMIC ALPHA  (OSMI(_ALPHA#1010
    execute(message, args) {


        const member = message.mentions.users.first();
        if (member) {
            if (message.member.roles.cache.has('776786219145232406')) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.unban();
                message.channel.send("User has been unbanned");
            } else {



                message.channel.send('you dont have the right Permission from the server owner');

            }
        }
    }
}