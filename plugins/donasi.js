let handler = async (m, { conn }) => {
let fotonya = 'https://www.theanimedaily.com/wp-content/uploads/2021/11/Trailer-TONIKAWA-Over-the-Moon-For-You.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..


❏──「 *Payment* 」
│ • *Ovo:* 083121562064
│ • *Dana:* 08312162064
│ • *Gopay:* 08312162064
│ • *Shoppepay:* 08312162064
│ • *LinkAja:* 08312162064
❏──────────────๑
Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain >,<
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler
