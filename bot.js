//tbot0.1, made by ML, 2019
// dankchars for copying [" "," "," "," ","　"]

// tmi.js lib required to run the bot
// change the dir to whatever you wan

var tmi = require('./tmi/node_modules/tmi.js');

//bot config file with oauth and shit

const config = require('./config.js');



var client = new tmi.client(config.options);
		
// Anti-repeated message module
var lastMessage = null;
    function sendMsg(channel, message){
        if (message === lastMessage) {
            message = message + " \u{E0000} ";
        }
			lastMessage = message;
			client.say(channel, message);
    }


client.connect();


client.on("notice", function(channel, msgid, message) {
})
	
// MAIN COMMANDS MODULE
client.on("chat", function(channel, user, message, self) {
	if(message.startsWith(";gearbox")) {
		sendMsg(channel, "GachiPls GEARBOX");
	} else if(message.startsWith(";bl3")) {
		sendMsg(channel, "After 5 years in development, hopefully, it would have been worth the wait GabeN ");
	} else if(message.startsWith(";ping")) {
		sendMsg(channel, "Pong FeelsGoodMan ");
	} else if(message.startsWith(";nam")) {
		sendMsg(channel, "Don't NaM me " + user['display-name']);
	} else if(message.startsWith("@tolekkBOT ty chuju")) {
		sendMsg(channel, "Spierdalaj " + user['display-name']);
	} else if(message.startsWith(";tolekk")) {
		sendMsg(channel, "Sup " + user['display-name'] + " NaM ");
	} else if(message.startsWith(";?")) {
		sendMsg(channel, "❓ ❓ ❓  FeelsDankMan  ❓ ❓ ❓ ");
	} else if(message.startsWith(";dank ")) {
		sendMsg(channel, "BOOM YOU JUST GOT DANKED FeelsDankMan " + message.substr(6));
	} else if(message.startsWith(";supinic")) {
		sendMsg(channel, "Fix it Supinic BabyRage");
	} else if(message.startsWith(";kappa")) {
		sendMsg(channel, "Chat spam Kappa 123");
	//} else if(message.includes ("tolekkbot") || message.includes("tolekkBOT")) {
	//	sendMsg(channel, "Pinged PepeS ");
	} else if(message.startsWith("asd")) {
		sendMsg("pajlada", "FeelsDankMan Clap ");
	} else if(message.startsWith(";test1")) {
		sendMsg("pajlada", "FeelsDankMan woah ");
	} else if(message.startsWith(";commands")) {
		sendMsg(channel, "Command list coming soon KKona");
	} else if(message.startsWith(";bot")) {
		sendMsg(channel, "Bot created and maintained by tolekk. Message me on Discord at tolekk#6008 if you want to learn more :) Use ;github if you want to see the code.");
	} else if(message.startsWith(";github")) {
		sendMsg(channel, "My rarely updated github https://github.com/tolekk/tbot with my Pepega code.");
	}
})

// ANTI-SNIPER MODULE
client.on("join", function(channel, user, username, self) {
	const snipers = require('./snipers.js')
    if(snipers.includes(username)) {
		sendMsg("smaczny", "NaM 👉 🚨 " + user["display-name"]); {
		} 
	}
})

//SMACZNY TEST, TUCK-UNTUCK MODULE
client.on("chat", function(channel, user, message, self) {
	if(message.startsWith(";test")) {
		sendMsg("smaczny", "test successful KKona");
	}  else if(message.startsWith(";tuck ")) {
		sendMsg(channel, user["display-name"] + " tucks " + message.substr(6) + " into bed FeelsOkayMan 👉 🛏 💤 " );
	}
		else if(message.startsWith(";untuck ")) {
		sendMsg(channel, user["display-name"] + " untucks " + message.substr(7) + " from their bed DansGame 👉 🛏 ❗  " );
	}
})

// SUB REACTION MODULE
client.on("subscription", function(channel, username) {
	client.say(channel, ("New sub PogChamp"));	
})

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
	client.say(channel, ("Gifters PogChamp "));
})

client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
	client.say(channel, ("GIFTERS PogChamp "));
})

client.on("resub", (channel, username, months, message, userstate, methods) => {
	client.say(channel, ("RESUB PogChamp "));
})

//client.on("subscription", function("smaczny", username) {
//	client.say("smaczny", ("!raffle 2500"));	
//})
//
//client.on("subgift", ("smaczny", username, streakMonths, recipient, methods, userstate) => {
//	client.say("smaczny", ("!raffle 3500"));
//})
//
//client.on("submysterygift", ("smaczny", username, numbOfSubs, methods, userstate) => {
//	client.say("smaczny", ("!raffle 3500"));
//})
//
//client.on("resub", ("smaczny", username, months, message, userstate, methods) => {
//	client.say("smaczny", ("!raffle 2000"));
//})
