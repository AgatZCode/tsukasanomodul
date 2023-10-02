let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Internet Menu* 』
┃ ⬡ .pinterest <keyword>
┃ ⬡ .artic
┃ ⬡ .bukalapak
┃ ⬡ .charagi
┃ ⬡ .cuaca
┃ ⬡ .fetch
┃ ⬡ .get
┃ ⬡ .gempa
┃ ⬡ .githubsearch
┃ ⬡ .gimage
┃ ⬡ .google
┃ ⬡ .heroml
┃ ⬡ .jadwalbola
┃ ⬡ .lk21search
┃ ⬡ .liriklagu
┃ ⬡ .mahasiswa
┃ ⬡ .playstore
┃ ⬡ .soundsearch
┃ ⬡ .ssweb
┃ ⬡ .wattpad
┃ ⬡ .wikipedia
┃ ⬡ .wikimedia
┃ ⬡ .xnxxsearch
┃ ⬡ .monitor
┃ ⬡ .katanime
┃ ⬡ .renungan
┃ ⬡ .chord
┃ ⬡ .cj <URL>
┃ ⬡ .jadwaltv
┃ ⬡ .wikipedia <apa>
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['internet']
handler.tags = ['main']
handler.command = /^(internet)$/i

export default handler