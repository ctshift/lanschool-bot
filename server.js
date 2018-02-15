const Discord = require("discord.js");
const client = new Discord.Client();
const talkedRecently = new Set();
const prefix = "%";
client.login(process.env.SECRET);
//Logs all events.
client.on('ready', () => {
  console.log('Ready.');
  client.user.setGame("with students' minds| %help")
});
//All commands.
client.on("message", message => {
  //Constants for %eval
   const args = message.content.split(" ").slice(1);
  //Prevents it from responding to other bots.
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  //Start of all bot commands
  if (message.channel.id === "362708729327517707") return;
  //Cooldown.
  if (talkedRecently.has(message.author.id))
  return;
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 9000);
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
  }else
  if (message.content.startsWith(prefix + "pong")) {
    message.channel.send("It's my job to say pong. (According to LanSchool policy 12.A you have been barred from using the LanSchool software.)");
}else
  if (message.content.startsWith(prefix + "exe")) {
    message.channel.send("\`\`\`This application has been blocked by your system administrator.\`\`\` Contact your system administrator for more info.");
  }else
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send("Recieved file from teacher. Access at https://glitch.com/edit/#!/lanschool")
  }else
  if (message.content.startsWith(prefix + "strife")) {
    message.channel.send(`\`\`\`diff
!==================================Strife!!===================================!
-Administrative Dean Williams saunters toward you. 
-His power level is unstable- always changing. 
-Reading level of ${Math.floor((Math.random() * 1000000) + 1)} 
!=============================================================================!
\`\`\``);
  }else
  if (message.content.startsWith(prefix + "load")) {
    message.channel.send(`Loaded into class by '65187'.
    \`\`\`js
Invite link for @LanSchool:
"https://discordapp.com/oauth2/authorize?&client_id=386255265785446402&scope=bot&permissions=0\`\`\``);

  }else
  if (message.content.startsWith(prefix + "help")) {
   message.channel.send({embed: {
    color: 3447003,
     //All commands shown in help.
    title: "All commands",
    description: "@LanSchool is at version \`1.2.11\`. This is the most current stable version. None of these commands work with the actual LanSchool software.",
    fields: [
      {
        name: "%help",
        value: "Brings you to this menu."
      },
      {
        name: "%ping",
        value: "Simply ping command, bot responds with Pong"
      },
      {
        name: "%pong",
        value: "Reverse of %ping"
      },
      {
        name: "%bot",
        value: "Shows the code for the bot through the given link."
      },
      {
        name: "%load",
        value: "Loads you into Mr. Ihnenfeld's class."
      },
      {
        name: "%strife",
        value: "Attack the current boss, or show the results of the defeated boss."
      },
      {
        name: "%exe",
        value: "Imitates running a .exe on a blocked computer."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© @Egg#3168"
    }
  }
});
 }
});  
//This keeps the bot alive by pinging Glitch.
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://lanschool.glitch.me/`);
}, 60000);