let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *AI Menu* 』
┃ ⬡ .beauty
┃ ⬡ .tocartoon
┃ ⬡ .dalle
┃ ⬡ .gpt
┃ ⬡ .hairstyle
┃ ⬡ .openai
┃ ⬡ .ocr
┃ ⬡ .pixardif
┃ ⬡ .remini
┃ ⬡ .color
┃ ⬡ .hdr
┃ ⬡ .toanime
┃ ⬡ .txt2img
┃ ⬡ .blur
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['aimenu']
handler.tags = ['main']
handler.command = /^(aimenu)$/i

export default handler