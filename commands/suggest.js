const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
    const suggestinChannel = client.channels.cache.get('751349250511732789') // Channel For Suggestion
    client.on('message', message => {
        if(message.channel === suggestinChannel) {
            if(message.author.bot) return // Doesnot Delete BOTs Messages
            message.delete() // Delete Original Message Sent By User

            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            .setDescription(`${message.content}`)
            .setFooter('Want To Suggest Something? Type In This Channel.')
            message.channel.send(embed).then(message => { // Reactions
                message.react('<a:verify2:785775855300247592> ') // Change Emoji
                message.react('<a:mg_x:801112524933562428>') // Change Emoji
            })
        }
    })
}