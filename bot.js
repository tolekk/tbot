//tbot0.1, made by ML, 2019
//


// tmi.js lib required to run the bot
// change the dir to whatever you wan
//

var tmi = require('./tmi/node_modules/tmi.js');

//bot config file with oauth and shit

const config = require('./config.js');


var client = new tmi.client(config.options);
		// dankchars for copying [" "," "," "," ","　"]
var lastMessage = null;
    function sendMsg(channel, message){
        if (message === lastMessage) {
            message = message + "\u{E0000} ";
        }
			lastMessage = message;
			client.say(channel, message);
    }


client.connect();


//const commands = require('./botmodules/commands.js')
//const commands1 = require('./botmodules/commands1.js')

client.on("notice", function(channel, msgid, message) {
})
	

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
	} else if(message.startsWith("tolekkbot") || message.startsWith("tolekkBOT")) {
		sendMsg(channel, "Pinged PepeS ");
	} else if(message.startsWith("asd")) {
		sendMsg(channel, "FeelsDankMan Clap ");
	}
})

client.on("subscription", function(channel, username) {
	client.say(channel, ("!join FeelsGoodMan Clap"));
	
})
	
//	client.on("timeout", function(Supinic, username, reason, duration) {	
//		 	client.say(channel, ("You just got WAYTOODANK 'ed " + user['display-name']));
//	})
//	client.on("chat", function(channel, user, message, self) {
//		if(message === ";eval " + function(eval) ) {
//			client.say(channel, (user['display-name'] + " , " + "WutFace can't do it" ));
//		}
			
//	})

