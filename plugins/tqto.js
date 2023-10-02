import fetch from 'node-fetch';

let handler = async function (m, { conn, text, usedPrefix }) {
  let m2 = `
≡ _Saya sangat berterima kasih kepada kalian semua_

┌─⊷ _*THANKS TO*_
➠ Nurutomo
➠ Agat
➠ Dylux
➠ Baileys 
➠ Whiskey
➠ Cherly
➠ LolHuman
➠ BETABOTZ
➠ BOTCAHX
➠ Hard Ofc
➠ GuhXSenpai
➠ Rehan
➠ Nayla
➠ penyedia restapi
➠ Penyedia Module
➠ All User
└──────────────
`;

  let pp = 'https://funianime.com/wp-content/uploads/2021/02/la-historia-fluye-por-nuestras-venas-Tonikawa-08-1.jpg';

  conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null); // Menghapus rpl dari sini
};

handler.customPrefix = /^(tqto|tq|.tqto|.tq)$/i;
handler.command = new RegExp;

export default handler;
