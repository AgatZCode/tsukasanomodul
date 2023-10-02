let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Random Menu* 』
┃ ⬡ .nekopoi
┃ ⬡ .asupan
┃ ⬡ .blackpink
┃ ⬡ .bocil
┃ ⬡ .bts
┃ ⬡ .china
┃ ⬡ .cosplay
┃ ⬡ .geayubi
┃ ⬡ .gensin
┃ ⬡ .hentai
┃ ⬡ .indonesia
┃ ⬡ .japan
┃ ⬡ .korea
┃ ⬡ .malaysia
┃ ⬡ .thailand
┃ ⬡ .vietnam
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['random']
handler.tags = ['main']
handler.command = /^(random)$/i

export default handler