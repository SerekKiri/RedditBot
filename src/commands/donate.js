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
            icon_url: "https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png?size=256"
       },
    }
    await message.channel.send({ embed })
  } catch (err) {
    console.log(err)
  }
}

module.exports = donate