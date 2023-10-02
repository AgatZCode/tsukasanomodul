let handler = async (m, { conn }) => {
let fotonya = 'https://i.pinimg.com/originals/10/59/14/105914063b87ce4d1b2227fc822883d5.jpg'
let sewa = `
╔━━━『 *Main Menu* 』
┃ ⬡ .bannedwa
┃ ⬡ .enable
┃ ⬡ .disable
┃ ⬡ .add
┃ ⬡ .+
┃ ⬡ .addlimit
┃ ⬡ .addowner
┃ ⬡ .addprem
┃ ⬡ .addsewa
┃ ⬡ .balas
┃ ⬡ .banchat
┃ ⬡ .ban
┃ ⬡ .bcchats
┃ ⬡ .bcgc
┃ ⬡ .block
┃ ⬡ .unblock
┃ ⬡ .cleartmp
┃ ⬡ .clearwin
┃ ⬡ .creategroup
┃ ⬡ .delprem
┃ ⬡ .delsewa
┃ ⬡ .deleteuser
┃ ⬡ .df
┃ ⬡ .getdb
┃ ⬡ .getfile
┃ ⬡ .getplugin
┃ ⬡ .gp
┃ ⬡ .join
┃ ⬡ .kenon
┃ ⬡ .leavegc
┃ ⬡ .out
┃ ⬡ .opromote
┃ ⬡ .setbotbio <teks>
┃ ⬡ .setppbot
┃ ⬡ .setnamebot <teks>
┃ ⬡ .sf
┃ ⬡ .simulate
┃ ⬡ .o-tagall
┃ ⬡ .unbanchat
┃ ⬡ .unban
┃ ⬡ .addstore
┃ ⬡ .call <nomer>
╚━━━━━━━━━━━━✧

 _2023 © Tsukasa-BOT_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuowner']
handler.tags = ['main']
handler.command = /^(menuowner)$/i

export default handler