const { Client } = require("discord.js");

module.exports = client => {
    console.log(`Logged in as ${client.user.tag}!`);
    const welcome = client.channels.find(c => c.name === '🙏║𝐖𝐄𝐋𝐂𝐎𝐌𝐄');
    const verify = client.channels.find(c => c.name === 'verifyy');

    const fetchedMessages = [welcome, verify];
    fetchedMessages.forEach(c => {
        c.fetchMessages({ limit: 10 }).then(collected => console.log(`Fetched ${collected.size} messages in ${c.name}.`)).catch(console.error);
    });
};