const axios = require("axios");
const redditPostToEmbed = require("../utils/redditPostToEmbed");
 
async function find(message) {
  let mes = message.content.slice(11);
  let args = mes.split(" ");

  if (mes === "") {
    message.reply("You need to type subreddit name here!");
  } else {
   try {
    if (args[1] <= 10) {
        let res
        if(args[1] === null) {
            res = await axios.get(
                `https://www.reddit.com/r/${args[0]}/top.json?limit=1`
              );
        } else {
            res = await axios.get(
                `https://www.reddit.com/r/${args[0]}/top.json?limit=${args[1]}`
              );
        }
      
  
      const posts = res.data.data.children;
      if (posts.lenght == 0) {
        message.reply(`Nothing new in **${args[0]}** :confused: `);
        return;
      } 
  
      for (const post of posts) {
          const embed = redditPostToEmbed(post)
          message.channel.send( { embed } )
      }
    } else {
      message.reply(`I can't send you more then **10** messages :confused:`)
    } 
    
   } catch(Error) {
        console.log(Error)
        message.reply(`No subreddits named **${mes}** :confused: `)
        }
    }
  }

module.exports = find;
