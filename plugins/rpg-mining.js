const timeout = 28800000;

const msToTime = (duration) => {
  // ...
};

const handler = async (m, { conn, usedPrefix, text }) => {
    let time = global.db.data.users[m.sender].lastnambang + 28800000
  if (new Date - global.db.data.users[m.sender].lastnambang< 28800000) throw `Kamu Sudah Menambang Dan Butuh Istirahat\nMohon Tunggu Selama ${msToTime(time - new Date())}`
    let berlians = `${Math.floor(Math.random() * 3)}`.trim()
    let emasbiasas = `${Math.floor(Math.random() * 4)}`.trim()
    let emasbatangs = `${Math.floor(Math.random() * 3)}`.trim()
    global.db.data.users[m.sender].berlian += berlians * 1
    global.db.data.users[m.sender].emas += emasbiasas * 1
    global.db.data.users[m.sender].diamond += emasbatangs * 1
	global.db.data.users[m.sender].lastmining = new Date * 1
  m.reply(`Hasil Dari Menambang: \n+${berlians} Berlian\n+${emasbiasas} Emas\n+${emasbatangs} Diamond`)
  setTimeout(() => {
					conn.reply(m.chat, `Kamu Sudah Bisa Menambang Lagi Kak`, m)
					}, timeout)
}

handler.help = ['nambang'];
handler.tags = ['rpg'];
handler.command = /^(nambang)/i;
handler.group = true;
handler.fail = null;
handler.limit = true;
handler.exp = 0;
handler.money = 0;

export default handler;
