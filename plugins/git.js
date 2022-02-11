const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/uucLoM6.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*💖𝐑𝐄𝐁𝐄𝐋 𝑺𝑬𝑹 𝑩𝑶𝑻☜︎︎︎✌︎*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/918547062392

Tʜɪs ʙᴏᴛ Oᴡɴᴇʀ Nᴀᴍᴇ : ❤️🥰 ✌︎ʀᴇʙᴇʟ Sᴇʀ Bᴏᴛ ➪ ʀᴇʙᴇʟ»:-Jᴀsɪʟ ᴍᴜʜᴀᴍᴍᴇᴅ

ʀᴇʙᴇʟ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk

Gɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/Ajx-Abu/Soul-Rebel

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/Ajx-Abu/Soul-Rebel/tree/master/uploads

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/Ajx-Abu/Soul-Rebel/tree/master/sticker

Cʜᴀɴɴᴇʟ : https://youtube.com/channel/UCWroqii8PORgNBdZO5MG6Fw 

💝ʀᴇʙᴇʟ Sᴇʀ Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ ʀᴇʙᴇʟ Sᴇʀ 💝
`}) 

}));
