
const isSatir = /(([Kk]enao|[Bb]ims|[Aa]v)a|tumlul|Tumlul|[Gg]wejh|[Oo]kgey|[Ss]iava|[Kk]avan|tenan|[Aa](msu|f[ah])|[Mm]gak|lmao|[Pp]edo|([Bb]an|hoo)h|[Kk]nf|ancrit)/i; // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return true;
    if (!m.isGroup) return false;
    let chat = global.db.data.chats[m.chat];
    let bot = global.db.data.settings[this.user.jid] || {};
    const isAntiSatir = isSatir.exec(m.text);

    if (chat.antiSatir && isAntiSatir) {
        await conn.sendButton(m.chat, `*Kata Satir Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antisatir', '/disable antisatir'], m);
        if (isBotAdmin && bot.restrict) {
            global.db.data.users[m.sender].warn += 1;

            await conn.sendButton(m.chat, bottime, `Kamu mendapatkan Warn 1\nKarena menggunakan Kata yg berbau Satir\n\nKetik *.my* untuk cek Warning mu`, `${imgr + 'Anti Satir'}`, [
                ['MY', `${usedPrefix}my`]
            ], m);
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!');
    }
    return true;
}
