const WestraDiscord =
      require('discord.js');
const WestraClient =
      new WestraDiscord.Client();
exports.run = (client, message) => {
  if(message.author.id !== "390162986926473216") if(message.author.id !== "488384549479251969") return message.channel.send("hoop bilader sahip komutu bu");
const WestraEmbed = new WestraDiscord.MessageEmbed().setColor(0x36393F).setFooter(`Neptune`).setTimestamp()
.setDescription(`<a:Neptuneonay:770187690402250772> Neptune botun ping değeri şu an = **${client.ws.ping} ms**`)
message.channel.send(WestraEmbed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};