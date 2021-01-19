module.exports = async (client, messageReaction, user) => {
    const message = messageReaction.message;
    const welcomeChannel = message.guild.channels.find(c => c.name === '🙏║𝐖𝐄𝐋𝐂𝐎𝐌𝐄');
    const verifyChannel = message.guild.channels.find(c => c.name === 'verify');
    if(memberCounter.user.bot) return;


  await message.delete().catch(O_o => {});
  const verify = message.gulid.role.get('800980945364451340');
  

  if(messageReaction.emoji.name === '✅' && message.channel.id === verifyChannel.id){
    member.addrole(verify).catch(console.error);
    messageReaction.remove(member).catch(console.error);
  }

}