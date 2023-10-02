const handler = async (m, { teks, conn, isOwner, isAdmin, args }) => {
	if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn);
        throw false;
    }

    const ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
    if (m.quoted) {
        if (m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
        const usr = m.quoted.sender;
        await conn.groupParticipantsUpdate(m.chat, [usr], "remove");
        return;
    }

    if (!m.mentionedJid[0]) throw 'Tag pengguna yang ingin dikeluarkan';
    
    const users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)));
    
    for (const user of users) {
        if (user.endsWith("@s.whatsapp.net")) {
            await conn.groupParticipantsUpdate(m.chat, [user], "remove");
        }
    }
};

handler.help = ['kick @user'];
handler.tags = ['group'];
handler.command = /^(kic?k|remove|tendang|\-)$/i;
handler.group = true;
handler.botAdmin = true;

export default handler;
