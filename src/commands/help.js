const log = require('../utils/log')

async function help(message) {
  const embed = {
    title: `Check my crazy commands below!`,
    author: {
      name: 'Reddit Bot',
      url: 'https://github.com/SerekKiri/RedditBot',
      icon_url:
        'https://i.kym-cdn.com/photos/images/newsfeed/000/919/691/9e0.png',
    },
    description: `**Prefix: reddit**\n
**Commands:**
- help
- report (If you find a bug just help us by reporting it)
- update (To let you know what is going on with Reddit Bot)
- github (If you want to check the source code, you can take a look :eyes:)
- donate (If you want you can support us to help us handle hosting costs)
- invite (If you want to invite me on your server just use this command)
- discord (RedditBot support server)
- patreon (Join our team by supporting us!)
----------------------------------------
**Reddit commands:**
- new [subreddit name] <Number of posts>
- hot [subreddit name] <Number of posts>
- top [subreddit name] <Number of posts>
- random <Number of posts>
- user [username] (looking for users)`,
    timestamp: new Date(),
    color: 16729344,
    footer: {
      text: 'Reddit Bot by Fosscord Team',
      icon_url:
        'https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png',
    },
  }
  log('Help')
  await message.channel.send({ embed })
  return
}

module.exports = help
