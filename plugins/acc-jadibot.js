const handler = async (m, { text, args, usedPrefix }) => {
  if (!args[0]) return m.reply('Siapa yang ingin diakses jadibot?');

  let who = ''; // Deklarasi variabel who di luar loop

  for (let i = 0; i < args.length; i++) {
    who = m.mentionedJid[i]; // Assign nilai variabel who di dalam loop
    if (!who) return m.reply(args[i] + ' harus berupa tag');

    if (!global.db.data.users[who]) {
      global.db.data.users[who] = {
        acc: true,
        // ...data pengguna lainnya...
      };
    } else {
      global.db.data.users[who].acc = true;
    }
  }

  conn.reply(m.chat, `Berhasil mengakses jadibot kepada @${who.split("@")[0]}`, m);
}

handler.tags = ['owner'];
handler.rowner = true;
handler.command = /^(acc)$/i;

export default handler;
