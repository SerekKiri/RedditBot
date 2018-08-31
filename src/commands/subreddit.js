function find(message) {
    let mes = message.content.slice(12)
    if (mes === '') {
        message.reply('You need to type subreddit name here!')
    } else  {
        console.log(mes)
    }
}

module.exports = find