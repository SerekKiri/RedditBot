const Discord = require('discord.js')
const config = require('./config/config.json')


// commands imports
const subreddit = require('./commands/subreddit')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Reddit Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setPresence({ game: { name: 'Reddit', type: 3 } })
})

client.on('message', async (message) => {
    if (message.content.substring(0, config.Prefix.length) === config.Prefix) {
        const command = message.content.slice(config.Prefix.length);

    if (message.content.startsWith(config.Prefix + 'find')) {
        subreddit(message)
    }

    }
})


client.login(config.BotToken)