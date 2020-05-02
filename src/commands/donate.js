const TurndownService = require('turndown')
const turndownService = new TurndownService()
const log = require('../utils/log')

async function donate(message) {
  try {
    const embed = {
      title: 'Donate us by PayPal',
      author: {
        name: 'Paypal.me',
        url: 'https://www.paypal.me',
        icon_url: 'https://i.imgur.com/CxxgcQH.png',
      },
      description: turndownService.turndown(
        '<a href="https://www.paypal.me/kiritito">Donate here</a>'
      ),
      color: 151511,
      footer: {
        text: 'Reddit Bot by Fosscord Team',
        icon_url:
          'https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png',
      },
    }
    log('Donate')
    return await message.channel.send({ embed })
  } catch (err) {
    log('Donate')
    console.log(err)
    return
  }
}

module.exports = donate
