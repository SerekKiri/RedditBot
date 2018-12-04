

async function invite(client) {
    try {
        client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD']).then(link => {
                const embed = {
                    title: 'I generated a link for you:',
                    description: turndownService.turndown(`<a href="${link}">Click here to invite me!</a>`),
                    color: 1554076,
                    footer: {
                    icon_url: 'https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png?size=256',
                    text: 'Reddit Bot by SerekKiri & MiXerek'
                    }
            }
            message.channel.send({ embed })
            })
        } catch(error) {
            console.log(error)
        }
    }

module.exports = invite