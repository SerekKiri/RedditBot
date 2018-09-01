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
          icon_url: 'https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png?size=256',
          text: 'Reddit Bot by SerekKiri & MiXerek',
        },
      }
      await message.channel.send({ embed })
    } catch (err) {
      console.log(err)
  }
}

module.exports = git