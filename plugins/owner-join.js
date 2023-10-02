let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

let handler = async (m, { conn, text, isOwner }) => {
    let [_, code, expired] = text.match(linkRegex) || [];
    if (!code) throw 'Link invalid';
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? (expired ? expired.trim() : 0) : 3))); // Konversi expired menjadi bilangan bulat
    let res = await conn.groupAcceptInvite(code);
    m.reply(`Berhasil Join Grup ${res}${expired ? ` Selama ${expired} Hari` : ''}`);
    let chats = global.db.data.chats[res];
    if (!chats) chats = global.db.data.chats[res] = {};
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24;
};

handler.help = ['join'];
handler.tags = ['owner'];
handler.command = /^join$/i;
handler.rowner = true;

export default handler;
