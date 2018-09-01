const axios = require('axios')
const TurndownService = require('turndown')
const turndownService = new TurndownService()


async function find(message) {
    let mes = message.content.slice(11)
    if (mes === '') {
        message.reply('You need to type subreddit name here!')
    } else  {
        try {
 
        const json = await axios.get(`https://www.reddit.com/r/${mes}/new.json?limit=1`).then(function (response) {
            // handle success
            text = response.data.data.children[0].data

            const extension = ['.jpg', '.png', '.svg']
            const date = new Date(text.created_utc * 1000)
            let image
            let pre

            if (text.preview !== undefined) {
                pre = text.preview.images[0].source.url
            }

            if (extension.includes(text.url.slice(-4))) {
                image = text.url
            } else if (pre !== null) {
                image = pre
            } else {
                image = null
            }

                const embed = {
                    title: `${text.title}`,
                    url: `https://www.reddit.com${text.permalink}`,
                    author: {
                        name: text.author,
                        icon_url: "https://i.kym-cdn.com/photos/images/newsfeed/000/919/691/9e0.png"
                    },
                    description: turndownService.turndown(text.selftext),
                    timestamp: date,
                    image: {
                        url: image
                    },
                    color: 16729344,
                    footer: {
                    text: 'Reddit Bot by SerekKiri & MiXerek',
                    icon_url: "https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png?size=256"
                    },
                }
              message.channel.send({ embed })
          })
        } catch(Error) {
            console.log(Error)
            message.reply(`No subreddits named **${mes}** :confused: `)
        }      
    }
}

module.exports = find