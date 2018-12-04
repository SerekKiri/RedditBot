const package = require('./../../package.json')

async function  update(message) {
    const embed = {
        title: `Change log:`,
        url: `https://github.com/SerekKiri/RedditBot`,
        author: {
          name: 'Reddit Bot',
          icon_url:
            "https://i.kym-cdn.com/photos/images/newsfeed/000/919/691/9e0.png"
        },
        description: ` Version ${package.version}
                       - **New command named "update" that will help you understand what is going on with reddit bot**

                       Version 1.3.0
                       - **Fixed bug "no description"**
                       - **Fixed bugs with videos in posts**`,
        color: 16729344,
        footer: {
          text: "Reddit Bot by SerekKiri & MiXerek",
          icon_url:
            "https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png?size=256"
        }
      }
      await message.channel.send({ embed })
}

module.exports = update