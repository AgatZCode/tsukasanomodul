import https from 'https';

const apiKey = 'AgatZApi'; // Ganti dengan API key yang sesuai

export default async function handler(m, { conn, args, usedPrefix, command }) {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://www.capcut.com/template-detail/7273798219329441025?template_id=7273798219329441025&share_token=1ea9b68c-aa1b-4fc4-86c2-bf2b9136b6e0&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`
  }
  try {
    if (!args[0].match(/capcut/gi)) {
      throw `URL Tidak Ditemukan!`
    }
    m.reply('*Mohon tunggu..*')
    
    // Ganti URL dengan API yang diberikan
    const apiUrl = `https://api.betabotz.org/api/download/capcut?url=${args[0]}&apikey=${apiKey}`;
    
    const api = await https.get(apiUrl, response => {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', async () => {
        const res = JSON.parse(data);
        var { 
          video_ori, 
          title, 
          digunakan,
          cover,
          author_profile
        } = res.result
        conn.sendFile(m.chat, video_ori, 'capcut.mp4', `Title: ${title}\nDigunakan: ${digunakan}\nThumbnail: ${cover}\nProfile: ${author_profile}`, m);
      });
    }).on('error', error => {
      console.log(error);
      throw error.message
    });
  } catch (e) {
    console.log(e)
    throw `Terjadi Kesalahan!`
  }
}

handler.help= handler.command = ['capcut','cc','capcutdl','ccdl'];
handler.tags = ['downloader'];
handler.limit = false;
handler.group = false;
