const Discord = require("discord.js")
const botconfig = require("../config.json");
const prefix = botconfig.prefix
const ytdl = require("ytdl-core");


module.exports.run = async (bot, message, args, filter) => {

    if (!message.member.voiceChannel) return message.channel.send("Please Connect To A Voice Channel!");
    if(!message.guild.me.voiceChannel) return message.channel.send("Sorry, The Bot Isn't Connected To The Guild.");

    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Sorry, You Aren't Connected To The Same Channel!");

    message.channel.send("Leaving Channel...");

    message.guild.me.voiceChannel.leave();

} 

module.exports.help = {
    name: "leave",
    aliases: ["h", "halp", "commands"],
    usage: "?usage",
    description: "",
    noalias: "No Aliases"
}