import fetch from "node-fetch";

export default async function handler(m, { conn, args, usedPrefix, command }) {
  if (!args[0]) throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://www.facebook.com/100084756252836/videos/3391018171153874/?idorvanity=2765173437119338&mibextid=rS40aB7S9Ucbxw6v`;

  try {
    m.reply('*Please wait..*');
    const url = args[0];
    
    // Ganti URL dengan API yang diberikan
    const apiURL = `https://api.betabotz.org/api/download/fbdown?url=${url}&apikey=AgatZApi`;

    const get = await fetch(apiURL);
    const js = await get.json();
    
    conn.sendFile(m.chat, js.result.HD, 'fb.mp4', '', m);
  } catch (e) {
    console.log(e);
    if (m.sender) {
      conn.reply(m.chat, `_*Terjadi kesalahan!*_`, m);
    }
  }
}

handler.help = ['facebook'];
handler.command = /^(fb|facebook|facebookdl|fbdl|fbdown|dlfb)$/i;
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
