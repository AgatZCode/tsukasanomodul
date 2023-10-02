import fetch from 'node-fetch';

const apiKey = 'AgatZApi';
const apiUrl = `https://api.betabotz.org/api/ephoto/ytgoldbutton?text=Beta&apikey=${apiKey}`;

const generateCustomImage = async (text) => {
  try {
    const response = await fetch(apiUrl);
    const imageBuffer = await response.buffer();
    // Lakukan proses untuk menambahkan teks ke gambar disini
    // Misalnya dengan menggunakan modul gambar atau manipulasi gambar lainnya
    return imageBuffer;
  } catch (error) {
    throw new Error('Error generating custom image: ' + error.message);
  }
};

const handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      m.reply('Mohon berikan teks untuk gambar custom.');
      return;
    }

    const customImageBuffer = await generateCustomImage(text);
    const client = create(); // Inisialisasi klien WhatsApp
    await client.sendMessage(m.chat, customImageBuffer, 'imageMessage'); // Mengirim pesan gambar
    client.close(); // Menutup koneksi klien setelah digunakan
  } catch (error) {
    console.error(error.message);
    m.reply('Terjadi kesalahan saat membuat gambar custom.');
  }
};

handler.help = ['goldplay <text>'];
handler.command = ['goldplay'];
handler.tags = ['maker'];
handler.premium = false;
handler.limit = 5;

export default handler;
