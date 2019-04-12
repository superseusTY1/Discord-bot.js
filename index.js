const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setActivity(`Eu estou em ${client.guilds.size} servidores`);
  
      //STREAMING = TRANSMITINDO
    //LISTENING = OUVINDO
    //PLAYING = JOGANDO
    //WATCHING = ASSISTINDO
    //{name: ``, type: ''},

    

    let status = [     
      {name: `Olá Mundo!`, type: 'playing'}
      {name: `Olá Mundo!`, type: 'STREAMING', url: 'https://www.twitch.tv/alanzoka'},
      ];   
  
          function setStatus() {
          let randomStatus = status[Math.floor(Math.random() * status.length)];
          client.user.setPresence({game: randomStatus});
      }
    
      setStatus();
      setInterval(() => setStatus(), 5000);
      
    });  
    
    
      if(comando === "ping") {
    const m = await message.channel.send("`API Ping : `, Math.floor(client.ping) + 'ms', `Bot Ping : `, Math.floor(botping) + 'ms' ")
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  
  if(comando === "say") { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }
    
    
