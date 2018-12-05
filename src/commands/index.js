const config = require('../config/config.json')

// requiring commands
const newPost = require('./new')
const help = require('./help')
const user = require('./user')
const top = require('./top')
const hot = require('./hot')
const github = require('./github')
const donate = require('./donate')
const random = require('./random')
const report = require('./issue')
const update = require('./update')
const invite = require('./invite')

const commands = {
    'new' : newPost,
    'help' : help,
    'user' : user,
    'top' : top,
    'hot' : hot,
    'github' : github,
    'donate' : donate,
    'random' : random,
    'report' : report,
    'update' : update,
    'invite' : invite
}

module.exports.check = function(message) {
    let args = message.content.slice(config.Prefix.length).split(" ")
    if (message.content.startsWith(config.Prefix)) {
        if(commands[args[0]] != undefined) {
            return commands[args[0]](message)
        } else {
            return message.reply('This command doesn\'t exist! :<')
        }
    } 
}