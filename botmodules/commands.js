// Commands run by bot

var commands = {

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


		}
	})
		

};

module.exports = { commands: commands } 


