const axios = require("axios")
const redditPostToEmbed = require("../utils/redditPostToEmbed")
 
async function find(message) {
  let mes = message.content.slice(11)
  let args = mes.split(" ")

  if (mes === "") {
    message.reply("You need to type subreddit name here!");
  } else {
   try {
    if (args[1] !== undefined && args[1] > 10) {
      message.reply(`I can't send you more than **10** messages :confused:`)
    } else {
      let res
      if(args[1] === undefined) {
            res = await axios.get(
                `https://www.reddit.com/r/${args[0]}/hot.json?limit=1&sort=new`
              ) 
        } else {
            res = await axios.get(
                `https://www.reddit.com/r/${args[0]}/hot.json?limit=${args[1]}&sort=new`
              )
        }
      
  
      const posts = res.data.data.children;
      if (posts.length == 0) {
        return message.reply(`There are no hot posts on **${args[0]}** :confused: `)
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
  }

module.exports = find
