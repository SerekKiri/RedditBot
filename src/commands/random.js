const axios = require("axios")
const redditPostToEmbed = require("../utils/redditPostToEmbed")
 
async function find(message) {
  let mes = message.content.slice(14)
  let args = mes.split(" ")

   try {
    if (args[0] !== undefined && args[0] > 10) {
      message.reply(`I can't send you more than **10** messages :confused:`)
    } else {
          let res = await axios.get(
            `https://www.reddit.com/r/random/top.json?limit=1`
          )
          const posts = res.data.data.children
      if (posts.length == 0) {
        return message.reply(`Nothing new in **${args[0]}** :confused: `)
      } 
  
      for (const post of posts) {
        if (post.data.over_18 === true && message.channel.nsfw === false) {
          return message.reply(`This post is NSFW! Try get it on NSFW channel! :confused:`)
        } else {
          const embed = redditPostToEmbed(post)
          message.channel.send( { embed } )
        }
      }
    }
    
   } catch(Error) {
        console.log(Error)
        message.reply(`No subreddits named **${mes}** :confused: `)
        }
  }

module.exports = find
