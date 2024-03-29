const {
    Client,
    Events,
    GatewayIntentBits
} = require("discord.js");
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

require("dotenv").config();

//clientの作成
const client = new Client({
    intents: Object.values(GatewayIntentBits).filter(Number.isInteger)
});

//client login
client.login(process.env.token);

// 非同期の音声再生関数
async function playAudio(message) {
    if (message.member.voice.channel) {
        const url = 'https://www.youtube.com/watch?v=6vJkPqIVnok'; // 固定のYouTubeのURL
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id, // メッセージを送信したユーザーのボイスチャンネルID
            guildId: message.guild.id, // ギルドID
            adapterCreator: message.guild.voiceAdapterCreator, // アダプタークリエーター
        });
        const player = createAudioPlayer();
        const stream = ytdl(url, { filter: 'audioonly' });
        const resource = createAudioResource(stream);
        player.play(resource);
        connection.subscribe(player);

        // 音声が再生され終わったらボイスチャンネルから退出する
        player.on('idle', () => {
            connection.destroy();
        });
    } else {
        message.reply('ボイスチャンネルに接続してください。');
    }
}


// 新しい非同期の音声再生関数
async function playAnotherAudio(message) {
    if (message.member.voice.channel) {
        const url = 'https://youtu.be/33DzE-64rp4?si=ESXAF8z7oJTQyEDS'; // 新しいYouTubeのURL
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id, // メッセージを送信したユーザーのボイスチャンネルID
            guildId: message.guild.id, // ギルドID
            adapterCreator: message.guild.voiceAdapterCreator, // アダプタークリエーター
        });
        const player = createAudioPlayer();
        const stream = ytdl(url, { filter: 'audioonly' });
        const resource = createAudioResource(stream);
        player.play(resource);
        connection.subscribe(player);

        // 音声が再生され終わったらボイスチャンネルから退出する
        player.on('idle', () => {
            connection.destroy();
        });
    } else {
        message.reply('ボイスチャンネルに接続してください。');
    }
}

// 新しい非同期の音声再生関数
async function playThirdAudio(message) {
    if (message.member.voice.channel) {
        const url = 'https://www.youtube.com/watch?v=zzrKab-dGrA'; // 新しいYouTubeのURL
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id, // メッセージを送信したユーザーのボイスチャンネルID
            guildId: message.guild.id, // ギルドID
            adapterCreator: message.guild.voiceAdapterCreator, // アダプタークリエーター
        });
        const player = createAudioPlayer();
        const stream = ytdl(url, { filter: 'audioonly' });
        const resource = createAudioResource(stream);
        player.play(resource);
        connection.subscribe(player);

        // 音声が再生され終わったらボイスチャンネルから退出する
        player.on('idle', () => {
            connection.destroy();
        });
    } else {
        message.reply('ボイスチャンネルに接続してください。');
    }
}

// 新しい非同期の音声再生関数
async function playFourthAudio(message) {
    if (message.member.voice.channel) {
        const url = 'https://youtu.be/qGNiD_ico10?si=r970Szvo3vdTZBqd'; // 新しいYouTubeのURL
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id, // メッセージを送信したユーザーのボイスチャンネルID
            guildId: message.guild.id, // ギルドID
            adapterCreator: message.guild.voiceAdapterCreator, // アダプタークリエーター
        });
        const player = createAudioPlayer();
        const stream = ytdl(url, { filter: 'audioonly' });
        const resource = createAudioResource(stream);
        player.play(resource);
        connection.subscribe(player);

        // 音声が再生され終わったらボイスチャンネルから退出する
        player.on('idle', () => {
            connection.destroy();
        });
    } else {
        message.reply('ボイスチャンネルに接続してください。');
    }
}

// 新しい非同期の音声再生関数
async function playFifthAudio(message) {
    if (message.member.voice.channel) {
        const url = 'https://youtu.be/ri6OjbXVvrg?si=-hZSmsB89W8wPXVi'; // 新しいYouTubeのURL
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id, // メッセージを送信したユーザーのボイスチャンネルID
            guildId: message.guild.id, // ギルドID
            adapterCreator: message.guild.voiceAdapterCreator, // アダプタークリエーター
        });
        const player = createAudioPlayer();
        const stream = ytdl(url, { filter: 'audioonly' });
        const resource = createAudioResource(stream);
        player.play(resource);
        connection.subscribe(player);

        // 音声が再生され終わったらボイスチャンネルから退出する
        player.on('idle', () => {
            connection.destroy();
        });
    } else {
        message.reply('ボイスチャンネルに接続してください。');
    }
}


//client event 登録
client.on(Events.MessageCreate, async (message) => {
    const command = message.content;

    if (command === "うーたん") {
        await message.reply("うーうーたん現金現金やなー")
    }
    if (command === "まんぜう") {
        await message.reply("んん〜まかｧｧウｯｯ!!!!🤏😎")
    }
    if (command === "コシヒカリ") {
        await message.reply("ぽぅぽ,新潟産のコシヒカリやないかって！！")
    }

    if (command === "三大将") {
        await message.reply("✋🐲🤚✋🐮🤚✋🐷🤚「あ、あれは三大将!!!」");
    }


    if (command === "ガチ") {
        await message.reply("ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷ガチイク🗿🍷")
    }

    if (command === "まんぜうライブ") {
        await playAudio(message);
    }

    if (command === 'スイカ') {
        await playAnotherAudio(message);
    }

    if (command === "12345ライブ") {
        await playThirdAudio(message);
    }

    if (command === "うーちゃんライブ") {
        await playFourthAudio(message);
    }

    if (command === "まんぜうラップ") {
        await playFifthAudio(message);
    }
});