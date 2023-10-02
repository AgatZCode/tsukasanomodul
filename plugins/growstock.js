import fetch from 'node-fetch';

const apiKey = '042b501d37051b7fee39c28c';
const apiUrl = `https://api.lolhuman.xyz/api/growtopia?apikey=${apiKey}`;

async function fetchGrowtopiaData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

let handler = async (m, { conn }) => {
    const growtopiaData = await fetchGrowtopiaData();

    if (growtopiaData && growtopiaData.name && growtopiaData.onlinePlayers) {
        const message = `Growtopia Data:\nName: ${growtopiaData.name}\nOnline Players: ${growtopiaData.onlinePlayers}`;
        conn.reply(m.chat, message, m);
    } else {
        conn.reply(m.chat, 'Failed to fetch Growtopia data.', m);
    }
};
handler.help = ['checkgt'];
handler.tags = ['group'];
handler.command = /^(checkgt)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;
handler.owner = false;

export default handler;
