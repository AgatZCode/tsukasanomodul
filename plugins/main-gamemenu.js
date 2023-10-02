let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Game Menu* 』
┃ ⬡ .asahmindset
┃ ⬡ .asahotak
┃ ⬡ .caklontong
┃ ⬡ .family100
┃ ⬡ .iqtest
┃ ⬡ .math <mode>
┃ ⬡ .siapakahaku
┃ ⬡ .slot <apuesta>
┃ ⬡ .suit
┃ ⬡ .susunkata
┃ ⬡ .tebakanime
┃ ⬡ .tebakbendera
┃ ⬡ .tebakchara
┃ ⬡ .tebakgambar
┃ ⬡ .tebaklirik
┃ ⬡ .tebaksurah
┃ ⬡ .tekateki
┃ ⬡ .tebakkata
┃ ⬡ .tictactoe
┃ ⬡ .ttt
┃ ⬡ .fightkucing
┃ ⬡ .hunter
┃ ⬡ .attack
┃ ⬡ .atk
┃ ⬡ .war
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['gamemenu']
handler.tags = ['main']
handler.command = /^(gamemenu)$/i

export default handler