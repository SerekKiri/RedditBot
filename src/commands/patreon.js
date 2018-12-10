const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function donate (message) {
  try {
    const embed = {
      title: 'By supporting us, you help us redditbot!',
      author: {
        name: 'Patreon.com',
        url: 'https://www.patreon.com',
        icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Patreon_logomark.svg/1000px-Patreon_logomark.svg.png',
      },
      description: turndownService.turndown('<a href="https://www.patreon.com/redibot">Join our team by supporting us!</a>'),
      color: 16345172,
      footer: {
            text: 'Reddit Bot by SerekKiri & MiXerek',
            icon_url: "https://hackbrightacademy.com/content/uploads/2018/08/Reddit-logo.png"
       },
    }
    await message.channel.send({ embed })
  } catch (err) {
    console.log(err)
  }
}

module.exports = donate