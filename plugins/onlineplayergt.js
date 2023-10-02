import fetch from 'node-fetch';

const apiKey = '4b884384e3773477bd9166ba';
const apiUrl = `https://api.lolhuman.xyz/api/growtopia?apikey=${apiKey}`;

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const handler = async (m, { conn }) => {
  const onlinePlayers = await fetchData();
  if (onlinePlayers && onlinePlayers.result) {
    const message = `Daftar Pemain Online:\n${onlinePlayers.result.join('\n')}`;
    conn.sendMessage(m.chat, message, MessageType.text, { quoted: m });
  }
};

handler.help = ['checkgtonline'];
handler.tags = ['group'];
handler.command = /^(checkgtonline)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
handler.owner = false;

export default handler;

