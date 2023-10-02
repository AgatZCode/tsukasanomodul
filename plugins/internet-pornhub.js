import fetch from 'node-fetch';

const apiUrl = 'https://api.ibeng.tech/api/search/pornhub?q=Milf&apikey=nfop7dOtEa';

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const sendResponse = async (conn, m) => {
  try {
    const apiData = await fetchData();
    const replyText = `Berikut adalah hasil dari API:\n\n${JSON.stringify(apiData, null, 2)}`;
    await conn.sendMessage(m.chat, replyText, MessageType.text, { quoted: m });
  } catch (error) {
    console.error('Error:', error);
    await conn.sendMessage(m.chat, 'Terjadi kesalahan saat mengambil data dari API. Mohon coba lagi nanti.', MessageType.text, { quoted: m });
  }
};

let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, 'Mohon tunggu...', MessageType.text, { quoted: m });
  await sendResponse(conn, m);
};

handler.command = ['getdata'];
handler.tags = ['api'];
handler.help = ['getdata'];
handler.limit = false;
handler.group = false;
handler.private = true;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.exp = 0;

export default handler;
