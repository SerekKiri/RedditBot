async function help(message) {
    const embed = {
        title: `Check my crazy commands below!`,
        author: {
            name: 'Reddit Bot',
            url: 'https://github.com/SerekKiri/RedditBot',
            icon_url: "https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png"
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
        text: 'Reddit Bot by SerekKiri & MiXerek',
        icon_url: "https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png?size=256"
        },
    }
  await message.channel.send({ embed })
}

module.exports = help