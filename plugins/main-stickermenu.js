let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Sticker Menu* 』
┃ ⬡ .attp <teks>
┃ ⬡ .bonk
┃ ⬡ .getexif
┃ ⬡ .qc
┃ ⬡ .sticker
┃ ⬡ .s
┃ ⬡ .toimg
┃ ⬡ .tovideo
┃ ⬡ .ttp2
┃ ⬡ .ttp
┃ ⬡ .wm
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['stikermenu']
handler.tags = ['main']
handler.command = /^(stikermenu)$/i

export default handler