import qrcode from 'qrcode';
import Baileys from '@adiwajshing/baileys';

if (!global.conns) {
  global.conns = [];
}

const handler = async (m, { conn, args, usedPrefix, command }) => {
  let parent = args[0] && args[0] === 'plz' ? conn : global.conn;
  let auth = false;

  if ((args[0] && args[0] === 'plz') || global.conn.user.jid === conn.user.jid) {
    let newConn = new conn.constructor();
    newConn.version = conn.version;

    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8');
      let obj = JSON.parse(json);
      await newConn.loadAuthInfo(obj);
      auth = true;
    }

    newConn.on('qr', async qr => {
      let scan = await parent.sendFile(
        m.chat,
        await qrcode.toDataURL(qr, { scale: 8 }),
        'qrcode.png',
        'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik',
        m
      );
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key);
      }, 30000);
    });

    newConn.connect().then(async ({ user }) => {
      parent.sendMessage(
        user.jid,
        `${usedPrefix + command} ${Buffer.from(JSON.stringify(newConn.base64EncodedAuthInfo())).toString('base64')}`,
        Baileys.MessageType.extendedText
      );
    });

    setTimeout(() => {
      if (newConn.user) return;
      newConn.close();
      let i = global.conns.indexOf(newConn);
      if (i < 0) return;
      delete global.conns[i];
      global.conns.splice(i, 1);
    }, 60000);

    newConn.on('close', () => {
      setTimeout(async () => {
        try {
          if (newConn.state !== 'close') return;
          if (newConn.user && newConn.user.jid) {
            parent.sendMessage(newConn.user.jid, `Koneksi terputus...`, Baileys.MessageType.extendedText);
          }
          let i = global.conns.indexOf(newConn);
          if (i < 0) return;
          delete global.conns[i];
          global.conns.splice(i, 1);
        } catch (e) {
          newConn.logger.error(e);
        }
      }, 30000);
    });

    global.conns.push(newConn);
  } else {
    throw new Error('Tidak bisa membuat bot didalam bot!\n\nhttps://wa.me/' + global.conn.user.jid.split`@`[0] + '?text=.jadibot');
  }
};

handler.help = ['jadibot'];
handler.tags = ['jadibot'];
handler.command = /^jadibot$/i;
handler.limit = true;
handler.owner = true;

export default handler;
