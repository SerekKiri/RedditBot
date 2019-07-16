const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function invite(message) {
    try {
            const embed = {
                    title: 'I have a link for you:',
                    description: turndownService.turndown(`<a href="https://discordapp.com/oauth2/authorize?client_id=485047416291065859&scope=bot&permissions=0">Click here to invite me!</a>`),
                    color: 16729344,
                    footer: {
                    icon_url: 'https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png',
                    text: 'Reddit Bot by Fosscord Team',
                }
            }

        await message.channel.send( { embed } )

    } catch(error) {
        console.log(error)
    }
}

module.exports = invite