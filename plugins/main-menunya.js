let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Main Menu* 』
┃ ⬡ .ai
┃ ⬡ .openai
┃ ⬡ .sewa
┃ ⬡ .simi
┃ ⬡ .bannedlist
┃ ⬡ .botstatus
┃ ⬡ .owner
┃ ⬡ .creator
┃ ⬡ .listgc
┃ ⬡ .ping
┃ ⬡ .report
┃ ⬡ .request
┃ ⬡ .rules
┃ ⬡ .runtime
┃ ⬡ .sewa
┃ ⬡ .sewa
┃ ⬡ .server
┃ ⬡ .totalfitur
┃ ⬡ .user
┃ ⬡ .afk
┃ ⬡ .ceksn
┃ ⬡ .daftar
┃ ⬡ .register
┃ ⬡ .fakespam
┃ ⬡ .botstatus
┃ ⬡ .menfess
┃ ⬡ .menu
┃ ⬡ .menu2
┃ ⬡ .unregister
┃ ⬡ .profile
┃ ⬡ .store
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['mainmenu']
handler.tags = ['main']
handler.command = /^(mainmenu)$/i

export default handler