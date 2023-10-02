let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Kalau Kamu ingin request fitur Pake Perintah Ini\n\nContoh:\n${usedPrefix + command} Saya igin requestfitur jadijadian`
    if (text.length < 3) throw `Laporan Terlalu Pendek, Minimal 3 Karakter!`
    if (text.length > 1000) throw `Laporan Terlalu Panjang, Maksimal 1000 Karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorwa + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan Request Terkirim Kepemilik Bot, Jika ${command.toLowerCase()}  nya main main gaakan di tanggapin._`)
}
handler.help = ['reqfitur', 'requestfitur']
handler.tags = ['info']
handler.command = /^(reqfitur|requestfitur)$/i
export default handler
