import fetch from 'node-fetch';

const timeout = 180000;
const poin = 500;
const tiketcoin = 1;

const handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {};
    const id = m.chat;
    
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0]);
        throw false;
    }
    
    const src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json();
    const json = src[Math.floor(Math.random() * src.length)];
    const caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ao untuk bantuan
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
`.trim();

    conn.asahotak[id] = [
        await conn.reply(m.chat, caption, m),
        json,
        poin,
        setTimeout(() => {
            if (conn.asahotak[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.asahotak[id][0]);
                delete conn.asahotak[id];
            }
        }, timeout)
    ];
};

handler.help = ['asahmindset'];
handler.tags = ['game'];
handler.command = /^asahmindset/i;
handler.limit = true;
handler.group = true;

export default handler;
