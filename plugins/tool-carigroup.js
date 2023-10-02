import { groupWA } from '@bochilteam/scraper';

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let handler = async (m, { text }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh: .mabar`;
  let res = await groupWA(text);
  if (!res) throw 'Group Tidak Ditemukan';
  
  var pik = pickRandom(res);
  var { subject, url } = pik;
  
  let caption = `
*Nama* : ${subject}
*Link :* ${url}
`;
  
  return m.reply(caption);
};

handler.help = ['carigrup <pencarian>'];
handler.tags = ['tools'];
handler.command = /^carig(ro?up|c)/i;

export default handler;
