let handler = async (m, { conn, text }) => {
  if (!text) throw `Masukkan Teks Untuk Nama Baru Bot`;
  try {
    await conn.updateProfileName(text).catch((_) => _);
    conn.reply(m.chat, 'Berhasil Mengganti Nama Bot', m);
  } catch {
    throw 'Oops, terjadi kesalahan';
  }
};

handler.help = ['setnamebot <teks>'];
handler.tags = ['owner'];
handler.command = /^setnamebot$/i;
handler.owner = true;

export default handler;
