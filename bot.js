const { ChatClient } = require("dank-twitch-irc");
const config = require("./config.json")

const botVer = "0.2"

let client = new ChatClient(config);

client.on("connecting", () => console.log("Connecting to Twitch..."));
client.on("ready", () => console.log("Successfully connected to chat"));
client.on("close", (error) => {
    if (error != null) {
        console.error("Client closed due to error", error);
    }
});

client.on("PRIVMSG", async (msg) => {
    console.log(`[#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`);
});

// See below for more events

client.connect();
client.join("tolekk");

client.on("connect", async () => {
    await client.say("tolekk", "tolekkBOT version " + botVer + " joined.");
});



// COMMANDS

client.on("PRIVMSG", async (msg) => {
    let checkMod = msg.isMod || msg.badges.hasBroadcaster
    if (msg.messageText[0] === ";") {
        const trunMsg = msg.messageText.slice(1).split(" ");
        if (trunMsg[0] === "ping") {
            await client.say("tolekk", "Pong!");

        } else if (trunMsg[0] === "github") {
            await client.say("tolekk", "https://github.com/tolekk/tbot :)")
        } else if (trunMsg[0] === "test") {
            if (checkMod) { //xd
                await client.say("tolekk", "KKona test succesful KKona");
            } else {
                await client.say("tolekk", "KKona test unsuccesful KKona");
            }

        } else if (trunMsg[0] === "vanish") {
            try {
                await client.timeout("tolekk", msg.displayName, 1, "vanish command usage");
            } catch (error) {
            }
        } else if (trunMsg[0] === "pingmods") {
            if (checkMod) {
            let mods = await client.getMods(trunMsg[1])
            await client.say("tolekk", "Ping 🔔 " + mods);
            }
        }
    }
});

