const Discord = require("discord.js")
const botconfig = require("../config.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") return message.channel.send(`*Just Do ${prefix}help Instead.*`)

    if (args[0]) {
        let command = args[0];
        if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
                .setColor("#0000FF")
                .setAuthor(`${bot.user.username} Help`)
                .setDescription(`**The Bot Default Prefix Is: ${prefix}**\n\n**Command:** ${command.help.name}\n**Description:** ${command.help.description || "No Description"}\n**Usage:**${command.help.usage || "No Usage"}\n**Accessable By:** ${command.help.accessableby || "Members"}\n**Aliases:** ${command.help.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }
    }

    if (!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
            .setColor("#0000FF")
            .setDescription(`:zap: ${message.author.username} Check Your Dms! :zap:`)

        let Sembed = new Discord.RichEmbed()
            .setColor("RED")
            .setAuthor(` ${bot.user.username} Help  `)
            .setDescription(`:sweat_drops:  These Are The Available Commands For The EveryoneBOT! :sweat_drops: \n :bear: The Bot Default Prefix Is: **${prefix}** :bear: `)
            .addField(`Moderators`, ":zap: Ban,Softban,Mute,Kick,Css,Clear,Shutdown,Reload,Unban,Unmute :zap: ")
            .addField('Moderators +', " :zap: NewPrefix,Register,Etkinlik,ChangeName :zap: ")
            .addField(`Users Commands:`, ":zap: İnviteBot,Poker,Eval,Avatar,Uptime,Search,Ping :zap:")
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }

}

module.exports.help = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "?usage",
    description: "",
    noalias: "No Aliases",
    accessableby: "Members"
}