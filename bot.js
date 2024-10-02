// const { Client, LocalAuth } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

// const client = new Client({
//     authStrategy: new LocalAuth(),
//     puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
// });

// // Daftar anggota berdasarkan kategori
// const members = {
//     acara: ['6281367804389@c.us', '6285778930438@c.us','6285695282212@c.us','6281316284369@c.us','6285782122188@c.us','6281286652868@c.us'], 
//     hr: ['6281293806985@c.us','6281774877990@c.us','6281384019384@c.us','6281289220799@c.us'], 
//     sosmed: ['6281295295346@c.us','6281285433118@c.us','6285888267358@c.us','6285156352298@c.us','6281387961257@c.us'], 
//     inbuk: ['6283117096043@c.us','6288293856283@c.us','6282337149575@c.us','6283115519389@c.us','6281263888943@c.us','6289602944221@c.us','6285888267358@c.us'], 
// };

// client.on('qr', (qr) => {
//     // Generate and scan this QR code with your phone
//     qrcode.generate(qr, { small: true });
// });

// client.on('ready', () => {
//     console.log('Bot is ready!');
// });

// // Event handler untuk menerima pesan
// client.on('message', async (message) => {
//     console.log('Received message:', message.body);

//     const command = message.body.split(' ')[0]; // Ambil perintah dari pesan
//     let membersToTag;

//     // Menentukan anggota yang akan ditag berdasarkan perintah
//     switch (command) {
//         case '!tagAcara':
//             membersToTag = members.acara;
//             break;
//         case '!tagSosmed':
//             membersToTag = members.sosmed;
//             break;
//         case '!tagHR':
//             membersToTag = members.hr;
//             break;
//         case '!tagInbuk':
//             membersToTag = members.inbuk;
//             break;
//         case '!tag':
//             const allMembers = Object.values(members).flat();
//             membersToTag = allMembers;
//             break;
//         case '!hello':
//             await message.reply('Hello!');
//             return; // Keluar dari fungsi setelah membalas
//         default:
//             return; // Jika perintah tidak dikenal, keluar dari fungsi
//     }

//     const chat = await message.getChat();
//     const mentions = membersToTag.map(participant => {
//         return { id: participant }; // Buat objek id untuk di-tag
//     });

//     const mentionList = mentions.map(mention => `@${mention.id.split('@')[0]}`).join(' '); // Ambil hanya nomor untuk pesan

//     try {
//         await chat.sendMessage(mentionList, {
//             mentions: membersToTag // Menggunakan daftar serialized untuk mentions
//         });
//         console.log(`Successfully tagged: ${mentionList}`);
//     } catch (error) {
//         console.error('Error in tagging:', error);
//     }
// });

// client.initialize();
maintence 