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
                       - **Now you can check how many upvotes and comments have post without leaving discord!**
                     `,
        color: 16729344,
        footer: {
          text: "Reddit Bot by SerekKiri & MiXerek",
          icon_url:
            "https://hackbrightacademy.com/content/uploads/2018/08/Reddit-logo.png"
        }
      }
      await message.channel.send({ embed })
}

module.exports = update