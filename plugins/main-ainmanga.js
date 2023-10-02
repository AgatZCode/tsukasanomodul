let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Animanga Menu* 』
┃ ⬡ .amv
┃ ⬡ .animeinfo
┃ ⬡ .charainfo
┃ ⬡ .doujinsearch
┃ ⬡ .doujindetail
┃ ⬡ .doujinlatest
┃ ⬡ .komikusearch
┃ ⬡ .komikudetail
┃ ⬡ .komikulatest
┃ ⬡ .mangainfo
┃ ⬡ .mangatoons
┃ ⬡ .nhentaisearch
┃ ⬡ .nhentaidetail
┃ ⬡ .otakusearch
┃ ⬡ .otakudetail
┃ ⬡ .doujinlatest
┃ ⬡ .ppcp
┃ ⬡ .storyanime
┃ ⬡ .whatanime
┃ ⬡ .jadianime
┃ ⬡ .gangbang
┃ ⬡ .hinata
┃ ⬡ .masturbation
┃ ⬡ .orgy
┃ ⬡ .wallpaperq <query>
╚━━━━━━━━━━━━✧

 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['ainmanga']
handler.tags = ['main']
handler.command = /^(ainmanga)$/i

export default handler