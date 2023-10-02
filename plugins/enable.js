import { readFile, writeFile } from 'fs/promises';

// Fungsi untuk membaca pengaturan dari berkas JSON
async function readSettings() {
  try {
    const data = await readFile('readenablesettings.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading settings:', error);
    return {};
  }
}

// Fungsi untuk menyimpan pengaturan ke dalam berkas JSON
async function saveSettings(settings) {
  try {
    await writeFile('readenablesettings.json', JSON.stringify(settings, null, 2), 'utf8');
    console.log('Settings saved.');
  } catch (error) {
    console.error('Error saving settings:', error);
  }
}

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command);
  let chat = global.db.data.chats[m.chat];
  let user = global.db.data.users[m.sender];
  let bot = global.db.data.settings[conn.user.jid] || {};
  let type = (args[0] || '').toLowerCase();
  let isAll = false, isUser = false;
  let chatSettings = await readSettings();

  let currentValue; // Menyimpan nilai status sebelumnya
  switch (type) {
    case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      currentValue = chat.nsfw;
      chat.nsfw = currentValue !== isEnable ? isEnable : currentValue;
      break;
   // ...
case 'welcome':
  if (!m.isGroup) {
    if (!isOwner) {
      global.dfail('group', m, conn);
      throw false;
    }
  } else if (!isAdmin) {
    global.dfail('admin', m, conn);
    throw false;
  }
  chatSettings.welcome = isEnable;
  break;
case 'detect':
  if (!m.isGroup) {
    if (!isOwner) {
      global.dfail('group', m, conn);
      throw false;
    }
  } else if (!isAdmin) {
    global.dfail('admin', m, conn);
    throw false;
  }
  chatSettings.detect = isEnable;
  break;
case 'delete':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.delete = isEnable;
  break;
case 'clear':
  isAll = true;
  if (!isOwner) {
    global.dfail('owner', m, conn);
    throw false;
  }
  bot.clear = isEnable;
  break;
case 'viewonce':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.viewonce = isEnable;
  break;
case 'desc':
  if (!m.isGroup) {
    if (!isOwner) {
      global.dfail('group', m, conn);
      throw false;
    }
  } else if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  chatSettings.descUpdate = isEnable;
  break;
case 'antidelete':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antidelete = isEnable;
  break;
case 'autodelvn':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.autodelvn = isEnable;
  break;
case 'document':
  chatSettings.useDocument = isEnable;
  break;
case 'public':
  isAll = true;
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  global.opts['self'] = !isEnable;
  break;
case 'bcjoin':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.bcjoin = isEnable;
  break;
case 'antilink':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antilink = isEnable;
  break;
case 'antifoto':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antifoto = isEnable;
  break;
case 'antilinkall':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antilinkall = isEnable;
  break;
case 'antivideo':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antivideo = isEnable;
  break;
case 'antiaudio':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antiaudio = isEnable;
  break;
case 'antisticker':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antisticker = isEnable;
  break;
case 'antibot':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antibot = isEnable;
  break;
case 'chatbot':
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  chatSettings.chatbot = isEnable;
  break;
case 'autopresence':
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  chatSettings.autoPesence = isEnable;
  break;
case 'autoreply':
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  chatSettings.autoReply = isEnable;
  break;
      case 'autosticker':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoSticker = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chatSettings.antiSticker = isEnable
      break
case 'autojoin':
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  chatSettings.autoJoin = isEnable;
  break;
case 'autoupnews':
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  chatSettings.updateAnimeNews = isEnable;
  break;
case 'autoupnime':
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  chatSettings.updateAnime = isEnable;
  break;
case 'toxic':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antiToxic = !isEnable;
  break;
case 'antitoxic':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antiToxic = isEnable;
  break;
case 'antisatir':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antiSatir = isEnable;
  break;
case 'antispam':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antiSpam = isEnable;
  break;
case 'anticall':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }
  }
  chatSettings.antiCall = isEnable;
  break;
case 'autolevelup':
  isUser = true;
  user.autolevelup = isEnable;
  break;
case 'mycontact':
case 'mycontacts':
case 'whitelistcontact':
case 'whitelistcontacts':
case 'whitelistmycontact':
case 'whitelistmycontacts':
  if (!isOwner) {
    global.dfail('owner', m, conn);
    throw false;
  }
  conn.callWhitelistMode = isEnable;
  break;
case 'restrict':
  isAll = true;
  if (!isOwner) {
    global.dfail('owner', m, conn);
    throw false;
  }
  bot.restrict = isEnable;
  break;
case 'nyimak':
  isAll = true;
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  global.opts['nyimak'] = isEnable;
  break;
case 'autoread':
  isAll = true;
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  global.opts['autoread'] = isEnable;
  break;
case 'pconly':
case 'privateonly':
  isAll = true;
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  global.opts['pconly'] = isEnable;
  break;
case 'gconly':
case 'grouponly':
  isAll = true;
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  global.opts['gconly'] = isEnable;
  break;
case 'getmsg':
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn);
  }
  chatSettings.getmsg = isEnable;
  break;
case 'swonly':
case 'statusonly':
  isAll = true;
  if (!isROwner) {
    global.dfail('rowner', m, conn);
    throw false;
  }
  global.opts['swonly'] = isEnable;
  break;
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
     if (!/[01]/.test(command)) return m.reply(`List Option :
     
- Welcome
- Delete
- Publik 
- Chatbot
- Antilink 
- AntiDelete
- Antitoxic 
- AntiSpam 
- AntiSticker 
- AntiVideo
- AntiFoto 
- AntiSatir
- Antilinkall
- AntiBot 
- AutoSticker
- AutoLevelup
- Detect 
- Restrict 
- PcOnly 
- GcOnly 
- Getmsg
- Autoread


Contoh Aktif: .on welcome
Untuk Mengaktifkan

Contoh Nonaktif: .off welcome
Untuk Menonaktifkan
`.trim())
      throw false
  }
  if (m.isGroup) {
    global.db.data.chats[m.chat] = chat;
  }
  global.db.data.users[m.sender] = user;
  global.db.data.settings[conn.user.jid] = bot;

  // Pesan yang akan dikirim sebagai respons
  let statusMessage = `
╭───═[Status]
│⩽⩾ Tipe: ${type}
│⩽⩾ Status: Sukses!
│⩽⩾ Opsi: ${isEnable ? 'Aktif' : 'Nonaktif'}
│⩽⩾ Untuk: ${isAll ? 'Bot Ini' : isUser ? '' : 'Chat Ini'}
┗─────────────···`;
  conn.reply(m.chat, statusMessage, m);
  await saveSettings(global.db.data);
};

handler.help = ['enable', 'disable']
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
