const axios = require("axios");
const redditPostToEmbed = require("../utils/redditPostToEmbed");
 
async function find(message) {
  let mes = message.content.slice(14);
  let args = mes.split(" ");

   try {
    if (args[0] <= 10 && args[0] == '') {
        let res
        if (args[0] == '') {
            res = await axios.get(
                `https://www.reddit.com/r/random/top.json?limit=1`
              );
        } else {
            res = await axios.get(
                `https://www.reddit.com/r/random/top.json?limit=${args[0]}`
              );
        }
      
  
      const posts = res.data.data.children;
      if (posts.lenght == 0) {
        message.reply(`Nothing new in **${args[0]}** :confused: `);
        return;
      } 
  
      for (const post of posts) {
        if (post.data.over_18 === true && message.channel.nsfw === false) {
          message.reply(`This post is NSFW! Try get it on NSFW channel! :confused:`)
        } else {
          const embed = redditPostToEmbed(post)
          message.channel.send( { embed } )
        }
      }
    } else {
      message.reply(`I can't send you more then **10** messages :confused:`)
    } 
    
   } catch(Error) {
        console.log(Error)
        message.reply(`No subreddits named **${mes}** :confused: `)
        }
  }

module.exports = find;
