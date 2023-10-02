let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.2.000
│ • *2 Minggu:* Rp.4.000
│ • *1 Bulan:* Rp.8.000
│ • *Permanen:* Rp.15.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.2.000
│ • *2 Minggu:* Rp.3.000
│ • *1 Bulan:* Rp.5.000
│ • *Permanen:* Rp.10.000
❏──────────────๑
❏──「 *Pembayaran* 」
│ • *Ovo:* 083121562064
│ • *Dana:* 083121562064
│ • *Gopay:* 08312162064
│ • *Shoppepay:* 08312162064
│ • *LinkAja:* 08312162064
│ • *Qris:* Hub owner
❏──────────────๑
│ 📌 Hubungi Owner!!!
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|prem|premium)$/i

export default handler
