const {
    Client,
    Events,
    GatewayIntentBits

} = require("discord.js");


//clientの作成
const client = new Client({
    intents: Object.values(GatewayIntentBits).filter(Number.isInteger)
});

//client login
client.login("MTE4NjYyNDM2NTY5NDAzODA2Ng.GRVETI.hxIRqu7xmar5XCT5uIEArhKS5kxQYkgofLZnbw")

//client event 登録

client.on(Events.MessageCreate, async (message) => {
    const command = message.content;
    if (message.auther.bot){
        return;
    }
    if (command === "うーたん") {
        await message.reply("うーうーたん現金現金やなー")
    }
    if (command.includes("まんぜう")) {
        await message.reply("んん〜まかｧｧウｯｯ!!!!🤏😎")
    }
})

