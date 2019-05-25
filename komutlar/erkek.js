const Discord = module.require('discord.js');
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {

    let ad = args.join(" ");
    let member = message;
    var kayıt = bot.channels.get("579036622310342714")

    var role = member.guild.roles.find("name", "Lütfen Kayıt Olunuz !");
    message.member.removeRole(role)

    var role2 = member.guild.roles.find("name", "† Normie");
    message.member.addRole(role2);

    message.member.setNickname(`∞ ${message.author.username}`)

    message.reply("Tebrikler Başarıyla Kayıt Oldun!").then(msg => msg.delete(5000));



}

module.exports.help = {
    name: "erkek",
    decription: "Register Server And Join The Voice Channel vs.",
    usage: "?kayıt",
    accessableby: "Members",
    aliases: ["ut"],
    noalias: "No Aliases"
}
