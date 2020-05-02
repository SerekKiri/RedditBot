const TurndownService = require('turndown')
const turndownService = new TurndownService()
const log = require('../utils/log')

async function invite(message) {
  try {
    const embed = {
      title: 'I have a link for you:',
      description: turndownService.turndown(
        `<a href="https://discordapp.com/oauth2/authorize?client_id=485047416291065859&scope=bot&permissions=0">Click here to invite me!</a>`
      ),
      color: 16729344,
      footer: {
        icon_url:
          'https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png',
        text: 'Reddit Bot by Fosscord Team',
      },
    }

    await message.channel.send({ embed })
    log('Invite redi')
    return
  } catch (error) {
    console.log(error)
    log('Invite redi')
    return
  }
}

module.exports = invite
