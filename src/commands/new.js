const axios = require('axios')
const redditPostToEmbed = require('../utils/redditPostToEmbed')
const log = require('../utils/log')

async function find(message) {
  let mes = message.content.slice(11)
  let args = mes.split(' ')

  if (mes === '') {
    log('Reddit new')
    return await message.reply('You need to type subreddit name here!')
  } else {
    try {
      if (args[1] !== undefined && args[1] > 10) {
        log('Reddit new')
        return await message.reply(
          `I can't send you more than **10** messages :confused:`
        )
      } else {
        let res
        if (args[1] === undefined) {
          res = await axios.get(
            `https://www.reddit.com/r/${args[0]}/new.json?limit=1&sort=new`
          )
        } else {
          res = await axios.get(
            `https://www.reddit.com/r/${args[0]}/new.json?limit=${args[1]}&sort=new`
          )
        }

        const posts = res.data.data.children

        if (posts.length == 0) {
          log('Reddit new')
          return await message.reply(
            `Nothing new in **${args[0]}** :confused: `
          )
        }

        for (const post of posts) {
          if (post.data.over_18 === true && message.channel.nsfw === false) {
            log('Reddit new')
            return message.reply(
              `This post is NSFW! Try get it on NSFW channel! :confused:`
            )
          } else {
            const embed = redditPostToEmbed(post)
            await message.channel.send({ embed })
            log('Reddit new')
            return
          }
        }
      }
    } catch (Error) {
      console.log(Error)
      log('Reddit new')
      return await message.reply('No subreddits named `' + mes + '` :confused:')
    }
  }
}

module.exports = find
