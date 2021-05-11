const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
    const welcomechannelId = '721685697131446303' //Channel You Want to Send The Welcome Message
    const targetChannelId = `732550675619381288` //Channel For Rules

    client.on('guildMemberAdd', (member) => {
        console.log(member) // If You Want The User Info in Console Who Joined Server Then You Can Add This Line. // Optional
        const channel = member.guild.channels.cache.get(welcomechannelId)

        const embed = new MessageEmbed()
        .setTitle(`Welcome To ${member.guild.name}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`● Hello <@${member.user.id}>, \n ● Welcome to **${member.guild.name}**. \n ● Thanks For Joining Our Server.
\n ● You can select your Roles from ${member.guild.channels.cache.get(targetChannelId).toString()}. Have a Nice Time.
\n ● for inviting others <#722088070366756965>`)
        .setImage('https://cdn.discordapp.com/attachments/727881924361584640/787993497118310430/Animated_GIF-downsized.gif')
        // You Can Add More Fields If You Want
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RANDOM')
    channel.send(embed)
        
    })
}
