const TurndownService = require('turndown')
const turndownService = new TurndownService()


async function git (message) {
    try {
      const embed = {
        title: 'Github Repository',
        author: {
          name: 'Github.com',
          url: 'https://www.github.com',
          icon_url: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
        },
        description: turndownService.turndown('<a href="https://github.com/SerekKiri/RedditBot">Reddit repository link</a>'),
        color: 2369838,
        footer: {
          icon_url: 'https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png',
          text: 'Reddit Bot by Fosscord Team',
        },
      }
      await message.channel.send({ embed })
    } catch (err) {
      console.log(err)
  }
}

module.exports = git