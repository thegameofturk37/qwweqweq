 exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
  
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`<a:Neptunered:770187639801774080> **HATA** <a:Neptunered:770187639801774080> - Bu sunucuda yetkili değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(reklam) {
      db.delete(`reklam.${message.guild.id}`)
      message.channel.send(`<a:Neptunered:770187639801774080> **Başarılı ile reklam engel kapandı.**`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
      db.set(`reklam.${message.guild.id}.durum`,true)
      message.channel.send(`<a:Neptuneonay:770187690402250772> **Başarılı ile reklam engel açıldı.**`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-engel"],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: 'WESTRA',
  usage: 'WESTRA'
}