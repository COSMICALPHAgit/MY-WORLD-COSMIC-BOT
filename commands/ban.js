module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args){

        if(message.member.roles.cache.has('776786219145232406')){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{

           

            message.channel.send('you dont have the right permission from the server owner');

        }
    }
}
}