module.exports = {
    test: (args) => {
        client.say(channel, 'Test succesul forsenPls');
    }
}
 
 
	... main file ...
 
const commandsDefinitions = require("somePath/commands1.js")
client.on("chat", (some args) => {
    const invocation = somehow get the command name;
    const args = somehow get the arguments;
 
    for (const [commandName, commandFn] of Object.entries(commandsDefinitions )) {
        if (command === invocation) {
            commandFn(args);
        }
    }
});
