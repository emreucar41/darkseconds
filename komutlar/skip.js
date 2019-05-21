exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send('There Currently isn\'t Any Music Playing In The Guild!');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, You Currently Aren\'t In The Same Channel As The Bot.');
    
    let userCount = message.member.voiceChannel.members.size;
    
    let required = Math.ceil(userCount/2);
    
    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
    
    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, You Already Vote Skip! ${fetched.queue[0].voteSkips.length}/${required} Required!`);
    
    fetched.queue[0].voteSkips.push(message.member.id);
    
    ops.active.set(message.guild.id, fetched);
    
    if (fetched.queue[0].voteSkips.length >= required) {
      message.channel.send('Succesfuly Skipped Song!');
      return fetched.dispatcher.emit('end');
    }
    
    message.channel.send(`Succesfully Voted To Skip! ${fetched.queue[0].voteSkips.length}`)
    
    
}


module.exports.help = {
        name: "skip",
        aliases: ["h", "halp", "commands"],
        usage: "?usage",
        description: "",
        noalias: "No Aliases",
        accessableby: "Members"
    }
  