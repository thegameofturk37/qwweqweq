const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const Neptuneconfig = require('../Neptuneconfig.json');
let WestraPrefix = Neptuneconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}mod-log #kanal** \n-> Mod-log ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}mod-log sıfırla** \n-> Mod-log sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}küfürengel** \n-> Küfür engel açar/kapatır.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}küfürlog #kanal** \n-> Küfür-log ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}reklamengel** \n-> Reklam engel açar/kapatır.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}reklamlog #kanal** \n-> Reklam-log ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}sa-as aç** \n-> SA-AS sistemini açar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}sa-as kapat** \n-> SA-AS sistemini kapatır.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}sil** \n-> Yazdığınız miktar kadar mesaj siler.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}say** \n-> Sunucu bilgilerini gösterir.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}oylama** \n-> Oylama yapar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}otorol-sıfırla** \n-> Otorol sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
`)
 .setFooter(`Neptune`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};