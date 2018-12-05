const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function invite(message) {
    try {
            const embed = {
                    title: 'I have a link for you:',
                    description: turndownService.turndown(`<a href="https://discordapp.com/oauth2/authorize?client_id=485047416291065859&scope=bot&permissions=0">Click here to invite me!</a>`),
                    color: 16729344,
                    footer: {
                    icon_url: 'https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png?size=256',
                    text: 'Reddit Bot by SerekKiri & MiXerek',
                }
            }

        await message.channel.send( { embed } )

    } catch(error) {
        console.log(error)
    }
}

module.exports = invite