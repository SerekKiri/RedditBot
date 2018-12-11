const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function donate (message) {
  try {
    const embed = {
      title: 'Donate us by PayPal',
      author: {
        name: 'Paypal.me',
        url: 'https://www.paypal.me',
        icon_url: 'https://i.imgur.com/CxxgcQH.png',
      },
      description: turndownService.turndown('<a href="https://www.paypal.me/kiritito">Donate here</a>'),
      color: 151511,
      footer: {
            text: 'Reddit Bot by SerekKiri & MiXerek',
            icon_url: "https://hackbrightacademy.com/content/uploads/2018/08/Reddit-logo.png",
       },
    }
    await message.channel.send({ embed })
  } catch (err) {
    console.log(err)
  }
}

module.exports = donate