module.exports = (message) => {

    const filter = message => message.content.startsWith('!dts');
    channel.awaitMessages(filter, {
        max: 4,
        time: 60000,
        errors: ['time']
            .then(collected => console.log(collected.size))
            .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`))
    })
}