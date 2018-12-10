const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function report (message) {
  try {
    const embed = {
      title: 'Report an issue on github',
      author: {
        name: 'Github',
        url: 'https://www.github.com',
        icon_url: 'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png',
      },
      description: turndownService.turndown('<a href="https://github.com/SerekKiri/RedditBot/issues/new">Click here to report an issue</a>'),
      color: 3355443,
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

module.exports = report