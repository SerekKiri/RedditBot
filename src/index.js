const Discord = require('discord.js')
const config = require('./config/config.json')

const client = new Discord.Client()

// variables
const package = require('../package.json')

// commands imports
const cmds = require('./commands/index')

client.on('ready', () => {
    const size = client.guilds.size
    const users = client.users.size

    const presence = [
        "reddit.com",
        "Mention me for help",
        package.version + " version",
        size + " servers",
        users + " users"
    ]

  console.log(`Reddit Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
    setInterval(() => {
        const random = Math.floor(Math.random() * (presence.length - 1) + 1);
        client.user.setActivity(presence[random]);
    }, 7000)
});


client.on('message', async (message) => {
    try {
        cmds.check(message)
    } catch(err) {
        console.log(err)
    }
})

client.login(config.BotToken)