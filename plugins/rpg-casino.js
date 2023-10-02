import fetch from 'node-fetch';

let buatall = 1;

const handler = async (m, { conn, args, usedPrefix }) => {
    conn.casino = conn.casino ? conn.casino : {};

    if (m.chat in conn.casino) {
        return conn.reply(m.chat, "❗Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!", m);
    } else {
        conn.casino[m.chat] = true;
    }

    if (args.length < 1) {
        return conn.reply(m.chat, `${usedPrefix}casino <jumlah>\n${usedPrefix}casino 1000`, m);
    }

    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim();
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim(); //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1);
        let Kamu = (randomkamu * 1);

        let count = args[0];
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
        count = Math.max(1, count);

        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1;

            if (Aku > Kamu) {
                let caption = `*C A S I N O*\n\n` +
                `*@${m.sender.split("@")[0]}*\n` +
                `┗┅⭑ ${Kamu} Point\n` +
                `*@${conn.user.jid.split("@")[0]}*\n` +
                `┗┅⭑ ${Aku} Point\n\n` +
                `*Kalah*\n` +
                `Kamu Kehilangan Uang $.${count}`.trim();

                conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) });
            } else if (Aku < Kamu) {
                let caption = `*C A S I N O*\n\n` +
                `*@${m.sender.split("@")[0]}*\n` +
                `┗┅⭑ ${Kamu} Point\n` +
                `*@${conn.user.jid.split("@")[0]}*\n` +
                `┗┅⭑ ${Aku} Point\n\n` +
                `*Menang*\n` +
                `Kamu Mendapatkan Uang $.${count * 2}`.trim();

                conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) });
            } else {
                let caption = `*C A S I N O*\n\n` +
                `*@${m.sender.split("@")[0]}*\n` +
                `┗┅⭑ ${Kamu} Point\n` +
                `*@${conn.user.jid.split("@")[0]}*\n` +
                `┗┅⭑ ${Aku} Point\n\n` +
                `*Seri*\n` +
                `Kamu Mendapatkan ${count * 1}`.trim();

                conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) });
            }
        } else {
            conn.reply(m.chat, "❗Uang Kamu Tidak Mencukupi Untuk Casino Silahkan *.claim* Terlebih Dahulu!", m);
        }
    } catch (e) {
        console.log(e);
        conn.reply(m.chat, "Error!!", m);
    } finally {
        delete conn.casino[m.chat];
    }
};

handler.help = ["casino"];
handler.tags = ["rpg"];
handler.command = /^(casino|csn)$/i;
handler.group = true;

export default handler;
