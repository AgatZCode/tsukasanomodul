let handler = async (m, { conn }) => {
let fotonya = 'https://image.tmdb.org/t/p/original/bI2w1k6jsO1To0igbcKqwr8nuRf.jpg'
let sewa = `👋🏻Halo Kak Namaku Adalah Tsukasa-BOT, Jika ingin request fitur bisa gunakan /reqfitur <text>, dan mohon jangan terlalu spam ya menggunakannya, dan jika ingin menggunakan rpgmenu mohon untuk registrasi dulu *Example: reg agat.18.\n\n*言 allmenu*\n*言 mainmenu*\n*言 aimenu*\n*言 groupmenu*\n*言 gamemenu*\n*言 rpgmenu*\n*言 stikermenu*\n*言 makermenu*\n*言 animanga*\n*言 nsfwmenu*\n*言 internet*\n*言 downloadmenu*\n*言 toolsmenu*\n*言 islamic*\n*言 quotesmenu*\n*言 random*\n*言 menuowner*\n\n_2023 © Tsukasa-BOT_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|bot|\?)$/i

export default handler
