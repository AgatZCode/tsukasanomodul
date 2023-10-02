import yts from 'yt-search';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed';

const limit = 320;
const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Masukkan judul lagu\n\n📌Contoh *${usedPrefix + command}* whatever`;
  m.reply(wait)
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw 'Tidak Ditemukan'
  let { title, thumbnail, timestamp, views, ago, url } = vid

  let captvid = `╭──── 〔 𝗬 𝗢 𝗨 𝗧 𝗨 𝗕 𝗘 〕
• 𝗝𝘂𝗱𝘂𝗹: ${title}

• 𝗗𝘂𝗿𝗮𝘀𝗶: ${timestamp}
• 𝗩𝗶𝗲𝘄𝘀: ${views}
• 𝗨𝗽𝗹𝗼𝗮𝗱: ${ago}
• 𝗟𝗶𝗻𝗸: ${url}

⏳𝗠𝘂𝘀𝗶𝗸 𝗱𝗮𝗹𝗮𝗺 𝗽𝗲𝗻𝗴𝗶𝗿𝗶𝗺𝗮𝗻,
𝗺𝗼𝗵𝗼𝗻 𝘁𝘂𝗻𝗴𝗴𝘂 𝗵𝗶𝗻𝗴𝗴𝗮 𝘀𝗲𝗹𝗲𝘀𝗮𝗶.
jika masih tidak muncul, diharapkan gunakan .ytmp3.
╰────────⬣`
conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid }, m)
const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data
      }
    }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^play?$/i

handler.exp = 0
handler.limit = true
handler.register = false

export default handler
