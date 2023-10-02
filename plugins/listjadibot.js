export async function handler(m, { usedPrefix }) {
  const users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])];
  const mainBotLink = `https://wa.me/${global.conn.user.jid.split('@')[0]}?text=${usedPrefix}menu (${global.conn.user.name})`;
  const userBotLinks = users.map(v => `https://wa.me/${v.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}menu (${v.name})`).join('\n');
  
  const replyMessage = `🌟 *Bot Utama* \n\n• ${mainBotLink} \n\n *🤖JadiBot* \n\n${userBotLinks}`;
  
  m.reply(replyMessage);
}

handler.command = handler.help = ['listjadibot'];
handler.tags = ['owner'];

export default handler;

