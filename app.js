// ID : 954134777060016178
// Invite_link: https://discord.com/oauth2/authorize?client_id=954134777060016178&scope=bot&permissions=1
const {Constants, Client, Intents, MessageEmbed} = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
    intents : [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES]
});




client.on("ready", () => {
    console.log("this bot is now online " +client.user.tag)
    //client.user.setPresence({status: "dnd", activities: [{type: 'WATCHING', name: `⛽:  gweei`}] });
    //client.user.setActivity(`dwjkahdjhwajkdwajdaw`)
    getStats();
})

const getStats = async () => {
    try {
        let req = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`;
        const res = await axios.get(req);
        ethdata = res.data;
        client.user.setActivity(`$${ethdata.ethereum.usd} `);
    } catch (err) {
        console.log(err);
    }
}

client.on("messageCreate", (message) => {
if (message.author.bot == false){
 
  
    // const embed = new discord.MessageEmbed()
    // .setColor("RANDOM")
    // .setDescription(`according to my calculations, you are funny😂`)
    // message.channel.send({ embeds: [embed] });
    //  message.reply(`${message.channel.id}`)
    // console.log(`${message.content}`)
   // client.user.setActivity(`hay nako hay nako`);
    //client.user.setStatus('invisible')
}
})
client.login(process.env.discordToken)
//client.login(process.env.discordToken1)
