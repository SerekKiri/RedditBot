const config = require('./config/config.json')
const client = require('./client')
// commands imports
const cmds = require('./commands/index')

client.on('ready', () => {
  console.log(`Reddit Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
});


client.on('message', async (message) => {
    try {
        cmds.check(message)
    } catch(err) {
        console.log(err)
    }
})

client.login(config.BotToken)

module.exports = client
