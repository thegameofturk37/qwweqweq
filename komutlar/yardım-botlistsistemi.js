const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const Neptuneconfig = require('../Neptuneconfig.json');
let WestraPrefix = Neptuneconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Bot List Sistemi Yardım Menüsü`)
 .setDescription(`
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}başvuru-gidecek-kanal-ayarla #kanal** \n-> Başvuru gidecek kanalı ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}başvuru-gidecek-kanal-sıfırla** \n-> Başvuru gidecek kanalı sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}başvuru-yapılacak-kanal-ayarla #kanal** \n-> Başvuru yapılacak kanalı ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}başvuru-yapılacak-kanal-sıfırla** \n-> Başvuru yapılacak kanalı sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}başvuru-log-kanal-ayarla #kanal** \n-> Başvuru log kanal ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}başvuru-log-kanal-sıfırla** \n-> Başvuru log kanal sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}botlist-yetkili-rol-ayarla @rol** \n-> Botlist yetkili rolü ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}botlist-yetkili-rol-sıfırla** \n-> Botlist yetkili rolü sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}botekle botid prefix dblonay** \n-> Sisteme bot ekler.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}botkapalı botid sahipid** \n-> Botu kapalı olduğu nedeniyle reddeder.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}botonayla botid sahipid** \n-> Botu onaylar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}botreddet botid sahipid sebep** \n-> Botu reddeder.

__NOT:__ Eğer bütün ayarlamaları yapmazsanız sistem çalışmaz.
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
  name: 'botlistsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};