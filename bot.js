var tmi = require('tmi.js');
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

	client.on("connected", function(adress,port) {
		client.say("tolekk", "I JOINED LULW");
			
	})
	
	client.on("chat", function(channel, user, message, self) {
		if(message === ";gearbox") {
			client.say(channel, "GachiPls GEARBOX"  );
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
			client.say(channel, ("FeelsDankMan 👉 " + message));
		}
			
	})

	client.on("disconnected", (reason) => { 
		client.say("tolekk", "LEFT LULW");
			
		
	})

	client.on("chat", function(channel, user, message, self) {
		if (channel !== "#tolekk") {
			return; }
		if(message.split(' ')[0] !== ";banme" ) {
			return;
		}
		
		if (user.mod) { 
			client.say("tolekk", ("OMEGALUL"));
			return;
		}
		client.timeout("tolekk", user.username, Math.floor((Math.random() * 300) + 1), "OMEGALUL");

	})
