import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed';

let limit = 350;

let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
    if (!args[0].match(/youtu/gi)) throw `❎ Memverifikasi bahwa link YouTube`;

    let chat = global.db.data.chats[m.chat];

    try {
        let q = args[1] || '360p';
        let v = args[0];
        const yt = await youtubedl(v).catch(async () => await youtubedlv2(v));
        const dl_url = await yt.video[q].download();
        const title = await yt.title;
        const size = await yt.video[q].fileSizeH;

        if (size.split('MB')[0] >= limit) {
            return m.reply(` ≡  *PLAY YTDL*\n\n▢ *⚖️Size* : ${size}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`);
        }

        await conn.sendFile(m.chat, dl_url, title + '.mp4', `
    ≡  *PLAY YTDL*
  
    ▢ *📌Titel* : ${title}
    ▢ *📟 Ext* : mp4
    ▢ *🎞️Kualitas* : ${q}
    ▢ *⚖️Size* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument }, `
    Video berhasil diunduh.
`);
    } catch (error) {
        console.error(error);
        m.reply(`✳️ Kesalahan mengunduh video. Coba yang lain.`);
    }
};

handler.help = ['ytmp4 <link yt>'];
handler.tags = ['dl'];
handler.command = ['ytmp4', 'fgmp4'];
handler.diamond = true;

export default handler;
