module.exports = async (client) =>{
    const guild = client.guilds.cache.get('751330123336253491');
    setInterval(() =>{                               //CREATED BY COSMICALPHA (OSMI(_ALPHA#1010
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('791293801767108629');
        channel.setName(`🌏║𝐌𝐄𝐌𝐁𝐄𝐑𝐒: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}
 