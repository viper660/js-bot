const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch"); // npm i node-fetch
const { MessageEmbed } = require("discord.js");


const config = require('./config.json');
const welcome = require('./commands/welcome');
const suggest = require('./commands/suggest'); // Add This
const loadCommands = require('./commands/load-commands'); // Add This


//bot activity
const activities_list = [
    "DM ME FOR ANY ASSISTENCE", 
    "📢-ᴡᴇʟᴄᴏᴍᴇ",
    "💬-ᴄʜᴀᴛꜱ",
    "𝕂𝔾ℂ - 𝕂𝕖𝕣𝕒𝕝𝕒 𝔾𝕒𝕞𝕖𝕣𝕤 ℂ𝕠𝕞𝕞𝕦𝕟𝕚𝕥𝕪"
    ];

    client.on('ready', () => {
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
            client.user.setActivity(activities_list[index],{ type: 'WATCHING' });
        }, 2000); 

        loadCommands(client) // Add This
        suggest(client) // Add This
        welcome(client)

      });

      
//bot log
client.once('ready', () => {
    console.log('𝕂𝔾ℂ bot is now online...');
});

//say command starts here
client.on("message", (message) => {
    if (message.content.startsWith(`/ann`)) {
      var text = message.content.split(' ').slice(1).join(' ');
      if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
      message.delete();
      const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle('ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ')
    .setDescription(text)
    .setThumbnail('https://cdn.discordapp.com/attachments/814158971346223144/819561892614766602/MOSHED-2021-2-24-18-6-48.gif')
    .setImage('https://media.discordapp.net/attachments/786193887978979438/786386654650433586/13-26-52-nitro_1.gif')   
    .setFooter('KGC BOT')
    .setTimestamp()
      message.channel.send(embed);
      message.channel.stopTyping()
     }
    });

    
client.on("message", (message) => {
    if (message.content.startsWith(`/say`)) {
      var text = message.content.split(' ').slice(1).join(' ');
      if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
       message.channel.send(text);
      message.delete();
      message.channel.stopTyping()
     }
    });
    

    client.on('message', message => {
        const channelid = '837196648005369897' // Channel ID
        if(message.channel.id === channelid) {
            if(message.author.bot) return
            fetch(
                `https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(message)}&uid=000` // API For ChatBot
            )
                .then((res) => res.json())
                .then(async (json) => {
                    return message.channel.send(`> ${message}\n${json.response}`); // User Message+Reply
                });
        }
    })
    client.on("messageDelete", message => {
        const channel = client.channels.cache.get('832185120366395447') // Channel ID
        const embed = new Discord.MessageEmbed()
        .setAuthor('Message Deleted')
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(`
    **Author:** <@${message.author.id}> : ${message.author.tag} : ${message.author.username} : ${message.author.id}
    **Date:** ${message.createdAt}
    **Channel:** <#${message.channel.id}> : ${message.channel.name} : ${message.channel.id}
    **Message:** ${message.content.replace(/`/g, "'")}
    **Attachment URL:** ${message.attachments.map(x => x.proxyURL)}
        `)
        channel.send(embed)
    })
    

    client.login(process.env.token);