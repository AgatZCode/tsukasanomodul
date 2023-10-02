import similarity from 'similarity';

const threshold = 0.72;

const handler = m => m;

handler.before = async function (m) {
    const id = m.chat;
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.text)) return !0;
    
    this.asahotak = this.asahotak ? this.asahotak : {};
    
    if (!(id in this.asahotak)) return m.reply('Soal itu telah berakhir');
    
    if (m.quoted.id === this.asahotak[id][0].id) {
        const json = JSON.parse(JSON.stringify(this.asahotak[id][1]));
        
        if (m.text.toLowerCase() === json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.asahotak[id][2];
            global.db.data.users[m.sender].tiketcoin += 1;
            m.reply(`*Benar!*\n+${this.asahotak[id][2]} XP\n+1 TiketCoin`);
            clearTimeout(this.asahotak[id][3]);
            delete this.asahotak[id];
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
            m.reply(`*Dikit Lagi!*`);
        } else {
            m.reply(`*Salah!*`);
        }
    }
    return !0;
};

handler.exp = 0;

export default handler;