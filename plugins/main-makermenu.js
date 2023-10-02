let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 Maker Menu 』
┃ ⬡ .flaming1 <text>
┃ ⬡ .jadianime
┃ ⬡ .flaming4 <text>
┃ ⬡ .agedetect
┃ ⬡ .logo-coffee <text>
┃ ⬡ .butterfly <text>
┃ ⬡ .carved-wood <text>
┃ ⬡ .iluminated <text>
┃ ⬡ .flaming2 <text>
┃ ⬡ .flaming3 <text>
┃ ⬡ .flaming5 <text>
┃ ⬡ .flaming6 <text>
┃ ⬡ .carved <text>
┃ ⬡ .shadowsky <text>
┃ ⬡ .pictlove <text>
┃ ⬡ .goldplay <text>
┃ ⬡ .tahta <teks>
┃ ⬡ .hornycard
┃ ⬡ .hornylicense
┃ ⬡ .itssostupid
┃ ⬡ .jadizombie
┃ ⬡ .kaneki
┃ ⬡ .lolice
┃ ⬡ .loliggo
┃ ⬡ .nekosad
┃ ⬡ .nekosad
┃ ⬡ .simpcard
┃ ⬡ .ytcomment
┃ ⬡ .ytkomen
╚━━━━━━━━━━━━✧

 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['makermenu']
handler.tags = ['main']
handler.command = /^(makermenu)$/i

export default handler