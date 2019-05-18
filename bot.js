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
const commands1 = require('./botmodules/commands1.js')


