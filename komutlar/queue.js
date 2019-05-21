module.exports.run = async (client, message, args, ops) => {
    console.log(ops);
    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send("There Currently Isn't Any Music Playing İn This Guild!");

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let data = ops.active.get(message.guild.id) || {};
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id

    });

    let resp = `__**Now Playing**__ **${nowPlaying.songTitle}** -- **Requested By:** *${data.queue[0].requester}*`;

    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${data.queue[0].requester}*`;
    }
    message.channel.send(resp);

}


module.exports.help = {
        name: "queue",
        aliases: ["h", "halp", "commands"],
        usage: "?usage",
        description: "",
        noalias: "No Aliases",
        accessableby: "Members"
    }