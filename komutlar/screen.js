const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send("Ses Kanalında Olman Gerekli!");
    return message.channel.send(
        new Discord.RichEmbed().setDescription(
            `Click [here](https://discordapp.com/channels/${message.guild.id}/${
                voiceChannel.id
            }) To Open Screen Share In Channel '${voiceChannel.name}'`
        )
    );
};
module.exports.help = {
    name: "screen"
};