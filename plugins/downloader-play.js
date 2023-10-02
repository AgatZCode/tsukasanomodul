import yts from 'yt-search';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed';

const limit = 320;
const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `✳️ Masukkan judul lagu\n\n📌Contoh *${usedPrefix + command}* whatever`;
    
    m.reply('Tunggu sebentar ya...');

    let search = await yts(text);
    let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
    if (!vid) throw 'Tidak Ditemukan';
    let { title, thumbnail, timestamp, views, ago, url } = vid;

    let captvid = `╭──── 〔 𝗬 𝗢 𝗨 𝗧 𝗨 𝗕 𝗘 〕
• 𝗝𝘂𝗱𝘂𝗹: ${title}
• 𝗗𝘂𝗿𝗮𝘀𝗶: ${timestamp}
• 𝗩𝗶𝗲𝘄𝘀: ${views}
• 𝗨𝗽𝗹𝗼𝗮𝗱: ${ago}
• 𝗟𝗶𝗻𝗸: ${url}

Lagu akan segera dikirimkan, mohon ditunggu aja.
jika masih tidak muncul, diharapkan gunakan .ytmp3.
╰────────⬣`;

    await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', captvid, m);

    let isVideo = false; // Mengunduh audio
    let q = '128kbps';
    let v = vid.url;
    let yt = await youtubedl(v).catch(async () => await youtubedlv2(v));
    let dl_url = await yt.audio[q].download();
    title = await yt.title;
    let size = await yt.audio[q].fileSizeH;

    await conn.sendFile(m.chat, dl_url, `${title}.mp3`, `
        ≡  *DL YTMP3*
        
        ▢ *📌Title* : ${title}
        ▢ *⚖️Size* : ${size}
    `.trim(), m, false, { mimetype: 'audio/mpeg' });

    m.reply('Selesai!');
};

handler.help = ['play'];
handler.tags = ['downloader'];
handler.command = /^play?$/i;

handler.exp = 0;
handler.limit = true;
handler.register = false;

export default handler;
