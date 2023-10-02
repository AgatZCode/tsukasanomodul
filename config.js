//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285811523745', 'AgatZ', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285811523745'//Ganti
global.packname = 'AgatZ'
global.author = 'AgatZ'
global.namebot = 'Tsukasa-BOT'
global.wm = '© Tsukasa-BOT BY AgatZ'
global.stickpack = '20-05-2022'
global.stickauth = 'Tsukasa-BOT'
// Link Sosmed
global.sig = 'https://instagram.com/agatzdev.js'
global.sgh = 'https://github.com/AgatZCode'
global.sgc = 'https://instagram.com/agatzdev.j'
// Donasi
global.psaweria = 'https://trakteer.id/AgatZ'
global.ptrakterr = 'https://trakteer.id/AgatZ'
global.povo = '083121562064'
// Info Wait
global.wait = 'Tunggu yaaaaa...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lolhuman = '4b884384e3773477bd9166ba'
global.btc = 'Agatapi'
global.xyro = 'FUaM5iNCwg'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    fgmods: "https://api-fgmods.ddns.net",
    btc: "https:/api.botcahx.live",
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api-fgmods.ddns.net": "fg-dylux",
    "https:/api.botcahx.live": "Agatapi",
    "https://api.xyroinee.xyz": "XqInl6vuyZ",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})