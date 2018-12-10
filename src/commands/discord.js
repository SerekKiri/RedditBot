const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function invite(message) {
    try {
            const embed = {
                    author: {
                        name: 'FossCord',
                        url: 'https://fosscord.github.io/',
                        icon_url: 'https://cdn.discordapp.com/icons/485768997607047179/d15af66a73043d2f6080edab0c05eb75.webp'
                    },
                    description: turndownService.turndown(`<a href="https://discord.gg/7q5VcC6">Join support server</a>`),
                    color: 16729344,
                    footer: {
                    icon_url: 'https://hackbrightacademy.com/content/uploads/2018/08/Reddit-logo.png',
                    text: 'Reddit Bot by SerekKiri & MiXerek',
                }
            }

        await message.channel.send( { embed } )

    } catch(error) {
        console.log(error)
    }
}

module.exports = invite