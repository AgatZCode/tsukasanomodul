import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(m, { conn }) {
  m.reply(wait)

  try {
    const response = await axios.get('https://twstalker.com/enakbangetz');
    const $ = cheerio.load(response.data);

    const videoSrcArray = $('video > source').map(function() {
      return $(this).attr('src');
    }).get();

    const randomVideoSrc = videoSrcArray[Math.floor(Math.random() * videoSrcArray.length)];
    const title = 'bkptwit';
    const caption = 'Enjoy this random video!';
    const mimeType = '';

    conn.sendFile(m.chat, randomVideoSrc, title, caption, m, false, { mimetype: mimeType });
  } catch (error) {
    console.error(error);
    throw 'Terjadi kesalahan saat mengunduh video.';
  }
}

handler.help = ['videobkp'];
handler.tags = ['downloader'];
handler.command = /^videobkp$/i;
handler.owner = false;
handler.premium = true;
handler.group = false;
handler.private = false;
