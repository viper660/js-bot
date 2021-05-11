const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
    const welcomechannelId = '805048963514105901' //Channel You Want to Send The Welcome Message
    const targetChannelId = `805048963514105903` //Channel For Rules

    client.on('guildMemberAdd', (member) => {
        console.log(member) // If You Want The User Info in Console Who Joined Server Then You Can Add This Line. // Optional
        const channel = member.guild.channels.cache.get(welcomechannelId)

        const embed = new MessageEmbed()
        .setTitle(`Welcome To ${member.guild.name}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`● Hello <@${member.user.id}>, \n ● Welcome to **${member.guild.name}**. \n ● Thanks For Joining Our Server.
\n ● Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}. Have a Nice Time.
\n ● for whitelist checkout <#814020876525371452>`)
        .setImage('https://cdn.discordapp.com/attachments/773108493766885386/839970326016557066/TPMC_BANNER.gif')
        // You Can Add More Fields If You Want
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RANDOM')
    channel.send(embed)
        
    })



const leavechannelId = '841033244207874049' //Channel You Want to Send The Leave Message

client.on('guildMemberRemove', (member) => {
    // You Can Do The Same For Leave Message
    const leavemessage = `<@${member.id}> Just Left Server  \n tata bye bye.`

    const channel1 = member.guild.channels.cache.get(leavechannelId)
    channel1.send(leavemessage)
})
}
