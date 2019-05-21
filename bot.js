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
let lastMessage = null;
    function sendMsg(channel, message){
        if (message === lastMessage) {
            message = message + " ";
        }
			lastMessage = message;
			return message;
    }


client.connect();


//const commands = require('./botmodules/commands.js')
//const commands1 = require('./botmodules/commands1.js')

client.on("chat", function(channel, user, message, self) {
		if(message === ";gearbox") {
			client.say(channel, ("GachiPls GEARBOX"));
		}
			
	})

	client.on("chat", function(channel, user, message, self) {
		if(message === ";bl3") {
			client.say(channel, "After 5 years in development, hopefully, it would have been worth the wait GabeN ");
		}
			
	})


	client.on("chat", function(channel, user, message, self) {
		if(message === ";ping") {
			client.say(channel, "Pong FeelsGoodMan");
		}
			
	})

	client.on("chat", function(channel, user, message, self) {
		if(message === ";nam") {
			client.say(channel, ("Don't NaM me " + user['display-name']));
		}
			
	})

	client.on("chat", function(channel, user, message, self) {
		if(message === "@tolekkBOT ty chuju") {
			client.say("tolekk", ("Spierdalaj " + user['display-name']));
		}
			
	})
	
	client.on("chat", function(channel, user, message, self) {
		if(message === ";tolekk") {
			client.say(channel, ("Sup " + user['display-name'] + " NaM"));
		}
			
	})
	client.on("chat", function(channel, user, message, self) {
		if(message === ";?") {
			client.say(channel, ("❓ ❓ ❓  FeelsDankMan  ❓ ❓ ❓ "));
		}
			
	})
	client.on("chat", function(channel, user, message, self) {
		if(message === ";dank" + message) {
			client.say(channel, ("BOOM YOU JUST GOT DANKED FeelsDankMan"));

		}
	})


