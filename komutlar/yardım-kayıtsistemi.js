const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const Neptuneconfig = require('../Neptuneconfig.json');
let WestraPrefix = Neptuneconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(`<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-hg #kanal** \n-> Kayıt hoş geldin kanalını ayarlarsınız.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-hg sıfırla** \n-> Kayıt hoş geldin kanalını sıfırlarsınız.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}erkek-rol @rol** \n-> Kayıt edilince verilecek erkek rolü ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}erkek-rol sıfırla** \n-> Kayıt edilince verilecek erkek rolünü sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kız-rol @rol** \n-> Kayıt edilince verilecek kız rolü ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kız-rol sıfırla** \n-> Kayıt edilince verilecek kız rolünü sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}erkek @kullanıcı isim yaş** \n-> Erkekleri kayıt etmeye yarar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}kız @kullanıcı isim yaş** \n-> Kızları kayıt etmeye yarar.
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
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};