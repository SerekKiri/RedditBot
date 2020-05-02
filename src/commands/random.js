const axios = require('axios')
const redditPostToEmbed = require('../utils/redditPostToEmbed')
const log = require('../utils/log')

async function find(message) {
  let mes = message.content.slice(14)
  let args = mes.split(' ')

  try {
    if (args[0] !== undefined && args[0] > 10) {
      await message.reply(
        `I can't send you more than **10** messages :confused:`
      )
      log('Reddit random')
      return
    } else {
      let res = await axios.get(
        `https://www.reddit.com/r/random/top.json?limit=1`
      )
      const posts = res.data.data.children
      if (posts.length == 0) {
        log('Reddit random')
        return await message.reply(
          `I can't find anything new in **${args[0]}** :confused: `
        )
      }

      for (const post of posts) {
        if (post.data.over_18 === true && message.channel.nsfw === false) {
          log('Reddit random')
          return await message.reply(
            `This post is NSFW! Try get it on NSFW channel! :confused:`
          )
        } else {
          const embed = redditPostToEmbed(post)
          await message.channel.send({ embed })
          log('Reddit random')
          return
        }
      }
    }
  } catch (Error) {
    console.log(Error)
    await message.reply('No subreddits named `' + mes + '` :confused:')
    log('Reddit random')
    return
  }
}

module.exports = find
