const Discord = require('discord.js');
const Neptuneconfig = require('./Neptuneconfig.json');
const bot = new Discord.Client()
const westra = new Discord.ShardingManager('./Neptune.js', {
    totalShards: 1,
    token: Neptuneconfig.token
});

westra.spawn(); 

westra.on('launch', shard => {
  console.log(`**${shard.id}** ID'li shard başlatıldı.`)
});

setTimeout(() => {
    westra.broadcastEval("process.exit()");
}, 21600000);