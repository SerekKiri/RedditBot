const Discord = require('discord.js')
const config = require('./config/config.json')

const client = new Discord.Client()

// variables

// commands imports
const subreddit = require('./commands/subreddit')
const help = require('./commands/help')
const user = require('./commands/user')

client.on('ready', () => {
  console.log(`Reddit Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setPresence({ game: { name: 'Reddit', type: 3 } })
})

client.on('message', async (message) => {

    if (message.content.startsWith(config.Prefix + 'find')) {
        subreddit(message)
    }

    if (message.content.startsWith(config.Prefix + 'help')) {
        help(message)
    }

    if (message.content.startsWith(config.Prefix + 'user')) {
        user(message)
    }
})


client.login(config.BotToken)

module.export = client