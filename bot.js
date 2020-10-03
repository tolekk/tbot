const { ChatClient } = require("dank-twitch-irc");
const config = require("./config.json")

let client = new ChatClient(config);

client.on("connecting", () => console.log("Connecting to Twitch..."));
client.on("ready", () => console.log("Successfully connected to chat"));
client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});

client.on("PRIVMSG", async(msg) => {
  console.log(`[#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`);
});

// See below for more events

client.connect();
client.join("tolekk");

client.on("connect", async() => {
    await client.say("tolekk", "joined chat");
});

// COMMANDS

client.on("PRIVMSG", async(msg) => {
    if (msg.messageText[0] === ";") {
    const trunMsg = msg.messageText.slice(1)
        if (trunMsg === "ping") 
            await client.say("tolekk", "Pong!")  
    }   
});