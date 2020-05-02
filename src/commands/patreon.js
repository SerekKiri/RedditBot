const TurndownService = require('turndown')
const turndownService = new TurndownService()
const log = require('../utils/log')

async function donate(message) {
  try {
    const embed = {
      title: 'By supporting us, you help us redditbot!',
      author: {
        name: 'Patreon.com',
        url: 'https://www.patreon.com',
        icon_url:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Patreon_logomark.svg/1000px-Patreon_logomark.svg.png',
      },
      description: turndownService.turndown(
        '<a href="https://www.patreon.com/redibot">Join our team by supporting us!</a>'
      ),
      color: 16345172,
      footer: {
        text: 'Reddit Bot by Fosscord Team',
        icon_url:
          'https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png',
      },
    }
    await message.channel.send({ embed })
    log('Patreon')
    return
  } catch (err) {
    console.log(err)
    const log = require('../utils/log')
    return
  }
}

module.exports = donate
