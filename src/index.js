const Discord = require('discord.js')
const config = require('./config/config.json')

const client = new Discord.Client()

// variables

// commands imports
const newPost = require('./commands/new')
const help = require('./commands/help')
const user = require('./commands/user')
const top = require('./commands/top')
const hot = require('./commands/hot')
const github = require('./commands/github')
const donate = require('./commands/donate')
const random = require('./commands/random')

client.on('ready', () => {
  console.log(`Reddit Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setPresence({ game: { name: 'reddit help', type: 1 } })
})


client.on('message', async (message) => {

    if (message.content.startsWith(config.Prefix + 'new')) {
        newPost(message)
    }

    if (message.content.startsWith(config.Prefix + 'top')) {
        top(message)
    }

    if (message.content.startsWith(config.Prefix + 'help')) {
        help(message)
    }

    if (message.content.startsWith(config.Prefix + 'user')) {
        user(message)
    }

    if (message.content.startsWith(config.Prefix + 'hot')) {
        hot(message)
    }

    if (message.content.startsWith(config.Prefix + 'github')) {
        github(message)
    }

    if (message.content.startsWith(config.Prefix + 'donate')) {
        donate(message)
    }

    if (message.content.startsWith(config.Prefix +  'random')) {
        random(message)
    }
})


client.login(config.BotToken)

module.export = client