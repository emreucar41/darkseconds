exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send('There Currently isn\'t Any Music Playing İn This Guild!');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, You Aren\'t In The Same Channel As The Music Bot.');
    
    if (fetched.dispatcher.paused) return message.channel.send('This Music Is Already Paused.');
    
    fetched.dispatcher.pause();
    
    message.channel.send(`Succesfully Paused ${fetched.queue[0].songTitle}!`);
  
  
  
  
  }

  module.exports.help = {
    name: "pause",
    aliases: ["h", "halp", "commands"],
    usage: "?usage",
    description: "",
    noalias: "No Aliases",
    accessableby: "Members"
}