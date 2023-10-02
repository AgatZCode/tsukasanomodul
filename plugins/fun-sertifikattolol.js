//Agat
fetch from 'node-fetch'

let handler = async (m, { args }) => {
  try {
    let res = await fetch(`https://api.xyroinee.xyz/api/maker/tolol?text=${encodeURIComponent(args[0])}&apikey=XqInl6vuyZ`)
    let json = await res.json()
    
    if (json.status) m.reply(json.result)
    else throw `Error!\n\n${JSON.stringify(json)}`
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}

handler.help = ['.tolol <text>']
handler.tags = ['fun']
handler.command = /^\.tolol/i

export default handler
