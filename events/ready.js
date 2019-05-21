const Discord = require("discord.js")

module.exports = bot => {


    console.log(`${bot.user.username} Aktif.`);


    let statuses = [
        `Bot Owner Const#2220`,
        `!help`,
        `over ${bot.users.size} users!`
    ]

    setInterval(function(){
     let status = statuses[Math.floor(Math.random() * statuses.length)];
     bot.user.setActivity(status, {type: "Watching"});
    }, 3500)
}