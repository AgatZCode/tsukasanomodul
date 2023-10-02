let handler = m => m
handler.before = async function (m, { conn }) {
    if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.text || !/^Berapa hasil dari/i.test(m.quoted.text)) return
    this.math = this.math ? this.math : {}
    if (!(id in this.math)) return conn.reply(m.chat, '❗Soal itu telah berakhir', m)
    if (m.quoted.id == this.math[id][0].id) {
        let math = JSON.parse(JSON.stringify(this.math[id][1]))
        if (m.text == math.result) {
            global.db.data.users[m.sender].exp += math.bonus
            clearTimeout(this.math[id][3])
            delete this.math[id]
            conn.reply(m.chat, `*⭕Jawaban Benar!*\n\n💥+${math.bonus} XP`, m)
        } else {
            if (--this.math[id][2] == 0) {
                clearTimeout(this.math[id][3])
                delete this.math[id]
                conn.reply(m.chat, `*❗Kesempatan habis!*\nJawaban: *${math.result}*`, m)
            } else conn.reply(m.chat, `*❌Jawaban Salah!*\nMasih ada ${this.math[id][2]} kesempatan`, m)
        }
    }
}

export default handler
