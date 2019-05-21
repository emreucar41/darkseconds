const Discord = require("discord.js")
const botconfig = require("../config.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args, filter) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("This Requires The Permissions: ADMINISTRATOR");

    if(!args[0]) return message.channel.send("Proper Usage: <prefix>vote Question.");

    const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setFooter("React To Vote.")
    .setDescription(args.join(" "))
    .setTitle(`Vote Created By ${message.author.username}`);
    let msg = await message.channel.send(embed);

    await msg.react("✅");
    await msg.react("❎");

    message.delete({timeout: 1000});
} 

module.exports.help = {
    name: "vote",
    aliases: ["h", "halp", "commands"],
    usage: "?usage",
    description: "",
    noalias: "No Aliases"
}