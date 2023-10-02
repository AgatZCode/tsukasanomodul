import fetch from 'node-fetch';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa Kamu? `;

  const logic = 'Hai Saya Adalah Tsukasa-BOT Bot Whatsapp Yang Dikembangkan Oleh AgatZ,Saya Bernama Tsukasa-BOT,Saya Dibuat Oleh Agat Dengan Penuh Kesempurnaan Yang Tiada Taraa dan penuh  cita rasa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit https://wa.me/6285811523745';

  try {
    await m.reply(logic);
    const response = await fetch(`https://api.betabotz.org/api/search/openai-logic?text=${encodeURIComponent(text)}&logic=${encodeURIComponent(logic)}&apikey=AgatZApi`);
    const json = await response.json();
    if (json.message) {
      await m.reply(json.message);
    } else {
      m.reply('Tidak ada pesan yang ditemukan.');
    }
  } catch (err) {
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
};

handler.command = handler.help = ['ailogic', 'openailog', 'chatgpt2'];
handler.tags = ['ai'];
handler.premium = false;

export default handler;
