let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Quotes Menu* 』
┃ ⬡ .bacot
┃ ⬡ .bucin
┃ ⬡ .dare
┃ ⬡ .galau
┃ ⬡ .gombal
┃ ⬡ .hacker
┃ ⬡ .q-islam
┃ ⬡ .quotes
┃ ⬡ .katabijak
┃ ⬡ .motivasi
┃ ⬡ .pantun
┃ ⬡ .senja
┃ ⬡ .truth
┃ ⬡ .videoquotes
┃ ⬡ .videogalau
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['quotesmenu']
handler.tags = ['main']
handler.command = /^(quotesmenu)$/i

export default handler