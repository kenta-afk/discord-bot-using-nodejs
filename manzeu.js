
const {
    Client,
    Events,
    GatewayIntentBits

} = require("discord.js");
require("dotenv").config();

//clientの作成
const client = new Client({
    intents: Object.values(GatewayIntentBits).filter(Number.isInteger)
});

//client login
client.login(process.env.token)
//client event 登録

client.on(Events.MessageCreate, async (message) => {

    const command = message.content;
    if (command === "うーたん") {
        await message.reply("うーうーたん現金現金やなー")
    }
    if (command.includes("まんぜう")) {
        await message.reply("んん〜まかｧｧウｯｯ!!!!🤏😎")
    }
    if (command.includes("して")) {
        await message.reply("にょーかい🐮")
    }
});
