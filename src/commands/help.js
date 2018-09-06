async function help(message) {
    const embed = {
        title: `Check my crazy commands below!`,
        author: {
            name: 'Reddit Bot',
            url: 'https://github.com/SerekKiri/RedditBot',
            icon_url: "https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png"
        },
        description: '**Prefix: reddit**\n\n **Commands:**\n - help\n - new [subreddit name] <Number of posts>\n - hot [subreddit name] <Number of posts>\n - top [subreddit name] <Number of posts>',
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