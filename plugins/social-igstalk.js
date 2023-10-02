import fetch from 'node-fetch';

const handler = async (m, { args }) => {
  try {
    if (!args[0]) {
      return m.reply('Masukkan username akun Instagram yang ingin di-stalk.');
    }

    const username = args[0];
    const apiKey = 'Agatapi'; // Ganti dengan API key yang sesuai

    const apiUrl = `https://api.botcahx.live/api/stalk/ig?username=${username}&apikey=${apiKey}`;
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    if (jsonData.status) {
      const profile = jsonData.result;
      const message = `
        Username: ${profile.username}
        Nama: ${profile.fullName}
        Followers: ${profile.followers} (${profile.followersM})
        Following: ${profile.following} (${profile.followingM})
        Total Postingan: ${profile.postsCount} (${profile.postsCountM})
        Bio: ${profile.bio}
        Profile Pic: ${profile.profilePicHD}
      `;
      m.reply(message);
    } else {
      throw new Error(`Error!\n\n${JSON.stringify(jsonData)}`);
    }
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan dalam memproses permintaan.');
  }
};

handler.help = ['igstalk'];
handler.tags = ['social'];
handler.command = /^igstalk$/i;

export default handler;
