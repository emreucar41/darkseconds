const Discord = require("discord.js")
const botconfig = require("../config.json");
const prefix = botconfig.prefix
const ascii = require("ascii-art");


module.exports.run = async (bot, message, args, filter) => {

    ascii.font(args.join(" "), 'Doom', function (rendered) {
        rendered = rendered.trimRight();

        if (rendered.length > 2000) return message.channel.send("Sorry, That Message İs Too Long!");

        message.channel.send(rendered, {
            code: 'md'
        });
    });

}

module.exports.help = {
    name: "ascii",
    aliases: ["h", "halp", "commands"],
    usage: "?usage",
    description: "",
    noalias: "No Aliases"
}