import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  const tio = await fetch('https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/memeindo.json');
  const json = await tio.json();
  const url = json[Math.floor(Math.random() * json.length)];
  await conn.sendFile(m.chat, url.image, 'file.jpg', 'Tsukasa-BOT', m);
};

handler.command = /^(meme)$/i;
handler.tags = ['fun'];
handler.help = ['meme'];
handler.limit = true;

export default handler;

