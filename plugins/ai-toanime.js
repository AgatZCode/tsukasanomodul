import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let handler = async (m, { conn, usedPrefix, command }) => {
  var q = m.quoted ? m.quoted : m;
  var mime = (q.msg || q).mimetype || q.mediaType || '';
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
    try {
      await conn.reply(m.chat, '⏳ Sedang diproses...', m); // Menambahkan pesan "Sedang diproses..."
      const img = await q.download?.();
      let out = await uploadImage(img);
      let old = new Date();
      let apiKey = 'AgatZApi'; // Update the API key here
      let apiUrl = `https://api.betabotz.org/api/maker/jadianime?url=${encodeURIComponent(out)}&apikey=${apiKey}`;
      let res = await fetch(apiUrl);
      let convert = await res.json();
      let buff = await fetch(convert.result.img_crop_single)
        .then(res => res.buffer());
      await conn.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date() - old) * 1)} ms` }, { quoted: m });
    } catch (e) {
      console.log(e);
      m.reply(`[ ! ] Identifikasi Gagal.`);
    }
  } else {
    m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`);
  }
};

handler.help = ['jadianime'];
handler.command = ['toanime', 'jadianime'];
handler.tags = ['maker'];
handler.premium = false;
handler.limit = 5;

export default handler;
