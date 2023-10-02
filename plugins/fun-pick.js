const handler = async (m, { text, args, participants, command, conn }) => {
    if (args.length < 2 || isNaN(args[0])) {
        throw 'Example: #pick 15 gay';
    }

    const userCount = Math.min(participants.length, parseInt(args[0]));

    if (userCount <= 0) {
        throw 'No participants available to pick from.';
    }

    const users = participants.map(p => p.jid);
    const taggedUsers = new Array(userCount).fill().map(() => {
        const index = Math.floor(Math.random() * users.length);
        const selectedUser = users.splice(index, 1)[0]; // Dapatkan JID pengguna secara acak
        return `@${selectedUser}`;
    }).join('\n');

    m.reply(`🎉 Kamu Ter${command} sebagai ${text.replace(args[0], '').trim()}:\n\n${taggedUsers}`);
};

handler.help = ['pick <jumlah> <teks>'];
handler.tags = ['fun'];
handler.command = /^pick/i;

export default handler;
