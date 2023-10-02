import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
    // You can directly send the disabled message here
    m.reply("This command is disabled");

    // Alternatively, if you want to perform some actions before sending the message:
    // const pp = await conn.profilePictureUrl(m.chat).catch(_ => null);
    // const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0);
    // const teks = "This command is disabled";
    // m.reply(teks, null, {
    //     mentions: conn.parseMention(teks)
    // });
};

handler.command = /^(add|\+)$/i; // Match the commands
handler.group = true; // Specify that this handler is for group chats

export default handler;
