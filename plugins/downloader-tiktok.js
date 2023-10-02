import fetch from "node-fetch";

export default async function handler(m, { conn, args, usedPrefix, command }) {
  if (!args[0]) throw `Masukkan URL!\n\nContoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`;
  if (!args[0].match(/tiktok/gi)) throw `URL Tidak Ditemukan!`;
  m.reply("Tunggu sebentar...");  
  const url = args[0];
  
  // Ganti URL dengan API yang diberikan
  const apiURL = `https://api.betabotz.org/api/download/tiktok?url=${url}&apikey=AgatZApi`;
  
  const apis = await fetch(apiURL);
  if (!apis.ok) throw await apis.text();
  
  const jsons = await apis.json();
  if (!jsons.status) throw jsons;
  
  const { 
    video, 
    title_audio,
    title,
    audio
  } = jsons.result;
  
  await conn.sendFile(m.chat, video, 'tiktok.mp4', `
*Deskripsi*: ${title_audio}
\n*Title*: ${title}`, m);
  
  conn.sendFile(m.chat, `${audio[1]}`, 'tikmp3.opus', null, m);
}

handler.help = ['tiktok'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|dltt)$/i;
handler.tags = ['downloader'];
handler.limit = false;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
