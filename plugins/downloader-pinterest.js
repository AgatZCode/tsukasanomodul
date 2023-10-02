// pinterest.js
import xfar from 'xfarr-api';

const handler = async (m, { usedPrefix, command, conn, args }) => {
    if (!args[0]) {
        throw `Gunakan format: ${usedPrefix}${command} naruto`;
    }
    
    try {
        const data = await xfar.Pinterest(args[0]);
        const pincpt = `🔗 Link media : ${data.url}`;
        await conn.sendFile(m.chat, data.url, 'pin.jpg', pincpt);
    } catch (error) {
        m.reply('Terjadi kesalahan saat mengambil data dari Pinterest.');
        console.error(error);
    }
};

handler.help = ['pinterest <keyword>'];
handler.tags = ['internet', 'downloader'];
handler.command = /^(pinterest)$/i;

export default handler;
