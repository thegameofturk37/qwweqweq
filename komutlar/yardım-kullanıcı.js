const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const Neptuneconfig = require('../Neptuneconfig.json');
let WestraPrefix = Neptuneconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}davet** \n-> Botu davet edersiniz.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}shardbilgi** \n-> Botun shard bilgilerini gösterir.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}öneri** \n-> Bota öneri belirtirsiniz.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}istatistik** \n-> Botun istatistiğini gösterir.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}sonmesaj** \n-> Yazdığınız son mesajı gösterir.
`)
 .setFooter(`Neptune`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};