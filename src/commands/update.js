const TurndownService = require('turndown')
const turndownService = new TurndownService()
const package = require('./../../package.json')

async function  update(message) {
    const embed = {
        author: {
          name: 'Trello',
          url: 'https://trello.com',
          icon_url:
            "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/trello-512.png"
        },
        description: `[Check info about updates on our board here!](https://trello.com/b/pPUq9UYI)`,
        color: 31167,
        footer: {
          text: 'Reddit Bot by Fosscord Team',
          icon_url:
            "https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png"
        }
      }
      await message.channel.send({ embed })
}

module.exports = update