const axios = require('axios');


function find(message) {
    let mes = message.content.slice(12)
    if (mes === '') {
        message.reply('You need to type subreddit name here!')
    } else  {
        const json = axios.get(`https://www.reddit.com/r/${mes}/new.json?limit=1`).then(function (response) {
            // handle success
            console.log(response)
          })
        console.log(mes)
    }
}

module.exports = find