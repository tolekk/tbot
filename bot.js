//tbot0.1, made by ML, 2019
// dankchars for copying [" "," "," "," "," "]

// tmi.js lib required to run the bot
// change the dir to whatever you want

const tmi = require("./tmi/node_modules/tmi.js");

//bot config file with oauth and shit

const config = require("./config.js");

const client = new tmi.client(config.options);

// Anti-repeated message module
var lastMessage = null;
function sendMsg(channel, message) {
  if (message === lastMessage) {
    message = message + " \u{E0000} ";
  }
  lastMessage = message;
  client.say(channel, message);
}

client.connect();

client.on("notice", (channel, msgid, message) => {});

// MAIN COMMANDS MODULE
client.on("chat", (channel, user, message, self) => {
  //handling commands
  if (message.startsWith(";")) {
    // .split() function separates message content from any optional arguments and .slice(1) removes one character from the beginning of a message
    let command = message.toLowerCase().split(' ')[0].slice(1);
    switch(command) {
      case "gearbox":
        sendMsg(channel, "GachiPls GEARBOX");
        break;
      case "bl3":
        sendMsg(channel, "After 5 years in development, hopefully, it would have been worth the wait GabeN ");
        break;
      case "ping":
        sendMsg(channel, "Pong FeelsGoodMan ");
        break;
      case "nam":
        sendMsg(channel, "Don't NaM me " + user["display-name"]);
        break;
      case "tolekk":
        sendMsg(channel, "Sup " + user["display-name"] + " NaM ");
        break;
      case "?":
        sendMsg(channel, "❓ ❓ ❓  FeelsDankMan  ❓ ❓ ❓ ");
        break;
      case "dank":
        //added a .split(' ')[0] here, so optional extra arguments won't be sent in a response
        sendMsg(channel, "BOOM YOU JUST GOT DANKED FeelsDankMan " + message.substr(6).split(' ')[0]);
        break;
      case "supinic":
        sendMsg(channel, "Fix it Supinic BabyRage");
        break;
      case "kappa":
        sendMsg(channel, "Chat spam Kappa 123");
        break;
      case "test1":
        sendMsg("pajlada", "FeelsDankMan woah ");
        break;
      case "commands":
        sendMsg(channel, "Command list coming soon KKona");
        break;
      case "bot":
        sendMsg(channel, "Bot created and maintained by tolekk. Message me on Discord at tolekk#6008 if you want to learn more :) Use ;github if you want to see the code.");
        break;
      case "github":
        sendMsg(channel, "My rarely updated github https://github.com/tolekk/tbot with my Pepega code.");
        break;
      case "poop":
        sendMsg(channel, user["display-name"] + " is now pooping 💩 ");
        break;
      //SMACZNY TEST, TUCK-UNTUCK MODULE (simplified the format, moved whole thing to lidl command handler)
      case "tuck":
        sendMsg(channel, `${user["display-name"]} tucks ${message.substr(6).split(' ')[0]} into bed FeelsOkayMan 👉 🛏 💤 `);
        break;
      case "untuck":
        sendMsg(channel, `${user["display-name"]} untucks ${message.substr(8).split(' ')[0]} from their bed DansGame 👉 🛏 ❗  `);
        break;
    }
  }
  //handling regular messages
  else {
    if (message.startsWith("asd")) {
      sendMsg("pajlada", "FeelsDankMan Clap ");
    } else if (message.toLowerCase().includes("tolekkbot")) {
      if (message.toLowerCase().includes("ty chuju")) {
        sendMsg(channel, "Spierdalaj " + user["display-name"]);
      }
      else {
        sendMsg(channel, "Pinged PepeS ");
      }
    } else if (message.includes("your mom")) {
      sendMsg(channel, user["display-name"] + " forsenHead");
    }
  }
});

// ANTI-SNIPER MODULE
client.on("join", (channel, user, username, self) => {
  const snipers = require("./snipers.js");
  if (snipers.includes(username)) {
    sendMsg("smaczny", "NaM 👉 🚨 " + user["display-name"]);
  }
});

client.on("chat", (channel, user, message, self) => {
  if (channel !== "#smaczny") return;
  if (self) return;

  if (message.startsWith(";test")) {
    sendMsg("smaczny", "test successful KKona");
  }
});

// SUB REACTION MODULE (moved raffle things)
client.on("subscription", (channel, username, methods, message, userstate) => {
  client.say(channel, "New sub PogChamp");
  //raffle thing in #smaczny channel
  if (channel !== "#smaczny") return;
  if (username === client.username) return; //escapes own subs
  sendMsg("smaczny", "!raffle 3500");
});

client.on(
  "subgift",
  (channel, username, streakMonths, recipient, methods, userstate) => {
    client.say(channel, "Gifters PogChamp ");
    //raffle thing in #smaczny channel
    if (channel !== "#smaczny") return;
    if (recipient === client.username) return; //escapes own subs
    sendMsg("smaczny", "!raffle 3500");
});

client.on(
  "submysterygift",
  (channel, username, numbOfSubs, methods, userstate) => {
    client.say(channel, "ANON GIFTERS PogChamp ");
    //raffle thing in #smaczny channel
    if (channel !== "#smaczny") return;
    // if (self) return; // no way to escape anon gifts
    sendMsg("smaczny", "!raffle 3500");
});

client.on("resub", (channel, username, months, message, userstate, methods) => {
  client.say(channel, "RESUB PogChamp ");
  //raffle thing in #smaczny channel
  if (channel !== "#smaczny") return;
  if (username === client.username) return; //escaping own subs
  sendMsg("smaczny", "!raffle 2000");
});

client.on(
  "submysterygift",
  (self, channel, username, numbOfSubs, methods, userstate) => {
    if (channel !== "#smaczny") return;
    if (self) return;
    sendMsg("smaczny", "!raffle 3500");
  }
);
