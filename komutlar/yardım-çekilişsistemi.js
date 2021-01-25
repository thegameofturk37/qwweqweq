const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const Neptuneconfig = require('../Neptuneconfig.json');
let WestraPrefix = Neptuneconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Çekiliş Sistemi Yardım Menüsü`)
 .setDescription(`
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}çekiliş** \n-> Çekiliş başlatır.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}reroll** \n-> Çekilişi yeniden çeker.
<a:Neptunebyzsyhtik:769976055715856384> **${WestraPrefix}çekilişbitir** \n-> Çekilişi bitirir.
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
  name: 'çekilişsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};