const handler = async (m, { conn }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {};
    const id = m.chat;
    
    if (!(id in conn.asahotak)) throw false;
    
    const json = conn.asahotak[id][1];
    const ans = json.jawaban;
    const clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_');
    
    m.reply('```' + clue + '```');
};

handler.command = /^ao$/i;
handler.limit = true;

export default handler;
