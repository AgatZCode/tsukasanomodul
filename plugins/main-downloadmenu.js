let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Downloader Menu* 』
┃ ⬡ .apkdl
┃ ⬡ .facebook
┃ ⬡ .gitclone
┃ ⬡ .instagram
┃ ⬡ .mediafire
┃ ⬡ .bitly <link>
┃ ⬡ .danbooru
┃ ⬡ .facebook
┃ ⬡ .gdrive
┃ ⬡ .gitclone
┃ ⬡ .igfoto <url>
┃ ⬡ .instagram
┃ ⬡ .mediafire
┃ ⬡ .pinterest <keyword>
┃ ⬡ .play
┃ ⬡ .play
┃ ⬡ .ringtone
┃ ⬡ .sfile
┃ ⬡ .soundcloud
┃ ⬡ .telesticker
┃ ⬡ .tiktok <url>
┃ ⬡ .tt <url>
┃ ⬡ .tiktokimg / ttimg <url>
┃ ⬡ .twitter
┃ ⬡ .xnxxvideo
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['downloadmenu']
handler.tags = ['main']
handler.command = /^(downloadmenu)$/i

export default handler