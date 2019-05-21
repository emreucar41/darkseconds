const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(!args[0]) return message.channel.send("no");
  if(args[0] < 1) return message.channel.send("Lütfen 1 İla 100 Arasında Bir Sayı Girin!")
  if(args[0] > 100) return message.channel.send("Lütfen 1 İla 100 Arasında Bir Sayı Girin!")
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`\`${args[0]}\` **Messages Cleared.**`).then(msg => msg.delete(1000));
});

}

module.exports.help = {
  name: "clear"
}
