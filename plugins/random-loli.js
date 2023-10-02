const handler = async (m, { conn, command }) => {
  let thumb = `https://api.xyroinee.xyz/api/sfw/loli?apikey=${global.xyro}`;
  let text = 'Awas FBI Cok';

  conn.sendFile(m.chat, thumb, 'menu.jpg', `${text}`, m);
};

handler.help = ['loli'];
handler.tags = ['anime'];
handler.command = /^(loli)$/i;

export default handler;
