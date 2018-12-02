const Discord = require('discord.js')
const config = require('./config/config.json')

const client = new Discord.Client()

// variables

// commands imports
const cmds = require('./commands/index')

client.on('ready', () => {
  console.log(`Reddit Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setPresence({ game: { name: 'reddit help', type: 1 } })
});


client.on('message', async (message) => {

    if (message.content.startsWith(config.Prefix + 'new')) {
        cmds.newPost(message)
    }

    if (message.content.startsWith(config.Prefix + 'top')) {
        cmds.top(message)
    }

    if (message.content.startsWith(config.Prefix + 'help')) {
        cmds.help(message)
    }

    if (message.content.startsWith(config.Prefix + 'user')) {
        cmds.user(message)
    }

    if (message.content.startsWith(config.Prefix + 'hot')) {
        cmds.hot(message)
    }

    if (message.content.startsWith(config.Prefix + 'github')) {
        cmds.github(message)
    }

    if (message.content.startsWith(config.Prefix + 'donate')) {
        cmds.donate(message)
    }

    if (message.content.startsWith(config.Prefix +  'random')) {
        cmds.random(message)
    }

})


client.login(config.BotToken)

module.export = client