const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👨‍💻_QUEEN-KYLIE-MD_MAIN_COMMAND_👨‍💻*

*_______🔎MAIN_COMMANDS💻_______*

*🤖 Command - .alive*

*💫 බොට් ඔන්ලයින්ද බැලීම*

*🤖 Command - .menu*

*💫 බොට්ගෙ විධාන මෙනුව ලබාගැනීම*

*🤖 command - .ping*

*👾බොට් සික්නල් පරික්ශාව*

*_______🔎_DOWNLOAD_COMMANDS💻_______*

*👨‍💻 Command - .song*

*👾 සිංදු බාගත කිරීම*

*👨‍💻 Command - .video*

*👾 වීඩියෝ බාගත කිරීම*

*👨‍💻 Command - .video*

*👾 වීඩියෝ බාගත කිරීම*

*👨‍💻 command - .fb*

*👾 facebook විඩියො බගත කිරීම*

*👨‍💻 command - .tt*

*👾 tik tok විඩියො බගත කිරිම*

*👨‍💻 command - .mediafire* 

*👾 mediafire බගත කිරිම*

*👨‍💻 command - .twitter*

*👾 twitter විඩියො බගත කිරිම*

*👨‍💻 command - .gdrive*

*👾 gdrive බාගත කිරිම*

*_______🔎AI_CHAT_COMMAND💻_______*

*💬 Command - .ai*

*👑 AI විධානයකි*

*_______🔎OWENER_COMMANDS💻_______*

*🤖 Command - .restart*

*🚀 Bot restart කරිමට*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/54ea059fdd4092fa78605.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})