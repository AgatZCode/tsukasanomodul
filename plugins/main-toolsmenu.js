let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Tools Menu* 』
┃ ⬡ .sendbug <nomer/jumlah>
┃ ⬡ .nulis2 <teks>
┃ ⬡ .monitor
┃ ⬡ .sendbug <nomor>
┃ ⬡ .sendtroli <nomor>
┃ ⬡ .spamsms <no hp>
┃ ⬡ .smeme
┃ ⬡ .call <nomer>
┃ ⬡ .apksearch
┃ ⬡ .carigrup <pencarian>
┃ ⬡ .hd <caption|reply media>
┃ ⬡ .hade <balas foto>
┃ ⬡ .halah <teks>
┃ ⬡ .hilih <teks>
┃ ⬡ .huluh <teks>
┃ ⬡ .heleh <teks>
┃ ⬡ .holoh <teks>
┃ ⬡ .modapk
┃ ⬡ .addvn
┃ ⬡ .addmsg
┃ ⬡ .addvideo
┃ ⬡ .addaudio
┃ ⬡ .addimg
┃ ⬡ .addstiker
┃ ⬡ .addgif
┃ ⬡ .delmsg
┃ ⬡ .all
┃ ⬡ .listdoc
┃ ⬡ .listvn
┃ ⬡ .listmsg
┃ ⬡ .listvideo
┃ ⬡ .listgif
┃ ⬡ .listaudio
┃ ⬡ .listimg
┃ ⬡ .liststicker
┃ ⬡ .removebg
┃ ⬡ .qr
┃ ⬡ .qrcode
┃ ⬡ .react
┃ ⬡ .readmore
┃ ⬡ .spoiler
┃ ⬡ .readviewonce
┃ ⬡ .resize <width> <height> (reply|caption)
┃ ⬡ .spamwa <number>|<mesage>|<no of messages>
┃ ⬡ .wastalk
┃ ⬡ .style
┃ ⬡ .tomp3
┃ ⬡ .tovn
┃ ⬡ .upload
┃ ⬡ .translate
┃ ⬡ .tts
┃ ⬡ .run
┃ ⬡ .zodiac 2001 11 15
╚━━━━━━━━━━━━✧
 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['toolsmenu']
handler.tags = ['main']
handler.command = /^(toolsmenu)$/i

export default handler