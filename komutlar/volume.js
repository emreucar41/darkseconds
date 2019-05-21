exports.run = (client, message, args, ops) => {
  
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send('There Currently Isn\'t Any Music Playing In This Guild!');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, You Currently Aren\'t In The Same Channel As The Bot.');
    
    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Please Input A Number Between 0-200');
    
    fetched.dispatcher.setVolume(args[0]/100);
    
    message.channel.send(`Succesfully Set The Volume Of ${fetched.queue[0].songTitle} To ${args[0]}`);
    
  
  }

  module.exports.help = {
    name: "volume",
    aliases: ["h", "halp", "commands"],
    usage: "?usage",
    description: "",
    noalias: "No Aliases",
    accessableby: "Members"
}