const axios = require('axios')
const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function user(message) {
    let mes = message.content.slice(12)
    if (mes === '') {
        await message.reply('You need to type user name here!')
    } else {
        try {
            const json = await axios.get(`https://www.reddit.com/user/${mes}/about.json`).then(function (response) {
            
            
            // variables
            text = response.data.data
            img = text.icon_img.split('?')
            let createdTime = new Date(text.created_utc * 1000)
            createdTime = createdTime.toString().split('GMT')

            const embed = {
                title: `${text.subreddit.display_name_prefixed}`,
                author: {
                    name: `${text.name}`,
                    url: `https://www.reddit.com${text.subreddit.url}`,
                    icon_url: `https://i.kym-cdn.com/photos/images/newsfeed/000/919/691/9e0.png`
                },
                description: text.subreddit.description,
                color: 16729344,
                fields: [
                    {
                        name: "Account Created:",
                        value: `${createdTime[0]}`,
                      },
                      {
                        name: 'Subscribers:',
                        value: `${text.subreddit.subscribers}`,
                      },
                      {
                        name: 'Karma:',
                        value: `${text.link_karma + text.comment_karma}`,
                      }
                ],
                footer: {
                    text: 'Reddit Bot by Fosscord Team',
                    icon_url: "https://raw.githubusercontent.com/fosscord/assets/master/PNG/1024x/cord-blue.png"
                },
            }
            message.channel.send({ embed })
        })
    } catch (Error) {
            await message.reply(`I can't find user named **${mes}** :neutral_face:`)
        }
    }
}

module.exports = user