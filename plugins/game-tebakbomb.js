const handler = async (m, { conn }) => {
    const bombEmoji = '乂  B O M B';
    const numbers = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
    const shuffledNumbers = shuffleArray(numbers);
    const correctNumber = Math.floor(Math.random() * 9);

    const message = `${bombEmoji}\n\nKirim angka 1-9 untuk membuka 9 kotak nomor di bawah ini:\n\n${shuffledNumbers[0]}${shuffledNumbers[1]}${shuffledNumbers[2]}\n${shuffledNumbers[3]}${shuffledNumbers[4]}${shuffledNumbers[5]}\n${shuffledNumbers[6]}${shuffledNumbers[7]}${shuffledNumbers[8]}`;
    const prompt = await conn.send2Button(m.chat, message, 'Batal', 'batal', '🕒 Timeout', 'timeout', m);

    try {
        const response = await conn.waitButton(prompt.key, 180000); // Waktu timeout diubah menjadi 3 menit (180000 ms)

        if (response === 'timeout') {
            await conn.reply(m.chat, 'Waktu habis! Coba lagi nanti.', m);
        } else {
            const chosenNumber = parseInt(response);

            if (chosenNumber === (correctNumber + 1)) {
                shuffledNumbers[correctNumber] = '✅'; // Emoji centang
                const updatedMessage = `${bombEmoji}\n\nKamu menemukan angka yang benar!\n\n${shuffledNumbers[0]}${shuffledNumbers[1]}${shuffledNumbers[2]}\n${shuffledNumbers[3]}${shuffledNumbers[4]}${shuffledNumbers[5]}\n${shuffledNumbers[6]}${shuffledNumbers[7]}${shuffledNumbers[8]}`;
                await conn.reply(m.chat, updatedMessage, m);
            } else {
                shuffledNumbers[chosenNumber - 1] = '💥'; // Emoji bom
                const updatedMessage = `${bombEmoji}\n\nSayang sekali, kamu mendapatkan bom! Point/exp dikurangkan.\n\n${shuffledNumbers[0]}${shuffledNumbers[1]}${shuffledNumbers[2]}\n${shuffledNumbers[3]}${shuffledNumbers[4]}${shuffledNumbers[5]}\n${shuffledNumbers[6]}${shuffledNumbers[7]}${shuffledNumbers[8]}`;
                await conn.reply(m.chat, updatedMessage, m);
            }
        }
    } catch (err) {
        await conn.reply(m.chat, 'Waktu habis! Coba lagi nanti.', m);
    }
};

handler.help = ['tebakbom'];
handler.tags = ['fun'];
handler.command = /^tebakbom$/i;

export default handler;

function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

