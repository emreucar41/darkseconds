const config = require("./config.json");
const filter = require("./filter.js");
const cevap = require("./cevap.js");
const ownerid = "471590154927210497";
const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEveryone: true
});
const fs = require("fs");
let cooldown = new Set();
const active = new Map();
let cdseconds = 5;
bot.commands = new Discord.Collection();
require("./util/eventHandler")(bot);




fs.readdir("./komutlar/", (err, files) => {
  const active = new Map();

  if (err) {
    console.log(err);
  }

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
    console.log("Komut Bulunamadı.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./komutlar/${f}`);
    console.log(`${f} Kullanıma Hazır.`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("guildMemberAdd", function (message) {

  var logchannel = bot.channels.get("579759115933581323");
  var kayitchannel = bot.channels.get("578681797274107944");
  var hosgeldın = bot.channels.get("579371037917970508");
  let guild = message.guild;
  let member = message;
  let membercount = bot.users.size;

  var role = member.guild.roles.find("name", "Lütfen Kayıt Olunuz !");
  member.addRole(role)

  let hos = new Discord.RichEmbed()
    .setDescription(`${member.user}, 🏆 **Gecenin Karanlığına Hoşgeldin** 🏆 `)
    .addField(" 👑 **Erkek iseniz !erkek <isim yaş> [ Örnek : !erkek Berkay 18 ]**", " 🍷 **Kız iseniz !kız <isim yaş> yazarak kayıt olabilirsiniz. [ Örnek : Ceren 18 ]**")
    .addField(" ⛔ **Kız permi almış üyeler @📢 | Kayıt Görevlisi'ne teyit vermeden genel sohbet harici diğer odaları görememektedir.**", " 🛡 **Kayıt olduktan sonra kuralları okuyup emojilere tıklarsanız sevinirz. İyi eğlenceler.**")
    .setFooter(`${bot.user.username} Kayıt Mesajı.`)
    .setColor("BLUE")

  kayitchannel.send(hos)
    .then(msg => msg.delete(60000));




  let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("K$E Sunucusuna HoşGeldin.")
    .setDescription(`Merhaba ${member.user}, Sunucumuza Hoş Geldin.`)
  member.guild.channels.find('name', 'log').send({
    embed: embed
  });

  hosgeldın.send(`:zap: ${member.user} Sunucumuza Hoş Geldin. :zap: `);

  let Sembed = new Discord.RichEmbed()
    .setDescription(`${member.user}, 🏆 **Gecenin Karanlığına Hoşgeldin** 🏆 `)
    .addField(" 👑 **Erkek iseniz !erkek <isim yaş> [ Örnek : !erkek Berkay 18 ]**", " 🍷 **Kız iseniz !kız <isim yaş> yazarak kayıt olabilirsiniz. [ Örnek : !kız Ceren 18 ]**")
    .addField(" ⛔ **Kız permi almış üyeler @📢 | Kayıt Görevlisi'ne teyit vermeden genel sohbet harici diğer odaları görememektedir.**", " 🛡 **Kayıt olduktan sonra kuralları okuyup emojilere tıklarsanız sevinirz. İyi eğlenceler.**")
    .setFooter(`${bot.user.username} Kayıt Mesajı.`)
    .setColor("BLUE")
  member.send(Sembed)

})

bot.on("guildMemberRemove", function (message) {

  var logchannel = bot.channels.get("579034341342969864");
  let guild = message.guild;
  let member = message;
  let membercount = bot.users.size;

  let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Đarknèss Øf Night 🌙 Sunucusu Çıkış Alanı!")
    .setDescription(`:zap: ${member.user}, Gitme Kal. :zap: `)
  member.guild.channels.find('name', 'log').send({
    embed: embed
  });

})

bot.on("guildMemberRemove", member => {


})


bot.on("messageUpdate", async (oldMessage, newMessage) => {


  if (oldMessage.content === newMessage.content) {
    return;
  }
  var logchannel = bot.channels.get("579759115933581323");
  let logembed = new Discord.RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Edited")
    .addField("Before Message", oldMessage.content, true)
    .addField("After", newMessage.content, true)
    .setTimestamp()
  logchannel.send(logembed)
})

bot.on("messageDelete", async message => {
  var logchannel = bot.channels.get("579759115933581323");

  let logembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor("RED")
    .setDescription(":wastebasket: Message Deleted")
    .addField("Message", (message.content), true)
    .setTimestamp()
  logchannel.send(logembed)
});



bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;


  let durum = await filter(message);
  if (!durum) {




    let ops = {
      ownerID: "471590154927210497",
      active: active
    }

    if (message.content === 'ping') {
      message.channel.send('!ping Yaz! Gereksiz Herif.');
    }

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if (!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      }
    }
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    let prefix = prefixes[message.guild.id].prefixes;
    if (!message.content.startsWith(prefix)) return;
    if (cooldown.has(message.author.id)) {
      message.delete();
      return message.reply("Please Wait 3 Seconds.")
    }

    let yazi = args.join(" ");

    if (!message.content === (yazi)) return;
    if (cooldown.has(message.author.id)) {
      message.delete();
      return message.reply("Please Wait 3 Seconds.")
    }

    // if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
    // }
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) {
      if (cmd === `${prefix}play` || (cmd === `${prefix}queue`) || (cmd === `${prefix}skip`) || (cmd === `${prefix}resume`) || (cmd === `${prefix}pause`) || (cmd === `${prefix}volume`) || (cmd === `${prefix}search`)) {
        commandfile.run(bot, message, args, ops);
      } else {
        commandfile.run(bot, message, args)
      }
    }



    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, cdseconds * 300)

  }

});

bot.login(process.env.BOT_TOKEN);
