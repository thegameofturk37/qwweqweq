const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const Neptuneconfig = require('../Neptuneconfig.json');
let WestraPrefix = Neptuneconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Davet Sistemi Yardım Menüsü`)
 .setDescription(`
<a:Neptunebyzsyhtik:769976055715856384> **c?rütbe-ekle @rol davet** \n-> Rütbe ekler.
<a:Neptunebyzsyhtik:769976055715856384> **c?rütbeler** \n-> Rütbeleri gösterir 1'den 10'a kadar.
<a:Neptunebyzsyhtik:769976055715856384> **c?rütbe-sıfırla** \n-> Rütbeyi sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **c?davetleri-sıfırla** \n-> Davetleri sıfırlar.
<a:Neptunebyzsyhtik:769976055715856384> **c?top** \n-> Lider tablosunu gösterir.
<a:Neptunebyzsyhtik:769976055715856384> **c?davetlerim** \n-> Davetlerinizi gösterir.
<a:Neptunebyzsyhtik:769976055715856384> **c?bonus-ekle** \n-> Bonus ekler.
<a:Neptunebyzsyhtik:769976055715856384> **c?davet-kanal #kanal** \n-> Davet kanalını ayarlar.
<a:Neptunebyzsyhtik:769976055715856384> **c?davet-kanal-sıfırla** \n-> Davet kanalını sıfırlar.`)
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
  name: 'davetsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};