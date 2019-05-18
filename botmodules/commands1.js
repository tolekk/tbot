var commands1 = {
	commands1: {
	client.on('chat', function(channel, user, message, self) {
		if (self) return;
		if (command === ';test') {
			client.say(channel, 'Test succesul forsenPls');
		}

	});
}
}

module.exports = { commands1: commands1 }

