import fs from 'fs';
import fetch from 'node-fetch';

let handler = async (m) => {
    let motivasi = pickRandom(global.motivasi);
    await conn.reply(m.chat, motivasi, 0, {
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                mediaUrl: '',
                mediaType: 2,
                title: 'Ｍｏｔｉｖａｓｉ',
                body: 'Dibaca Ya Kak',
                sourceUrl: sgc,
                thumbnail: fs.readFileSync('./src/fotonya.jpg')
            }
        }
    });
};

handler.help = ['motivasi'];
handler.tags = ['quotes'];
handler.command = /^(motivasi)$/i;
handler.limit = true;

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

global.motivasi = [
    "Jangan bicara, beritindak saja. Jangan katakan, tunjukkan saja. Jangan janni, buktikan saja.",
    "Jangan pernah berhenti melakuakan yang terbaik hanya karena seorang tidak memberi anda penghargaan.",
    "Bekerja saat merekam tidur. Belajar saat merekam berpestasi. Hemat semantara merekam menghabiskan. Hiduplah seperti mimpi merekam.",
    "Kunci sukses adalah memusatkan pikiran sadar kita pada hal-hal yang kita inginkan, bukan hal-hal yang kita takutkan.",
    "Jangan takut gagal. Ketakutan berada di tempat yang sama tahun depan seperti Anda berada sekarang.",
    "Jalan menuju sukses dan jalan menuju kegagalan hampir sama. Yang membedakan adalah tindakan kita.",
    "Sukses adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.",
    "Jika Anda tidak dapat mengatasi stres, Anda tidak akan mengendalikan kesuksesan.",
    "Berusaha keras merintangi tidur ketika berusaha keras tidak berfungsi, berusaha keras merintangi kesuksesan.",
    "Kerja keras mengalahkan bakat ketika bakat tidak bekerja keras.",
    "Ingatlah bahwa pelajaran terbesar dalam hidup sering kali datang dari pengalaman buruk.",
    "Ketekunan adalah kuncinya. 90% dari kesuksesan adalah menjaga diri tetap melangkah.",
    "Jangan habiskan waktumu meratapi kegagalan, segera bangkitkan semangatmu dan cobalah lagi.",
    "Kesempatan hanya datang sekali, tapi jika Anda bekerja keras, kesempatan itu akan datang kembali.",
    "Jika Anda ingin mencapai sesuatu yang belum pernah Anda capai, Anda harus melakukan sesuatu yang belum pernah Anda lakukan.",
    "Hidup bukan tentang mengalahkan orang lain. Itu tentang melawan diri Anda sendiri dan menjadi lebih baik setiap hari.",
    "Jika Anda tidak tahu apa yang Anda lakukan, berlari menghasilkan hasil yang lebih cepat daripada berjalan tidak tahu apa yang Anda lakukan.",
    "Kegagalan adalah kesempatan lain untuk memulai dengan lebih cerdas.",
    "Jangan meratapi masa lalu, jadikan itu pelajaran untuk masa depan.",
    "Setiap kegagalan adalah langkah mendekati kesuksesan berikutnya.",
    "Keberhasilan bukanlah akhir, kegagalan bukanlah fatal: yang penting adalah keberanian untuk terus maju.",
];
