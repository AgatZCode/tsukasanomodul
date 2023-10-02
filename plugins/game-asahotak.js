import fetch from 'node-fetch';

let handler = async (m, { args }) => {
  try {
    let res = await fetch(`https://api.botcahx.live/api/game/asahotak?apikey=Agatapi`);
    let json = await res.json();
    
    if (json.success) {
      m.reply(json.soal);
    } else {
      throw new Error(`Error!\n\n${JSON.stringify(json)}`);
    }
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan dalam memproses permintaan.');
  }
};

handler.help = ['asahotak'];
handler.tags = ['game'];
handler.command = /^asahotak$/i;

export default handler;
