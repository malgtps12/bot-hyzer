/**
   * Create By Adan
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const request = require('request');
const hxz = require("hxz-api");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const {color } = require('./lib/color')
const maker = require('mumaker')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { igDL } = require('./lib/igdl')
const { Tiktokdl, tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")

//Thumb
modelmenu = 'location'
pref = 1
let kahfz = fs.readFileSync('./media/Lycho.jpg')
let btn = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rulesë',
                                    id: 'rules'
                                }
                            }]
//ADD DATABASE SATU PERSATU
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const ban = JSON.parse(fs.readFileSync('./database/ban.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./src/autostickpc.json'))
// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
	
module.exports = hisoka = async (hisoka, m, chatUpdate, store, namabot) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[¬∞‚Ä¢œÄ√∑√ó¬∂‚àÜ¬£¬¢‚Ç¨¬•¬Æ‚Ñ¢+‚úì_=|~!?@#$%^&.¬©^]/gi.test(body) ? body.match(/^[¬∞‚Ä¢œÄ√∑√ó¬∂‚àÜ¬£¬¢‚Ç¨¬•¬Æ‚Ñ¢+‚úì_=|~!?@#$%^&.¬©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isAntiVirtex = m.isGroup ? antivirtex.includes(m.chat) : false 
        const isAutoSticker = m.isGroup ? autostick.includes(m.chat) : false
        const isAutoStick = _autostick.includes(m.chat)
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const groupMembers = m.isGroup ? groupMetadata.participants : ''
	
	//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': fs.readFileSync('./media/Lycho.jpg')
}
}
}
	
	//Ini Remplay  
const replay = async(teks) => {
		try {
                    ppuser = await hisoka.profilePictureUrl(m.sender, 'image')
                } catch (err) {
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
               ppumser = await getBuffer(ppuser)
               hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Hallo ${pushname}`,"body": `WcB`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppumser, "sourceUrl": `https://chat.whatsapp.com/DDHte4Qu8Q53rB8nESH1EA`}}}, { quoted: m})
        }     
        
        
        const reply = (teks) => {
            hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Hallo ${pushname}`,"body": `Huuuuu`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Lycho.jpg`),"sourceUrl": `https://chat.whatsapp.com/DDHte4Qu8Q53rB8nESH1EA`}}}, { quoted: m})
        }
	
        // FAKE 
        
       const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": `Halo ${pushname} `, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `Halo ${pushname} `, 'jpegThumbnail': fs.readFileSync('./media/Lycho.jpg')}}}


        //TEXT BUMTON
       // TextTeplate 
        const textTemplateButtons = (from, text, footer, buttons) => {
            return hisoka.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        }
        
        // SEEND FILE URL
const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return hisoka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: fgif})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return hisoka.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: fgif})
            } else if(mime.split("/")[0] === "video"){
                return hisoka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: fgif})
            } else if(mime.split("/")[0] === "audio"){
                return hisoka.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return hisoka.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
       // Seend Sticker Jadi Lebih Ezz
const sendSticker = async(to, file) => {
			ran = getRandom('.webp')
							require('./lib/exif.js').createExif(namabot, '')
		await ffmpeg(`${file}`)
									.input(file)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(file)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: adadeh})
											fs.unlinkSync(file)	
											fs.unlinkSync(`./src/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)						
						}
const sendStickerUrl = async(to, url) => {
            console.log(chalk.black(chalk.bgWhite('[ Otw Build ]')))
              var names = getRandom('.webp')
              var namea = getRandom('.png')
              var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
              };
              download(url, namea, async function () {
                let filess = namea
                let asw = names
                require('./lib/exif.js')
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
                let media = fs.readFileSync(asw)
                hisoka.sendMessage(to, {sticker:media} )
                console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
                });
                });
              });
            }
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
                }
                let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('autoread' in setting)) setting.autoread = false
		if (!('autoketik' in setting)) setting.autoketik = false
		if (!('autorecord' in setting)) setting.autoketik = false
		if (!('autoonline' in setting)) setting.autoonline = false
		if (!('autooffline' in setting)) setting.autooffline = false
	    } else global.db.settings[botNumber] = {
		status: 0,
		autobio: false,
		autoread: false,
		autoketik: false,
		autorecord: false,
		autoonline: false,
		autooffline: false,
	    }
        } catch (err) {
            console.error(err)
        }
	    

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }
      
       // Detect User Banned
        if (ban[m.sender] && isCmd) {
            await hisoka.sendText(m.chat, `Maaf @${m.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`, m, { contextInfo: { mentionedJid: [m.sender] }})
            return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//Level Nyah Blom Jadi, Jadi gw Pasang Jika Lu tau Cara Fix nya oke!! Next Jika Yang Gak Tau Next Vidio Gua Tmbahin 
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
	  }
	
	//AUTO UPDET BIO ( RUNTIME BIO )
	let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)

	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`Hello I am a botüëãüèª || üèÉRuntime: ${runtime(process.uptime())} || üïåTanggal Islam: ${dateIslamic} || User : BlackTwin-WcB - MD`)
		setting.status = new Date() * 1
	    }
	}
	const isQuotedImages = m.chat === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedStickers = m.chat === 'extendedTextMessage' && content.includes('stickerMessage')
	
	if (m.isGroup && isAutoSticker) {
			if (isMedia) {
							const encmedia = isQuotedImages ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
							const media = await hisoka.downloadAndSaveMediaMessage(quoted)
							sendSticker(m.chat, media)
			}
		}
		if (!m.isGroup && isAutoStick) {
			if (isMedia) {
							const encmedia = isQuotedImages ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
							const media = await hisoka.downloadAndSaveMediaMessage(quoted)
							 sendSticker(m.chat, media)							
			}
		}

	
	//Auto Read
	if (db.settings[botNumber].autoread) {
		hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
}
//Auto Ketik
if (db.settings[botNumber].autoketik) {
	hisoka.sendPresenceUpdate('composing', m.chat)
	}
	//Antilink Nya
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               reply('*L I N K  T E R D E T E K S I*\nWahh Nakal sekaliii, Grup ini Sudah dipasang Antilink yak..,\nGood Bye Untukmu..üëãüèª')
               let sianj = m.sender
               await hisoka.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
          }
	  }
	if (isAntiVirtex) 
    if (budy.includes('') || budy.includes('') || budy.includes('')) {
     if (!m.key.fromMe) {
           reply('*VIRTEX T E R D E T E K S I*\nWahh Nakal sekaliii, Grup ini Sudah dipasang Anti Virus yak..,\nGood Bye Untukmu..')
                let sianj = m.sender
               await hisoka.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`„Äå ANTI LINK WA.ME „Äç\n\nKamu terdeteksi mengirim link wa.me, maaf kamu akan di kick !`)
          if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link wa.me ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

	// Mute Chat
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
	    
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: fgif.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `üéÆ Tebak Lagu üéÆ\n\nJawaban Benar üéâ\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`üéÆ Kuis Matematika  üéÆ\n\nJawaban Benar üéâ\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `üéÆ Tebak Gambar üéÆ\n\nJawaban Benar üéâ\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `üéÆ Tebak Kata üéÆ\n\nJawaban Benar üéâ\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `üéÆ Cak Lontong üéÆ\n\nJawaban Benar üéâ\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `üéÆ Tebak Kalimat üéÆ\n\nJawaban Benar üéâ\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `üéÆ Tebak Lirik üéÆ\n\nJawaban Benar üéâ\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `üéÆ Tebak Tebakan üéÆ\n\nJawaban Benar üéâ\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '‚ùå',
	    O: '‚≠ï',
	    1: '1Ô∏è‚É£',
	    2: '2Ô∏è‚É£',
	    3: '3Ô∏è‚É£',
	    4: '4Ô∏è‚É£',
	    5: '5Ô∏è‚É£',
	    6: '6Ô∏è‚É£',
	    7: '7Ô∏è‚É£',
	    8: '8Ô∏è‚É£',
	    9: '9Ô∏è‚É£',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['‚ùå', '‚≠ï'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
‚ùå: @${room.game.playerX.split('@')[0]}
‚≠ï: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatuüóø\nKertasüìÑ\nGunting‚úÇÔ∏è`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatuüóø\nKertasüìÑ\nGunting‚úÇÔ∏è`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
        	
        
     //   ============== CASE NYA =================
        
        
        
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '‚ùå',
            O: '‚≠ï',
            1: '1Ô∏è‚É£',
            2: '2Ô∏è‚É£',
            3: '3Ô∏è‚É£',
            4: '4Ô∏è‚É£',
            5: '5Ô∏è‚É£',
            6: '6Ô∏è‚É£',
            7: '7Ô∏è‚É£',
            8: '8Ô∏è‚É£',
            9: '9Ô∏è‚É£',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            reply(`Session TicTacToeüéÆ tidak ada`)
            } else throw '?'
            } catch (e) {
            reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1eacce44a1010f38459ab.jpg' }, caption: `*Hai Kak ${m.pushName} Wcb lagi mengadakan diskon besar-besaran nih*\n\nHarga super hemat ( diskon 90% )
*ï Rp35.000* = Join to group 1x permanent + Premium 1 orang 1years ( bergaransi setahun )
*ï Rp45.000* = Join to group 2x permanent + Premium 2 orang 1years ( bergaransi setahun )
*ï Rp55.000* = Join to group 5x permanent + permanent + Premium 3 orang 1,5years ( bergaransi setahun )
*ï Rp105.000* = Join to group 10x permanent + Premium 10 orang 4years ( bergaransi 5 tahun )

note:
jika kmu punya group pngn ganti group jngn takut karna masih bisa 10x permintaan atau ketik owner

==========================
Harga normal 
*ï Rp13.000* = Group via E-Wallet 1month
*ï Rp20.000* = via pulsa 1month ( 3days garansi expired )

Premium
*ï Rp8.000* = per user  7days
*ï Rp15.000* = per user 1month ( bergaransi 1month )


*INFORMATION*
Bot aktif 24/7 jam di jamin bergaransi uang kembali 10% jika bot ga aktif dalam 24/7 jam 

jika bot ada maintenance atau update owner akan segera beritahu user\n\nFor more details, you can chat with the owner\nhttps://wa.me/6289652903288 (Owner)` }, { quoted: m })
            }
            break
            case 'sc': {
                reply(`Hai Kak ${pushname} Sc ini Bukan konsumsi masal ya jika mau hubungi owner dibawah ini
Script : wa.me/6289652903288`)
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `üë´Jodoh mu adalah

@${me.split('@')[0]} ‚ù§Ô∏è @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadianüíñ Jangan lupa pajak jadiannyaüê§

@${orang.split('@')[0]} ‚ù§Ô∏è @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
case 'getidgc':
if (!m.isGroup) return reply(mess.group)
reply (`${m.chat}`)
break
    

case 'hu':
case 'culik':
if (!m.isGroup) return reply(mess.group)
         if (!isCreator) return reply(mess.owner)
  if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
  let pantek = []
  for (let i of groupMembers) {
      pantek.push(i.jid)
  }
  await hisoka.groupParticipantsUpdate(m.chat, [pantek], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 // hisoka.groupAdd(q, pantek)
  break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'shutdown':
 if (!isCreator) return 
reply(`Bye...`)
 await sleep(3000)
 process.exit()
 break
 case 'restart':
 if (!isCreator) return 
reply(mess.wait)
 exec(`node index`)
 reply('_Restarting Bot Success_')
 break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'ban': case 'banned': {
			if (!isCreator) throw mess.owner
			let who
			if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = true
			m.reply('Sukse Membanned '+who)
		}
		break
		case 'unban': case 'unbanned': {
			if (!isCreator) throw mess.owner
			let who
			if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = false
			m.reply('Sukses Unban '+who)
		}
		break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case 'grupinfo':
                if (!m.isGroup) throw mess.group
try{
 var pic = await hisoka.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P I N F O*

*System* 
AntiLink : *${isAntiLink ? 'Aktif‚úÖ' : 'Mati‚ùå'}*
AntiVirtex : *${isAntiVirtex ? 'Aktif' : 'Mati'}*
Mute : *${db.chats[m.chat].mute ? 'Aktif‚úÖ' : 'Mati‚ùå'}* 
Anti wa.me : *${db.chats[m.chat].wame ? 'Aktif‚úÖ' : 'Mati‚ùå'}*

*Name :* ${groupName}
*ID Grup :* ${m.chat}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Owner Grup :* @${groupMetadata.owner.split('@')[0]}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${participants.length}
*Desc :* 
${groupMetadata.desc}`
ds = await getBuffer(pic)
hisoka.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: fgif})
break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `‚ïê‚ïê‚ú™„Äò *üë• Tag All* „Äô‚ú™‚ïê‚ïê
 
 ‚û≤ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `‚îÉ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `‚îÉ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*„Äå VOTE „Äç*

*Alasan:* ${vote[m.chat][0]}

‚îå„Äî UPVOTE „Äï
 
‚îú Total: ${vote[m.chat][1].length}

 
‚îî‚îÄ‚îÄ‚îÄ‚îÄ

‚îå„Äî DEVOTE „Äï
 
‚îú Total: ${vote[m.chat][2].length}

 
‚îî‚îÄ‚îÄ‚îÄ‚îÄ

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ùöÑùôøùöÖùôæùöÉùô¥'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'ùô≥ùô¥ùöÖùôæùöÉùô¥'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*„Äå VOTE „Äç*

*Alasan:* ${vote[m.chat][0]}

‚îå„Äî UPVOTE „Äï
 
‚îú Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `‚îú ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
‚îî‚îÄ‚îÄ‚îÄ‚îÄ

‚îå„Äî DEVOTE „Äï
 
‚îú Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `‚îú ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
‚îî‚îÄ‚îÄ‚îÄ‚îÄ

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ùöÑùôøùöÖùôæùöÉùô¥'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'ùô≥ùô¥ùöÖùôæùöÉùô¥'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*„Äå VOTE „Äç*

*Alasan:* ${vote[m.chat][0]}

‚îå„Äî UPVOTE „Äï
 
‚îú Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `‚îú ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
‚îî‚îÄ‚îÄ‚îÄ‚îÄ

‚îå„Äî DEVOTE „Äï
 
‚îú Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `‚îú ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
‚îî‚îÄ‚îÄ‚îÄ‚îÄ

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ùöÑùôøùöÖùôæùöÉùô¥'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'ùô≥ùô¥ùöÖùôæùöÉùô¥'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*„Äå VOTE „Äç*

*Alasan:* ${vote[m.chat][0]}

‚îå„Äî UPVOTE „Äï
 
‚îú Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `‚îú ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
‚îî‚îÄ‚îÄ‚îÄ‚îÄ

‚îå„Äî DEVOTE „Äï
 
‚îú Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `‚îú ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
‚îî‚îÄ‚îÄ‚îÄ‚îÄ

*${prefix}hapusvote* - untuk menghapus vote


¬©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

            }
            }
            break
case 'antilink':
	        if (!m.isGroup) return reply(`Khusus Grup`)
			if (!isAdmins) return reply(`Khusus Admin Om`)
			if (!isBotAdmins) return reply(`Jdiin Admin Dlu Bjir`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						hisoka.sendMessage(m.chat,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					case 'antivirtex':
	        if (!m.isGroup) return reply(`Khusus Grup`)
			if (!isAdmins) return reply(`Khusus Admin Om`)
			if (!isBotAdmins) return reply(`Jdiin Admin Dlu Bjir`)
					if (args[0] === 'on') {
						if (isAntiVirtex) return reply('Sudah Aktif Kak')
						antivirtex.push(m.chat)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('Sukses mengaktifkan fitur antivirtex')
						hisoka.sendMessage(m.chat,  {text: `ALLERT!!! Group ini sudah di pasang anti virtex\nJika Kamu Melanggar Maka Akan Saya Tendang`})
					} else if (args[0] === 'off') {
						if (!isAntiVirtex) return reply('Sudah Mati Kak')
						var inii = antivirtex.indexOf(m.chat)
						antivirtex.splice(inii, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('Sukses menonaktifkan fitur anti virtex ')
					} else if (!q){
 reply(`Pilih antivirtex On / Off `)
					}
					break 
					case 'antiwame': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Aktif !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, hisoka.user.name, m)
                }
             }
             break
					   case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].mute = true
                reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].mute = false
                reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
             }
             break
case 'autobio': {
                if (!isCreator) throw mess.owner
                if (args[0] === "on") {
                if (db.settings[botNumber].autobio) return reply(`Sudah Aktif Sebelumnya`)
                db.settings[botNumber].autobio = true
                reply(`Sukses`)
                } else if (args[0] === "off") {
                if (!db.settings[botNumber].autobio) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.settings[botNumber].autobio = false
                replay(`Sukses`)
                } else {
                 let buttons = [
                        { buttonId: 'autobio on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'autobio off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Auto Bio`, hisoka.user.name, m)
                }
             }
             break
case 'autosticker': {
	            if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoSticker) return reply('Udah lu nyalain ')
						autostick.push(m.chat)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autostick))
						reply('Success Enable Auto sticker!')
					} else if (args[0] == 'off') {
						autostick.splice(m.chat, 1)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autostick))
						reply('Success Disable Auto sticker!')
					} else {
						reply(`  on  , off  \n: ${prefix}${command} on`)
					}
					}
					break
case 'autostickerpc': {
                    if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoStick) return reply('Udah lu nyalain pantek:v')
						_autostick.push(m.chat)
						fs.writeFileSync('./src/autostickpc.json', JSON.stringify(_autostick))
						reply('Success Enable Auto sticker!')
					} else if (args[0] == 'off') {
						_autostick.splice(m.chat, 1)
						fs.writeFileSync('./src/autostickpc.json', JSON.stringify(_autostick))
						reply('Success Disable Auto sticker!')
					} else {
						reply(`  on  , off  \n: ${prefix}${command} on`)
					}
					}
					break
case 'autoketik': {
                if (!isCreator) throw mess.owner
                if (args[0] === "on") {
                if (db.settings[botNumber].autoketik) return reply(`Sudah Aktif Sebelumnya`)
                db.settings[botNumber].autoketik = true
                reply(`Sukses`)
                } else if (args[0] === "off") {
                if (!db.settings[botNumber].autoketik) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.settings[botNumber].autoketik = false
                replay(`Sukses`)
                } else {
                 let buttons = [
                        { buttonId: 'autoketik on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'autoketik off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Auto Ketik`, hisoka.user.name, m)
                }
             }
             break
case 'autoread': {
                if (!isCreator) throw mess.owner
                if (args[0] === "on") {
                if (db.settings[botNumber].autoread) return reply(`Sudah Aktif Sebelumnya`)
                db.settings[botNumber].autoread = true
                reply(`Sukses`)
                } else if (args[0] === "off") {
                if (!db.settings[botNumber].autoread) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.settings[botNumber].autoread = false
                replay(`Sukses`)
                } else {
                 let buttons = [
                        { buttonId: 'autoread on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'autoread off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Auto Read`, hisoka.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script',
                                    url: 'wa.me/6289652903288'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Lycho.jpg')
                      let txt = `„Äå Broadcast Bot „Äç\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, fatihgans, btn)
                    }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
                if (!isCreator) throw mess.owner
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'COMMAND',
                                    id: 'menu'
                                }
                            }]
                    let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    hisoka.sendMessage(i, { sticker: { url: media } }, { quoted: fkontak })
                    } else if (/image/.test(mime)) {
                    let junn = `${text ? '\n\n' + text : ''}`
                    hisoka.send5ButImg(i, junn, `${global.footer}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `${text ? '\n\n' + text : ''}`
                    hisoka.send5Vid(i, junn, `${global.footer}`, buffer, butoon)
                    } else if (/audio/.test(mime)) {
                    hisoka.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : fvn })
                    } else {
                    reply(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script',
                                    url: 'http://wa.me/6289652903288'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      adangntng = fs.readFileSync('./media/bcall.jpg')
                      let txt = `${text}`
                      hisoka.send5Loc(yoi, txt, `${global.pengguna}`, adangntng, btn)
		}
		reply('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break
case 'bctext': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script',
                                    url: 'wa.me/6289652903288'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      let txt = `${text}`
                      textTemplateButtons(yoi, txt, `Broadcast Bot ${global.pengguna}`, btn)
		}
		reply('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break
            case 'infochat': {
                if (!m.quoted) reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `‚îÉ @${i.userJid.split('@')[0]}\n`
                    teks += ` ‚îó‚îÅ‚îÉ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ‚îÉ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `‚úÖ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `‚¨° *Nama :* ${nama}\n‚¨° *User :* @${i.split('@')[0]}\n‚¨° *Chat :* https://wa.me/${i.split('@')[0]}\n\n‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `‚úÖ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `‚¨° *Nama :* ${metadata.subject}\n‚¨° *Owner :* @${metadata.owner.split('@')[0]}\n‚¨° *ID :* ${metadata.id}\n‚¨° *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n‚¨° *Member :* ${metadata.participants.length}\n\n‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '‚îÉ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'ttp':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh #ttp ${pushname}`)
var anjay = `https://hadi-api.herokuapp.com/api/canvas/ttp?text=${text}`
sendStickerUrl(m.chat, anjay)
break
case 'smeme': {
 
            if (!isMedia) throw `Kirim Image/Balas Sticker dengan caption *${prefix + command} teks atas|teks bawah*`
            reply(mess.wait)
            let { UploadFileUgu } = require('./lib/uploader')
            let media = await hisoka.downloadAndSaveMediaMessage(quoted)
            let anu = await UploadFileUgu(media)
            let [atas, bawah] = text.split`|`
            sme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '„Ö§')}/${encodeURIComponent(bawah ? bawah : '„Ö§')}.png?background=${anu.url}`
            hisoka.sendImageAsSticker(m.chat, sme, m, { packname: global.packname, author: global.author })
            await fs.unlinkSync(media)
            }
            break
case 'memegen': case 'smeme2': {
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
m.reply(mess.wait)
arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
let abeb = await hisoka.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./lib/uploader')
let abe = await TelegraPh(abeb)
let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
let mengmeme = await hisoka.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(mengmeme)
}
break
case 'attp':
if (args.length < 1) return reply(`Teks Nya Mana Bruh?\nContoh #${command} kahfz`)
var kahfz = `https://hadi-api.herokuapp.com/api/canvas/attp?text=${text}`
let encmedia = await hisoka.sendVideoAsSticker(m.chat, kahfz, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            	replay(`Limit Anda Berkurang`)
            	if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
           // replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} üòÖ+ü§î`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'tomp3': case 'mp3': case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
           /* case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break*/
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                replay(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replay(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `ï No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUpload At : ${i.ago}\nAuthor : ${i.author.name}\nUrl : ${i.url}\n\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `‚îÉ *Title* : ${g.title}\n`
                teks += `‚îÉ *Description* : ${g.snippet}\n`
                teks += `‚îÉ *Link* : ${g.link}\n\nîÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------„Äå GIMAGE SEARCH „Äç-------*
ü§† *Query* : ${text}
üîó *Media Url* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
üïµÔ∏è Title : ${anu.title}
ü•Ä Ext : Search
üçÅ ID : ${anu.videoId}
üå∫ Duration : ${anu.timestamp}
üëÄ Viewers : ${anu.views}
üíå Upload At : ${anu.ago}
üó£Ô∏è Author : ${anu.author.name}
üßë‚Äçüíª Channel : ${anu.author.url}
üîé Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   hisoka.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code Vidio',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `ytmp3 ${anu.url} 128kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIdeo',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `‚îÉ Title : ${media.title}\n‚îÉ File Size : ${media.filesizeF}\n‚îÉ Url : ${isUrl(text)}\n‚îÉ Ext : MP3\n‚îÉ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `‚îÉ Title : ${media.title}\n‚îÉ File Size : ${media.filesizeF}\n‚îÉ Url : ${isUrl(text)}\n‚îÉ Ext : MP3\n‚îÉ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `‚îÉ Title : ${media.title}\n‚îÉ File Size : ${media.filesizeF}\n‚îÉ Url : ${isUrl(text)}\n‚îÉ Ext : MP3\n‚îÉ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `‚îÉ Title : ${media.title}\n‚îÉ File Size : ${media.filesizeF}\n‚îÉ Url : ${isUrl(text)}\n‚îÉ Ext : MP3\n‚îÉ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '‚îÉ Media Url : '+result }, { quoted: m })
            }
            break
                //anime
             case 'miku': {
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/kurr.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
             let buttonMessage = {
                    image: {url: random},
                    caption: `Wibu Mu Loeh Mas`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }) }
             break
             case 'hinata': {
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/hinata.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
             let buttonMessage = {
                    image: {url: random},
                    caption: `Wibu Mu Loeh Mas`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }) }
             break
             case 'elaina': {
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/elaina.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
             let buttonMessage = {
                    image: {url: random},
                    caption: `Wibu Mu Loeh Mas`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }) }
             break
             case 'asuna': {
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/asuna.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
             let buttonMessage = {
                    image: {url: random},
                    caption: `Wibu Mu Loeh Mas`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
             break
             case 'neko': {
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/neko.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
             let buttonMessage = {
                    image: {url: random},
                    caption: `Wibu Mu Loeh Mas`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }) }
             break
             case 'waifu': {
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/waifu.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
             let buttonMessage = {
                    image: {url: random},
                    caption: `Wibu Mu Loeh Mas`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }) }
             break
             case 'mikasa': {
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/mikasa.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
             let buttonMessage = {
                    image: {url: random},
                    caption: `Wibu Mu Loeh Mas`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }) }
             break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `‚òï Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
/*LOGO NYAAA !!!!
*/
case 'nuliskiri': {
                if (args.length < 1) return await reply(`Example: ${prefix + command} KahfzXy`)
                reply("Tunggu Sebentar, Sedang Proses....")
                kahfz = await getBuffer(`https://hardianto.xyz/api/nuliskiri?text=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Nulis ‚òï`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
                break
break
case 'nuliskanan': {
                if (args.length < 1) return await reply(`Example: ${prefix + command} KahfzXy`)
                reply("Tunggu Sebentar, Sedang Proses....")
                kahfz = await getBuffer(`https://hardianto.xyz/api/nuliskanan?text=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Nulis ‚òï`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'foliokiri': {
                if (args.length < 1) return await reply(`Example: ${prefix + command} KahfzXy`)
                reply("Tunggu Sebentar, Sedang Proses....")
                kahfz = await getBuffer(`https://hardianto.xyz/api/foliokiri?text=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Nulis ‚òï`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
                case 'foliokanan': {
                if (args.length < 1) return await reply(`Example: ${prefix + command} KahfzXy`)
                reply("Tunggu Sebentar, Sedang Proses....")
                kahfz = await getBuffer(`https://hardianto.xyz/api/foliokanan?text=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Nulis ‚òï`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'gura-logo': {
	replay(mess.wait)
	if (args.length < 1) return replay(`Masukan Nama!! Contoh\n ${prefix + command} kahfz`)
	kahfz = await getBuffer(`https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${text}`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Gura ‚òï`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'sadboy-logo': {
	replay(mess.wait)
	if (args.length < 1) return replay(`Masukan Nama!! Contoh\n ${prefix + command} kahfz Tod`)
  text1 = args[0]
  text2 = args[1]
	kahfz = await getBuffer(`https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${text1}&text2=${text2}`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Sadboy Logo ‚òï`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'logo1': {
	replay(mess.wait)
	if (args.length < 1) return replay(`Masukan Nama!! Contoh\n ${prefix + command} kahfz`)
	kahfz = await getBuffer(`https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${text}`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: ` Logo ‚òï`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
// RANDOM CECAN
case 'cecan': {
	anu = await getBuffer(`https://api.zacros.my.id/asupan/cecan `)
	let buttons = [
                    {buttonId: `cecan`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: anu,
                    caption: `Cecan ‚òï`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `‚îÉ Title : ${result.title}\n‚îÉ Category : ${result.type}\n‚îÉ Detail : ${result.source}\n‚îÉ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `‚îÉ Title : ${result.title}\n‚îÉ Source : ${result.source}\n‚îÉ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'meme': {
	buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')
	let buttons = [
                    {buttonId: `meme`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: buff ,
                    caption: `meme ${global.botnma}`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
	}
	break
case 'darkjoke': {
	buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=IkyOgiwara')
	let buttons = [
                    {buttonId: `darkjoke`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: buff ,
                    caption: `Dark Cuy`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
	}
	break
case 'ppcouple': case 'ppcp': {
	anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
buff1 = await getBuffer(anu.result.male)
buff2 = await getBuffer(anu.result.female)
let buttons = [
                    {buttonId: `ppcp`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                
let buttonMessage = {
                    image: buff1 ,
                    caption: `Cowok Nya`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
await sleep(1000)
let buttonMessagee = {
                    image: buff2 ,
                    caption: `Cwek Nya`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessagee, { quoted: m })
}
break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'quotes': {
                let anu = await fetchJson(`https://kahfz-api.herokuapp.com/api/quotes?apikey=KahfzXzy`)
                let buttons = [
                    {buttonId: `quotes`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `${anu.quotes}\n-${anu.author}-`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'bijak': {
                let anu = await fetchJson(`https://kahfz-api.herokuapp.com/api/bijak?apikey=KahfzXzy`)
                let buttons = [
                    {buttonId: `bijak`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `${anu.result}-`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'fakta': {
                let anu = await fetchJson(`https://kahfz-api.herokuapp.com/api/fakta?apikey=KahfzXzy`)
                let buttons = [
                    {buttonId: `fakta`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `${anu.result}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'motivasi': {
                let anu = await fetchJson(`https://kahfz-api.herokuapp.com/api/motivasi?apikey=KahfzXzy`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `${anu.result}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker': case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             	if (!text) throw `Example : ${prefix + command} adan`
             	m.reply(mess.wait)
             	let link
             	if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             	if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             	if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             	if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             	if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             	if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             	if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             	if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             	if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             	if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             	if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             	if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             	if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             	if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             	if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             	if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             	if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             	if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             	if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             	if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             	if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             	if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             	if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             	if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             	if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             	if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             	if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             	if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             	if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             	if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             	if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             	if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             	if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             	if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             	if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             	if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             	if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             	if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             	if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             	if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             	if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             	if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             	if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             	if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             	if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             	if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             	if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             	if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             	if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             	if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             	if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             	if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             	if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             	if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             	if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             	if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             	let anu = await maker.textpro(link, text)
                hisoka.sendMessage(m.chat, { image: { url: anu }, caption: 'Nih Gan' }, { quoted: m })
             }
             break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                replay(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                replay(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6289652903288`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nomor HP :* ${anu.message.nomer_hp}\n‚îÉ *Angka Shuzi :* ${anu.message.angka_shuzi}\n‚îÉ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n‚îÉ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Mimpi :* ${anu.message.mimpi}\n‚îÉ *Arti :* ${anu.message.arti}\n‚îÉ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama Anda :* ${anu.message.nama_anda.nama}\n‚îÉ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n‚îÉ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n‚îÉ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n‚îÉ *Hasil :* ${anu.message.result}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama Anda :* ${anu.message.nama_anda.nama}\n‚îÉ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n‚îÉ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n‚îÉ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n‚îÉ *Hasil :* ${anu.message.result}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama Suami :* ${anu.message.suami.nama}\n‚îÉ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n‚îÉ *Nama Istri :* ${anu.message.istri.nama}\n‚îÉ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n‚îÉ *Hasil :* ${anu.message.result}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama Anda :* ${anu.message.nama_anda.nama}\n‚îÉ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n‚îÉ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n‚îÉ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n‚îÉ *Sisi Positif :* ${anu.message.sisi_positif}\n‚îÉ *Sisi Negatif :* ${anu.message.sisi_negatif}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama :* ${anu.message.nama}\n‚îÉ *Arti :* ${anu.message.arti}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama :* ${anu.message.nama}\n‚îÉ *Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Life Path :* ${anu.message.life_path}\n‚îÉ *Destiny :* ${anu.message.destiny}\n‚îÉ *Destiny Desire :* ${anu.message.destiny_desire}\n‚îÉ *Personality :* ${anu.message.personality}\n‚îÉ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `‚îÉ *Nama Anda :* ${anu.message.nama_anda}\n‚îÉ *Nama Pasangan :* ${anu.message.nama_pasangan}\n‚îÉ *Sisi Positif :* ${anu.message.sisi_positif}\n‚îÉ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Tanggal Pernikahan :* ${anu.message.tanggal}\n‚îÉ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Lahir :* ${anu.message.hari_lahir}\n‚îÉ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Lahir :* ${anu.message.hari_lahir}\n‚îÉ *Rezeki :* ${anu.message.rejeki}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Lahir :* ${anu.message.hari_lahir}\n‚îÉ *Pekerjaan :* ${anu.message.pekerjaan}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Analisa :* ${anu.message.analisa}\n‚îÉ *Angka Akar :* ${anu.message.angka_akar}\n‚îÉ *Sifat :* ${anu.message.sifat}\n‚îÉ *Elemen :* ${anu.message.elemen}\n‚îÉ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Analisa :* ${anu.message.analisa}\n‚îÉ *Sektor :* ${anu.message.sektor}\n‚îÉ *Elemen :* ${anu.message.elemen}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `‚îÉ *Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Simbol Tarot :* ${anu.message.simbol_tarot}\n‚îÉ *Arti :* ${anu.message.arti}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama :* ${anu.message.nama}\n‚îÉ *Lahir :* ${anu.message.tahun_lahir}\n‚îÉ *Gender :* ${anu.message.jenis_kelamin}\n‚îÉ *Angka Kua :* ${anu.message.angka_kua}\n‚îÉ *Kelompok :* ${anu.message.kelompok}\n‚îÉ *Karakter :* ${anu.message.karakter}\n‚îÉ *Sektor Baik :* ${anu.message.sektor_baik}\n‚îÉ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Kala Tinantang :* ${anu.message.kala_tinantang}\n‚îÉ *Info :* ${anu.message.info}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Hasil :* ${anu.message.result}\n‚îÉ *Info :* ${anu.message.info}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Hari Lahir :* ${anu.message.hari_lahir}\n‚îÉ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Hari Naas :* ${anu.message.hari_naas}\n‚îÉ *Info :* ${anu.message.catatan}\n‚îÉ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Hari Lahir :* ${anu.message.hari_lahir}\n‚îÉ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Hari Lahir :* ${anu.message.hari_lahir}\n‚îÉ *tanggal Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Arah Rezeki :* ${anu.message.arah_rejeki}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama :* ${anu.message.nama}\n‚îÉ *Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n‚îÉ *Hasil :* ${anu.message.result}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Tanggal :* ${anu.message.tanggal}\n‚îÉ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n‚îÉ *Watak Hari :* ${anu.message.watak_hari}\n‚îÉ *Naga Hari :* ${anu.message.naga_hari}\n‚îÉ *Jam Baik :* ${anu.message.jam_baik}\n‚îÉ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama :* ${anu.message.nama}\n‚îÉ *Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Nama :* ${anu.message.nama}\n‚îÉ *Lahir :* ${anu.message.tgl_lahir}\n‚îÉ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Tanggal :* ${anu.message.tgl_memancing}\n‚îÉ *Hasil :* ${anu.message.result}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Hasil :* ${anu.message.result}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Zodiak :* ${anu.message.zodiak}\n‚îÉ *Nomor :* ${anu.message.nomor_keberuntungan}\n‚îÉ *Aroma :* ${anu.message.aroma_keberuntungan}\n‚îÉ *Planet :* ${anu.message.planet_yang_mengitari}\n‚îÉ *Bunga :* ${anu.message.bunga_keberuntungan}\n‚îÉ *Warna :* ${anu.message.warna_keberuntungan}\n‚îÉ *Batu :* ${anu.message.batu_keberuntungan}\n‚îÉ *Elemen :* ${anu.message.elemen_keberuntungan}\n‚îÉ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n‚îÉ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `‚îÉ *Hasil :* ${anu.message}`, m)
            }
            break
case 'zippyshare': case 'zippydl': {
                if (!text) throw `Example : ${prefix + command} https://www69.zippyshare.com/v/MRLWO4qB/file.html#!/N27zvKSgDG46JQ6`
                let anu = await zippyDownloader(isUrl(text)[0])
                if (Number(anu.size.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
                hisoka.sendText(m.chat, util.format(anu), m)
                hisoka.sendMedia(m.chat, anu.link, '', m)
            }
            break
            case 'mediafire': case 'mediafiredl': {
                if (!text) throw `Example : ${prefix + command} http://www.mediafire.com/file/naqy6ofoqkb6poi/Anime_MUGEN_300_Characters_by_Makoto_Itou_%2526_Kizuma_Gaming.apk/file`
                let anu = await mediafireDownloader(isUrl(text)[0])
                if (Number(anu.filesize.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
		hisoka.sendText(m.chat, util.format(anu), m)
                hisoka.sendMedia(m.chat, anu.link, '', m)
            }
            break
case 'instagram': case 'igdl': case 'ig': {
    if (!text) throw 'Masukkan Link Instagram!'
    m.reply(mess.wait)
    anu = await igDL(text)
    hisoka.sendMessage(m.chat, { video: await getBuffer(anu.result.link) , caption: 'Nih bro'}, { quoted: m })
    }
    break
case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: ' Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktok': case 'tiktokdl': case 'tt': {
          if (!text) throw 'Masukkan Link Tiktok!'
          m.reply(mess.wait)
          anu = await Tiktokdl(text)
var but = [{buttonId: `!tiktokmp3 ${text}`, buttonText: { displayText: "Audio" }, type: 1 },
{buttonId: `!tiktokwm ${text}`, buttonText: { displayText: "Watermark" }, type: 1 }]
            await hisoka.sendMessage(m.chat,{ video : await getBuffer(anu.nowatermark) ,buttons: but, footer: 'Pencet tombol dibawah untuk mendapatkan soundnya' , 
            caption:  `Nih Bro` },  { quoted: m })
}
            break
          case 'tiktokmp3':{
if (!text) throw 'Masukkan Link Tiktok!'
			    m.reply(mess.wait)
			    hxz.ttdownloader(text).then( data => {
			      hisoka.sendMessage(m.chat, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m })
			             } )}

break
	        /* case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
             anu = await fetchJson(`https://rest-beni.herokuapp.com/api/tiktok?url={text}`)
              let message = await prepareWAMessageMedia({ video : { url: anu.result.nowm } }, { upload: hisoka.waUploadToServer })
               const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: `Download From ${text}`,
                            hydratedFooterText: `Jika Audio tidak berhasil ketik tomp3 dan kirim video tt yang sudah kmu download sebelumnya`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code Vidio',
                                    url: `${text}`
                                }
                             },{
                                    quickReplyButton: {
                                    displayText: '‚ô´ Audio',
                                    id: `tiktokmp3 ${text}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break*/
/*case 'tiktokmusic': case 'tiktokaudio': case 'tiktokmp3':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[1]
                    anu = await getBuffer(`https://zenzapis.xyz/downloader/musically?url=${text}&apikey=043aa787f0`)
                    hisoka.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', fileName: `${q}.mp3`}, { quoted : m })
                    break
          case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(`https://zenzapis.xyz/downloader/musically?url=${text}&apikey=043aa787f0`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '‚ñ∫ No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With watermark'}, type: 1},
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.audio)
		let cnvrt = await toAudio(nganu, 'mp4')
                hisoka.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break */
	        case'ig2':
reply (mess.wait)
if (!q) return reply ('Linknya?')
igreel = q.includes("https://www.instagram.com/reel/")

if(igreel){
Download.insta_reel(q).then(async (data) => {
await hisoka.sendMessage(m.chat, { image: { url: data.url, caption: `*INSTAGRAM*` } }, { quoted: m })                        
//sendFileFromUrl(`${data.url}`, video, {quoted: m, caption: `*INSTAGRAM*`})
console.log(data)
console.log(data.url)
})
} else {
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(err => {
return reply(mess.error.api)
})
console.log(res)
await hisoka.sendMessage(m.chat, { image: { url: res.result.link, caption: `*INSTAGRAM*` } }, { quoted: m })                        
///sendMediaURL (from, res.result.link, res.result.desc) 
}
break
                    
                   
 case 'igdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=Deffbotz&url=${ini_url}`)
                    ini_url = ini_url.result                 
                    ini_buffer = await getBuffer(ini_url)
                    hisoka.sendMessage(m.chat, { video: { url: ini_buffer }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: '*IG*' }, { quoted: m })      
                    break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `‚îÉ Title : ${anu.result.lagu}\n‚îÉ Album : ${anu.result.album}\n‚îÉ Singer : ${anu.result.penyanyi}\n‚îÉ Publish : ${anu.result.publish}\n‚îÉ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: m })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `‚îÉ Title : ${anu.result.title}\n‚îÉ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: m })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '‚ñ∫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '‚ñ∫ Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: m })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '‚ô´ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '‚ñ∫ Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
‚îÉ Title : ${anu.title}
‚îÉ Author : ${anu.author.name}
‚îÉ Like : ${anu.like}
‚îÉ Caption : ${anu.caption}
‚îÉ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `‚îÉ Title : ${anu.title}\n‚îÉ Author : ${anu.author.name}\n‚îÉ Like : ${anu.like}\n‚îÉ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break

		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		replay(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replay(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replay(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replay(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `„Äå *Tafsir Surah*  „Äç

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
/*case 'alkitab': 
if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
*/
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '„Äå LIST DATABASE „Äç\n\n'
		for (let i of seplit) {
		    teks += `‚¨° *Name :* ${i.nama}\n‚¨° *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
//==============JADIBOT===============

case 'jadibot':
if (!isCreator) throw mess.owner
if(m.chat.endsWith('@g.us')) return reply('Only With Private Chat/PC')
hisoka.version = [2, 2143, 3]
hisoka.browserDescription = ['Created By Adan','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.m.chat(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await hisoka.loadAuthInfo(obj)
}
try {
hisoka.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.m.chat(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await hisoka.sendMessage(m.chat, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : m,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
       hisoka.deleteMessage(m.chat, scen.key)
  }, 30000);
})  
hisoka.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = hisoka.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await hisoka.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  hisoka.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.m.chat(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
hisoka.on('chat-update', async (chat) => {
	require('./adnn')(hisoka, chat)
})
hisoka.on('chat-update', async (chat) => {
	require('./index')(hisoka, chat)
})
await hisoka.connect().then(async ({user}) => {
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
case 'stopjadibot':
if (!isCreator) throw mess.owner
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
hisoka.close()
} catch {
reply('Oke')
hisoka.close()
}
break

	    case 'anonymous': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report But',
                                    url: 'https://wa.me/6289652903288?text=bang+report+bug'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Start Anonymous',
                                    id: 'start'
                                }
                            }]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `_Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner_`)
                    throw false
                }
                let profile = await hisoka.profilePictureUrl(room.b)
                let status = await hisoka.fetchStatus(room.b)
                let msg = await hisoka.sendImage(room.a, profile, `Nama : ${await hisoka.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                hisoka.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `_Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `_Partner Telah Meninggalkan Sesi Anonymous_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `_Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda_`, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `_Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan_`, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `_Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan_`, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `_Mohon Tunggu Sedang Mencari Partner_`, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                reply('Sukse Change To Public Usage')
            }
            break
case 'setmenu':
if (!isCreator) throw mess.owner
                            if (!q) return reply(`Masukan opts :\n‚≠îlocation\n‚≠îsimple\n‚≠î gif`)
                            if (q == "location") {
                            modelmenu = "location"
                            reply("Done change menu to "+q)
                            } 

                            else if (q == "gif") {
                          modelmenu = "gif"
                            replay("Done change menu to "+q)
                            } 
                            
                              else if (q == "simple") {
                          modelmenu = "simple"
                            replay("Done change menu to "+q)
                            } 

                            else {
                           replay(`Masukan opts :\n‚≠îlocation\n‚≠îsimple\n‚≠î gif`)
                            }
                            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                reply('Sukses Change To Self Usage')
            }
            break

//FITUR TOOLS 
case 'ssweb-hp': {
		if(args.length < 1) return replay(`Url Nya Mana?`)
		anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: anu ,
                    caption: `Ssweb Url ( HP )`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
  case 'ssweb-pc': {
                	if(args.length < 1) return replay(`Url Nya Mana?`)
                	anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: anu ,
                    caption: `Ssweb Url ( PC )`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
                break
case 'translate':
if (args.length < 1) return replay(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
m.reply('process')
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`üåêTranslate : ${Detek}\nüìòHasil : ${Infoo}`)
  break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

üíª Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.pemilik, m)
            }
            break
                    case 'bug': case 'report': {
                    	if(!text) throw `Masukan Bug Nya Contoh\n\n${command} Menu Error `
                    	hisoka.sendMessage(`6289652903288@s.whatsapp.net`, {text: `*Bug Report Dari:* wa.me/${m.sender.split("@")[0]}
_Pesan Report:_ ${text}` })
reply(` Sukses Lapor ${command} Kepada Owner Silahkan Tunggu Dalam Waktu 24 Jam\n\nJika Main - Main Dengan Fitur Ini Maka Anda Mendapatkan Block Nomor Selama 2 Hari !`)
                    }
                    break 
                    
                    // Fitur Gak Penting Di Sini
case 'tes':
reply(`On bang`)
break
case 'rules':
reply(`*RULES*
ï Mohon untuk tidak spam bot karena bot ini sudah memiliki otomatis blokir bagi pengguna bot yang spam
ï Mohon maaf jika ada yang memakai meny nsfw maka akan di block oleh owner, jika di gc tolong admin untuk menghubungi owner!!
ï mohon untuk tidak menelepon bot karena bot ini sudah memiliki system blokir otomatis bagi orang yang sudah menelepon bot
ï Kami tidak bertanggung jawab atas penyalahgunaan bot
ï Users dilarang mengirimkan berbagai bug, virtes, dan sejenisnya ke nomor bot.
ï Users dilarang menambahkan nomor bot secara ilegal, untuk menambahkan silahkan hubungi owner.

*KEBIJAKAN PRIVASI*
1. Bot tidak akan menyebarkan nomor users.
2. Bot tidak akan menyimpan media yang dikirimkan oleh users.
3. Bot tidak akan menyalahgunakan data data users.
4. Owner bot berhak melihat data riwayat chat users.
5. Owner bot berhak melihat status users.
6. Owner bot dapat melihat riwayat chat, dan media yang dikirimkan users.`)
     break
case 'tambahlimit': 
if (!global.db.users[m.sender].limit < 1) return reply(`S u k s e s Menambah Limit`) // respon ketika limit habis
db.users[m.sender].limit += 1
break
case 'ceklimit': 
replay(`Limit Kamu : *${global.db.users[m.sender].limit}*`)
break
            case 'list': case 'menu': case 'help': case '?': {
            	if (modelmenu == 'location') {
                anu = `
Hi ${pushname}  
Pilih fitur button sesuai kebutuhan kamu yaa

*STATUS USER*
*Nama :* ${pushname}
*Nomor :* wa.me/${m.sender.split("@")[0]}
*Limit :* ${global.db.users[m.sender].limit}

*STATUS BOT*
 *Library :* Baileys MD
 *Runtime :* ${runtime(process.uptime())}
 *Hijriah :* ${dateIslamic}

`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/Lycho.jpg')},
                            hydratedFooterText: `${global.botnma} Created By : ${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Report Bug',
                                    url: 'https://wa.me/6289652903288?text=Bang+Lapor+Ada+Bug'
                                }
                            }, {
                            	urlButton: {
                                displayText: `${global.ganti2}`, 
                                    url: `${global.web2}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'RULES',
                                    id: `${prefix}rules`
                                }           
                                }, {
                                quickReplyButton: {
                                    displayText: 'LIST-FITUR',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'CHANGELOG',
                                    id: `${prefix}perubahan`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })                    
       }
       else if (modelmenu == 'gif') {
       	pref = 1
       	anu = `*STATUS USER*
Nama : ${pushname}
Nomor : _wa.me/${m.sender.split("@")[0]}_
Limit Kamu : ${global.db.users[m.sender].limit}

STATUS BOT*
 *Library :* _Baileys MD_
 *Runtime :* ${runtime(process.uptime())}
 *Hijriah :* ${dateIslamic}

*GROUP MENU*
ï ${pref++} ${prefix}linkgroup
ï ${pref++} ${prefix}ephemeral [option]
ï ${pref++} ${prefix}grupinfo
ï ${pref++} ${prefix}setppgc [image]
ï ${pref++} ${prefix}setname _<text>_
ï ${pref++} ${prefix}setdesc _<text>_
ï ${pref++} ${prefix}group [option]
ï ${pref++} ${prefix}editinfo [option]
ï ${pref++} ${prefix}add @user
ï ${pref++} ${prefix}kick @user
ï ${pref++} ${prefix}hidetag _<text>_
ï ${pref++} ${prefix}tagall _<text>_
ï ${pref++} ${prefix}antilink [on/off]
ï ${pref++} ${prefix}antiwame [on/off]
ï ${pref++} ${prefix}mute [on/off]
ï ${pref++} ${prefix}promote @user
ï ${pref++} ${prefix}demote @user
ï ${pref++} ${prefix}vote _<text>_
ï ${pref++} ${prefix}devote
ï ${pref++} ${prefix}upvote
ï ${pref++} ${prefix}cekvote
ï ${pref++} ${prefix}hapusvote

*DOWNLOADER MENU*
ï ${pref++} ${prefix}tiktoknowm _<url>_
ï ${pref++} ${prefix}tiktokwm _<url>_
ï ${pref++} ${prefix}zippyshare 
ï ${pref++} ${prefix}mediafire _<url>_
ï ${pref++} ${prefix}tiktokmp3 _<url>_
ï ${pref++} ${prefix}instagram _<url>_
ï ${pref++} ${prefix}twitter _<url>_
ï ${pref++} ${prefix}twittermp3 _<url>_
ï ${pref++} ${prefix}facebook _<url>_
ï ${pref++} ${prefix}pinterestdl _<url>_
ï ${pref++} ${prefix}ytmp3 _<url>_
ï ${pref++} ${prefix}ytmp4 _<url>_
ï ${pref++} ${prefix}getmusic _<query>_
ï ${pref++} ${prefix}getvideo _<query>_
ï ${pref++} ${prefix}umma _<url>_
ï ${pref++} ${prefix}joox _<query>_
ï ${pref++} ${prefix}soundcloud _<url>_

*SEARCH MENU*
ï ${pref++} ${prefix}play _<query>_
ï ${pref++} ${prefix}yts _<query>_
ï ${pref++} ${prefix}google _<query>_
ï ${pref++} ${prefix}gimage _<query>_
ï ${pref++} ${prefix}pinterest _<query>_
ï ${pref++} ${prefix}wallpaper _<query>_
ï ${pref++} ${prefix}wikimedia _<query>_
ï ${pref++} ${prefix}ytsearch _<query>_
ï ${pref++} ${prefix}ringtone _<query>_

*RANDOM MENU*
ï ${pref++} ${prefix}coffe
ï ${pref++} ${prefix}quotesanime
ï ${pref++} ${prefix}motivasi
ï ${pref++} ${prefix}couple
ï ${pref++} ${prefix}anime
ï ${pref++} ${prefix}waifu
ï ${pref++} ${prefix}hinata
ï ${pref++} ${prefix}mikasa
ï ${pref++} ${prefix}husbu
ï ${pref++} ${prefix}neko
ï ${pref++} ${prefix}shinobu
ï ${pref++} ${prefix}megumin

*TEXT PRO MENU*
ï ${pref++} ${prefix}candy
ï ${pref++} ${prefix}3dchristmas
ï ${pref++} ${prefix}sparklechristmas
ï ${pref++} ${prefix}deepsea
ï ${pref++} ${prefix}scifi
ï ${pref++} ${prefix}rainbow
ï ${pref++} ${prefix}waterpipe
ï ${pref++} ${prefix}spooky
ï ${pref++} ${prefix}pencil
ï ${pref++} ${prefix}circuit
ï ${pref++} ${prefix}discovery
ï ${pref++} ${prefix}metalic
ï ${pref++} ${prefix}fiction
ï ${pref++} ${prefix}demon
ï ${pref++} ${prefix}transformer
ï ${pref++} ${prefix}berry
ï ${pref++} ${prefix}thunder
ï ${pref++} ${prefix}magma
ï ${pref++} ${prefix}3dstone
ï ${pref++} ${prefix}neonlight
ï ${pref++} ${prefix}glitch
ï ${pref++} ${prefix}harrypotter
ï ${pref++} ${prefix}brokenglass
ï ${pref++} ${prefix}papercut
ï ${pref++} ${prefix}watercolor
ï ${pref++} ${prefix}multicolor
ï ${pref++} ${prefix}neondevil
ï ${pref++} ${prefix}underwater
ï ${pref++} ${prefix}graffitibike
ï ${pref++} ${prefix}snow
ï ${pref++} ${prefix}cloud
ï ${pref++} ${prefix}honey
ï ${pref++} ${prefix}ice
ï ${pref++} ${prefix}fruitjuice
ï ${pref++} ${prefix}biscuit
ï ${pref++} ${prefix}wood
ï ${pref++} ${prefix}chocolate
ï ${pref++} ${prefix}strawberry
ï ${pref++} ${prefix}matrix
ï ${pref++} ${prefix}blood
ï ${pref++} ${prefix}dropwater
ï ${pref++} ${prefix}toxic
ï ${pref++} ${prefix}lava
ï ${pref++} ${prefix}rock
ï ${pref++} ${prefix}bloodglas
ï ${pref++} ${prefix}hallowen
ï ${pref++} ${prefix}darkgold
ï ${pref++} ${prefix}joker
ï ${pref++} ${prefix}wicker
ï ${pref++} ${prefix}firework
ï ${pref++} ${prefix}skeleton
ï ${pref++} ${prefix}blackpink
ï ${pref++} ${prefix}sand
ï ${pref++} ${prefix}glue
ï ${pref++} ${prefix}1917
ï ${pref++} ${prefix}leaves

*LOGO MENU*
ï ${pref++} ${prefix}sadboy-logo _<text>_
ï ${pref++} ${prefix}gura-logo _<text>_
ï ${pref++} ${prefix}logo1 _<text>_

*PHOTO OXY MENU*
ï ${pref++} ${prefix}shadow
ï ${pref++} ${prefix}romantic
ï ${pref++} ${prefix}smoke
ï ${pref++} ${prefix}burnpapper
ï ${pref++} ${prefix}naruto
ï ${pref++} ${prefix}lovemsg
ï ${pref++} ${prefix}grassmsg
ï ${pref++} ${prefix}lovetext
ï ${pref++} ${prefix}coffecup
ï ${pref++} ${prefix}butterfly
ï ${pref++} ${prefix}harrypotter
ï ${pref++} ${prefix}retrolol

*NULIS MENU*
ï ${pref++} ${prefix}nuliskiri _<text>_
ï ${pref++} ${prefix}nuliskanan _<text>_
ï ${pref++} ${prefix}foliokiri _<text>_
ï ${pref++} ${prefix}foliokanan _<text>_

*EPHOTO MENU*
ï ${pref++} ${prefix}ffcover
ï ${pref++} ${prefix}crossfire
ï ${pref++} ${prefix}galaxy
ï ${pref++} ${prefix}glass
ï ${pref++} ${prefix}neon
ï ${pref++} ${prefix}beach
ï ${pref++} ${prefix}blackpink
ï ${pref++} ${prefix}igcertificate
ï ${pref++} ${prefix}ytcertificate

*FUN MENU*
ï ${pref++} ${prefix}halah
ï ${pref++} ${prefix}hilih
ï ${pref++} ${prefix}huluh
ï ${pref++} ${prefix}heleh
ï ${pref++} ${prefix}holoh
ï ${pref++} ${prefix}jadian
ï ${pref++} ${prefix}jodohku
ï ${pref++} ${prefix}delttt
ï ${pref++} ${prefix}tictactoe
ï ${pref++} ${prefix}family100
ï ${pref++} ${prefix}tebak [option]
ï ${pref++} ${prefix}math [mode]
ï ${pref++} ${prefix}suitpvp [@tag]

*PRIMBON MENU*
ï ${pref++} ${prefix}nomorhoki
ï ${pref++} ${prefix}artimimpi
ï ${pref++} ${prefix}artinama
ï ${pref++} ${prefix}ramaljodoh
ï ${pref++} ${prefix}ramaljodohbali
ï ${pref++} ${prefix}suamiistri
ï ${pref++} ${prefix}ramalcinta
ï ${pref++} ${prefix}cocoknama
ï ${pref++} ${prefix}pasangan
ï ${pref++} ${prefix}jadiannikah
ï ${pref++} ${prefix}sifatusaha
ï ${pref++} ${prefix}rezeki
ï ${pref++} ${prefix}pekerjaan
ï ${pref++} ${prefix}nasib
ï ${pref++} ${prefix}penyakit
ï ${pref++} ${prefix}tarot
ï ${pref++} ${prefix}fengshui
ï ${pref++} ${prefix}haribaik
ï ${pref++} ${prefix}harisangar
ï ${pref++} ${prefix}harisial
ï ${pref++} ${prefix}nagahari
ï ${pref++} ${prefix}arahrezeki
ï ${pref++} ${prefix}peruntungan
ï ${pref++} ${prefix}weton
ï ${pref++} ${prefix}karakter
ï ${pref++} ${prefix}keberuntungan
ï ${pref++} ${prefix}memancing
ï ${pref++} ${prefix}masasubur
ï ${pref++} ${prefix}zodiak
ï ${pref++} ${prefix}shio

*CONVERT MENU*
ï ${pref++} ${prefix}toimage
ï ${pref++} ${prefix}removebg
ï ${pref++} ${prefix}sticker
ï ${pref++} ${prefix}emojimix _<üòé + ‚ù§Ô∏è>_
ï ${pref++} ${prefix}tovideo
ï ${pref++} ${prefix}togif
ï ${pref++} ${prefix}tourl
ï ${pref++} ${prefix}tovn
ï ${pref++} ${prefix}tomp3
ï ${pref++} ${prefix}toaudio
ï ${pref++} ${prefix}ebinary
ï ${pref++} ${prefix}dbinary
ï ${pref++} ${prefix}styletext
ï ${pref++} ${prefix}ttp 
ï ${pref++} ${prefix}attp 
ï ${pref++} ${prefix}smeme
ï ${pref++} ${prefix}smeme2

*MAIN MENU*
ï ${pref++} ${prefix}ping
ï ${pref++} ${prefix}owner
ï ${pref++} ${prefix}menu / ï ${prefix}help / ï ${prefix}?
ï ${pref++} ${prefix}delete
ï ${pref++} ${prefix}infochat
ï ${pref++} ${prefix}quoted
ï ${pref++} ${prefix}listpc
ï ${pref++} ${prefix}listgc
ï ${pref++} ${prefix}tqtt
ï ${pref++} ${prefix}listonline

*DATABASE MENU*
ï ${pref++} ${prefix}setcmd
ï ${pref++} ${prefix}listcmd
ï ${pref++} ${prefix}delcmd
ï ${pref++} ${prefix}lockcmd
ï ${pref++} ${prefix}addmsg
ï ${pref++} ${prefix}listmsg
ï ${pref++} ${prefix}getmsg
ï ${pref++} ${prefix}delmsg

*ANONYMOUS MENU*
ï ${pref++} ${prefix}anonymous
ï ${pref++} ${prefix}start
ï ${pref++} ${prefix}next
ï ${pref++} ${prefix}keluar
ï ${pref++} ${prefix}sendkontak

*ISLAMIC MENU*
ï ${pref++} ${prefix}iqra
ï ${pref++} ${prefix}hadist
ï ${pref++} ${prefix}alquran
ï ${pref++} ${prefix}juzamma
ï ${pref++} ${prefix}tafsirsurah

*IMAGE HIBURAN*
ï ${pref++} ${prefix}meme
ï ${pref++} ${prefix}ppcouple

*TOLLS API'S*
ï ${pref++} ${prefix}ssweb-hp
ï ${pref++} ${prefix}ssweb-pc
ï ${pref++} ${prefix}translate

*VOICE CHANGER*
ï ${pref++} ${prefix}bass
ï ${pref++} ${prefix}blown
ï ${pref++} ${prefix}deep
ï ${pref++} ${prefix}earrape
ï ${pref++} ${prefix}fast
ï ${pref++} ${prefix}fat
ï ${pref++} ${prefix}nightcore
ï ${pref++} ${prefix}reverse
ï ${pref++} ${prefix}robot
ï ${pref++} ${prefix}slow
ï ${pref++} ${prefix}tupai

*OWNER MENU*
ï ${pref++} ${prefix}chat [option]
ï ${pref++} ${prefix}join [link]
ï ${pref++} ${prefix}leave
ï ${pref++} ${prefix}block @user
ï ${pref++} ${prefix}unblock @user
ï ${pref++} ${prefix}bcgroup _<text>_
ï ${pref++} ${prefix}bcall _<text>_
ï ${pref++} ${prefix}bcimg _<text>_
ï ${pref++} ${prefix}bcvidio _<text>_
ï ${pref++} ${prefix}bcaudio _<text>_
ï ${pref++} ${prefix}setppbot [image]
ï ${pref++} ${prefix}setexif
ï ${pref++} ${prefix}shutdown
ï ${pref++} ${prefix}restart
ï ${pref++} ${prefix}setmenu [option]
ï ${pref++} ${prefix}ban @user
ï ${pref++} ${prefix}unban @user
ï ${pref++} ${prefix}autobio On/Off
ï ${pref++} ${prefix}autoread On/Off
ï ${pref++} ${prefix}autoketik On/Off
`
	let message = await prepareWAMessageMedia({ video: { url: "./media/KahfzXzy.mp4" }, gifPlayback: true, gifAttribution: "TENOR" }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: `${anu}`,
                            hydratedFooterText: `Created Bot ${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'Rules Bot',
                                    id: `${prefix}rules`
                                }           
                                }, {
                                quickReplyButton: {
                                    displayText: 'DONASI',
                                    id: `${prefix}donasi`
                                    }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
                }
break
case 'donasi': {
	let btns = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `SS BUKTI TF`,
                                    id: 'owner'
                                }
                            }]
	textTemplateButtons(m.chat, `*_MAU DONASI?_*

GOPAY : 0896-5290-3288
DANA : 0896-5290-3288
OVO : 0896-5290-3288

ISI NOMINAL - TF - SCREENSHOT KE OWNER BIAR DPET FREE PREMUM !! `, `${global.footer}`, btns)
}
break
case 'allmenu': {
                anu = `*USER INFO*
Nama : ${pushname}
Nomor : wa.me/${m.sender.split("@")[0]}
Limit Kamu : ${global.db.users[m.sender].limit}

*BOT INFO*
 *Library :* Baileys MD
 *Runtime :* ${runtime(process.uptime())}
 *Hijriah :* ${dateIslamic}

*GROUP MENU*
ï ${pref++} ${prefix}linkgroup
ï ${pref++} ${prefix}ephemeral [option]
ï ${pref++} ${prefix}grupinfo
ï ${pref++} ${prefix}setppgc [image]
ï ${pref++} ${prefix}setname _<text>_
ï ${pref++} ${prefix}setdesc _<text>_
ï ${pref++} ${prefix}group [option]
ï ${pref++} ${prefix}editinfo [option]
ï ${pref++} ${prefix}add @user
ï ${pref++} ${prefix}kick @user
ï ${pref++} ${prefix}hidetag _<text>_
ï ${pref++} ${prefix}tagall _<text>_
ï ${pref++} ${prefix}antilink [on/off]
ï ${pref++} ${prefix}antiwame [on/off]
ï ${pref++} ${prefix}mute [on/off]
ï ${pref++} ${prefix}promote @user
ï ${pref++} ${prefix}demote @user
ï ${pref++} ${prefix}vote _<text>_
ï ${pref++} ${prefix}devote
ï ${pref++} ${prefix}upvote
ï ${pref++} ${prefix}cekvote
ï ${pref++} ${prefix}hapusvote

*DOWNLOADER MENU*
ï ${pref++} ${prefix}tiktoknowm _<url>_
ï ${pref++} ${prefix}tiktokwm _<url>_
ï ${pref++} ${prefix}zippyshare 
ï ${pref++} ${prefix}mediafire _<url>_
ï ${pref++} ${prefix}tiktokmp3 _<url>_
ï ${pref++} ${prefix}instagram _<url>_
ï ${pref++} ${prefix}twitter _<url>_
ï ${pref++} ${prefix}twittermp3 _<url>_
ï ${pref++} ${prefix}facebook _<url>_
ï ${pref++} ${prefix}pinterestdl _<url>_
ï ${pref++} ${prefix}ytmp3 _<url>_
ï ${pref++} ${prefix}ytmp4 _<url>_
ï ${pref++} ${prefix}getmusic _<query>_
ï ${pref++} ${prefix}getvideo _<query>_
ï ${pref++} ${prefix}umma _<url>_
ï ${pref++} ${prefix}joox _<query>_
ï ${pref++} ${prefix}soundcloud _<url>_

*SEARCH MENU*
ï ${pref++} ${prefix}play _<query>_
ï ${pref++} ${prefix}yts _<query>_
ï ${pref++} ${prefix}google _<query>_
ï ${pref++} ${prefix}gimage _<query>_
ï ${pref++} ${prefix}pinterest _<query>_
ï ${pref++} ${prefix}wallpaper _<query>_
ï ${pref++} ${prefix}wikimedia _<query>_
ï ${pref++} ${prefix}ytsearch _<query>_
ï ${pref++} ${prefix}ringtone _<query>_

*RANDOM MENU*
ï ${pref++} ${prefix}coffe
ï ${pref++} ${prefix}quotesanime
ï ${pref++} ${prefix}motivasi
ï ${pref++} ${prefix}couple
ï ${pref++} ${prefix}anime
ï ${pref++} ${prefix}waifu
ï ${pref++} ${prefix}hinata
ï ${pref++} ${prefix}mikasa
ï ${pref++} ${prefix}husbu
ï ${pref++} ${prefix}neko
ï ${pref++} ${prefix}shinobu
ï ${pref++} ${prefix}megumin

*TEXT PRO MENU*
ï ${pref++} ${prefix}candy
ï ${pref++} ${prefix}3dchristmas
ï ${pref++} ${prefix}sparklechristmas
ï ${pref++} ${prefix}deepsea
ï ${pref++} ${prefix}scifi
ï ${pref++} ${prefix}rainbow
ï ${pref++} ${prefix}waterpipe
ï ${pref++} ${prefix}spooky
ï ${pref++} ${prefix}pencil
ï ${pref++} ${prefix}circuit
ï ${pref++} ${prefix}discovery
ï ${pref++} ${prefix}metalic
ï ${pref++} ${prefix}fiction
ï ${pref++} ${prefix}demon
ï ${pref++} ${prefix}transformer
ï ${pref++} ${prefix}berry
ï ${pref++} ${prefix}thunder
ï ${pref++} ${prefix}magma
ï ${pref++} ${prefix}3dstone
ï ${pref++} ${prefix}neonlight
ï ${pref++} ${prefix}glitch
ï ${pref++} ${prefix}harrypotter
ï ${pref++} ${prefix}brokenglass
ï ${pref++} ${prefix}papercut
ï ${pref++} ${prefix}watercolor
ï ${pref++} ${prefix}multicolor
ï ${pref++} ${prefix}neondevil
ï ${pref++} ${prefix}underwater
ï ${pref++} ${prefix}graffitibike
ï ${pref++} ${prefix}snow
ï ${pref++} ${prefix}cloud
ï ${pref++} ${prefix}honey
ï ${pref++} ${prefix}ice
ï ${pref++} ${prefix}fruitjuice
ï ${pref++} ${prefix}biscuit
ï ${pref++} ${prefix}wood
ï ${pref++} ${prefix}chocolate
ï ${pref++} ${prefix}strawberry
ï ${pref++} ${prefix}matrix
ï ${pref++} ${prefix}blood
ï ${pref++} ${prefix}dropwater
ï ${pref++} ${prefix}toxic
ï ${pref++} ${prefix}lava
ï ${pref++} ${prefix}rock
ï ${pref++} ${prefix}bloodglas
ï ${pref++} ${prefix}hallowen
ï ${pref++} ${prefix}darkgold
ï ${pref++} ${prefix}joker
ï ${pref++} ${prefix}wicker
ï ${pref++} ${prefix}firework
ï ${pref++} ${prefix}skeleton
ï ${pref++} ${prefix}blackpink
ï ${pref++} ${prefix}sand
ï ${pref++} ${prefix}glue
ï ${pref++} ${prefix}1917
ï ${pref++} ${prefix}leaves

*LOGO MENU*
ï ${pref++} ${prefix}sadboy-logo _<text>_
ï ${pref++} ${prefix}gura-logo _<text>_
ï ${pref++} ${prefix}logo1 _<text>_

*PHOTO OXY MENU*
ï ${pref++} ${prefix}shadow
ï ${pref++} ${prefix}romantic
ï ${pref++} ${prefix}smoke
ï ${pref++} ${prefix}burnpapper
ï ${pref++} ${prefix}naruto
ï ${pref++} ${prefix}lovemsg
ï ${pref++} ${prefix}grassmsg
ï ${pref++} ${prefix}lovetext
ï ${pref++} ${prefix}coffecup
ï ${pref++} ${prefix}butterfly
ï ${pref++} ${prefix}harrypotter
ï ${pref++} ${prefix}retrolol

*NULIS MENU*
ï ${pref++} ${prefix}nuliskiri _<text>_
ï ${pref++} ${prefix}nuliskanan _<text>_
ï ${pref++} ${prefix}foliokiri _<text>_
ï ${pref++} ${prefix}foliokanan _<text>_

*EPHOTO MENU*
ï ${pref++} ${prefix}ffcover
ï ${pref++} ${prefix}crossfire
ï ${pref++} ${prefix}galaxy
ï ${pref++} ${prefix}glass
ï ${pref++} ${prefix}neon
ï ${pref++} ${prefix}beach
ï ${pref++} ${prefix}blackpink
ï ${pref++} ${prefix}igcertificate
ï ${pref++} ${prefix}ytcertificate

*FUN MENU*
ï ${pref++} ${prefix}halah
ï ${pref++} ${prefix}hilih
ï ${pref++} ${prefix}huluh
ï ${pref++} ${prefix}heleh
ï ${pref++} ${prefix}holoh
ï ${pref++} ${prefix}jadian
ï ${pref++} ${prefix}jodohku
ï ${pref++} ${prefix}delttt
ï ${pref++} ${prefix}tictactoe
ï ${pref++} ${prefix}family100
ï ${pref++} ${prefix}tebak [option]
ï ${pref++} ${prefix}math [mode]
ï ${pref++} ${prefix}suitpvp [@tag]

*PRIMBON MENU*
ï ${pref++} ${prefix}nomorhoki
ï ${pref++} ${prefix}artimimpi
ï ${pref++} ${prefix}artinama
ï ${pref++} ${prefix}ramaljodoh
ï ${pref++} ${prefix}ramaljodohbali
ï ${pref++} ${prefix}suamiistri
ï ${pref++} ${prefix}ramalcinta
ï ${pref++} ${prefix}cocoknama
ï ${pref++} ${prefix}pasangan
ï ${pref++} ${prefix}jadiannikah
ï ${pref++} ${prefix}sifatusaha
ï ${pref++} ${prefix}rezeki
ï ${pref++} ${prefix}pekerjaan
ï ${pref++} ${prefix}nasib
ï ${pref++} ${prefix}penyakit
ï ${pref++} ${prefix}tarot
ï ${pref++} ${prefix}fengshui
ï ${pref++} ${prefix}haribaik
ï ${pref++} ${prefix}harisangar
ï ${pref++} ${prefix}harisial
ï ${pref++} ${prefix}nagahari
ï ${pref++} ${prefix}arahrezeki
ï ${pref++} ${prefix}peruntungan
ï ${pref++} ${prefix}weton
ï ${pref++} ${prefix}karakter
ï ${pref++} ${prefix}keberuntungan
ï ${pref++} ${prefix}memancing
ï ${pref++} ${prefix}masasubur
ï ${pref++} ${prefix}zodiak
ï ${pref++} ${prefix}shio

*CONVERT MENU*
ï ${pref++} ${prefix}toimage
ï ${pref++} ${prefix}removebg
ï ${pref++} ${prefix}sticker
ï ${pref++} ${prefix}emojimix _<üòé + ‚ù§Ô∏è>_
ï ${pref++} ${prefix}tovideo
ï ${pref++} ${prefix}togif
ï ${pref++} ${prefix}tourl
ï ${pref++} ${prefix}tovn
ï ${pref++} ${prefix}tomp3
ï ${pref++} ${prefix}toaudio
ï ${pref++} ${prefix}ebinary
ï ${pref++} ${prefix}dbinary
ï ${pref++} ${prefix}styletext
ï ${pref++} ${prefix}ttp 
ï ${pref++} ${prefix}attp 
ï ${pref++} ${prefix}smeme
ï ${pref++} ${prefix}smeme2

*MAIN MENU*
ï ${pref++} ${prefix}ping
ï ${pref++} ${prefix}owner
ï ${pref++} ${prefix}menu / ï ${prefix}help / ï ${prefix}?
ï ${pref++} ${prefix}delete
ï ${pref++} ${prefix}infochat
ï ${pref++} ${prefix}quoted
ï ${pref++} ${prefix}listpc
ï ${pref++} ${prefix}listgc
ï ${pref++} ${prefix}tqtt
ï ${pref++} ${prefix}listonline

*DATABASE MENU*
ï ${pref++} ${prefix}setcmd
ï ${pref++} ${prefix}listcmd
ï ${pref++} ${prefix}delcmd
ï ${pref++} ${prefix}lockcmd
ï ${pref++} ${prefix}addmsg
ï ${pref++} ${prefix}listmsg
ï ${pref++} ${prefix}getmsg
ï ${pref++} ${prefix}delmsg

*ANONYMOUS MENU*
ï ${pref++} ${prefix}anonymous
ï ${pref++} ${prefix}start
ï ${pref++} ${prefix}next
ï ${pref++} ${prefix}keluar
ï ${pref++} ${prefix}sendkontak

*ISLAMIC MENU*
ï ${pref++} ${prefix}iqra
ï ${pref++} ${prefix}hadist
ï ${pref++} ${prefix}alquran
ï ${pref++} ${prefix}juzamma
ï ${pref++} ${prefix}tafsirsurah

*IMAGE HIBURAN*
ï ${pref++} ${prefix}meme
ï ${pref++} ${prefix}ppcouple

*TOLLS API'S*
ï ${pref++} ${prefix}ssweb-hp
ï ${pref++} ${prefix}ssweb-pc
ï ${pref++} ${prefix}translate

*VOICE CHANGER*
ï ${pref++} ${prefix}bass
ï ${pref++} ${prefix}blown
ï ${pref++} ${prefix}deep
ï ${pref++} ${prefix}earrape
ï ${pref++} ${prefix}fast
ï ${pref++} ${prefix}fat
ï ${pref++} ${prefix}nightcore
ï ${pref++} ${prefix}reverse
ï ${pref++} ${prefix}robot
ï ${pref++} ${prefix}slow
ï ${pref++} ${prefix}tupai

*OWNER MENU*
ï ${pref++} ${prefix}chat [option]
ï ${pref++} ${prefix}join [link]
ï ${pref++} ${prefix}leave
ï ${pref++} ${prefix}block @user
ï ${pref++} ${prefix}unblock @user
ï ${pref++} ${prefix}bcgroup _<text>_
ï ${pref++} ${prefix}bcall _<text>_
ï ${pref++} ${prefix}bcimg _<text>_
ï ${pref++} ${prefix}bcvidio _<text>_
ï ${pref++} ${prefix}bcaudio _<text>_
ï ${pref++} ${prefix}setppbot [image]
ï ${pref++} ${prefix}setexif
ï ${pref++} ${prefix}shutdown
ï ${pref++} ${prefix}restart
ï ${pref++} ${prefix}setmenu [option]
ï ${pref++} ${prefix}ban @user
ï ${pref++} ${prefix}unban @user
ï ${pref++} ${prefix}autobio On/Off
ï ${pref++} ${prefix}autoread On/Off
ï ${pref++} ${prefix}autoketik On/Off
`
	let message = await prepareWAMessageMedia({ video: { url: "./media/KahfzXzy.mp4" }, gifPlayback: true, gifAttribution: "TENOR" }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: `${anu}`,
                            hydratedFooterText: `Created Bot ${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'Rules Bot',
                                    id: `${prefix}rules`
                                }           
                                }, {
                                quickReplyButton: {
                                    displayText: 'DONASI',
                                    id: `${prefix}donasi`
                                    }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'perubahan': {
	m.reply(` Nama Bot : ${global.botnma}
Owner Name : ${global.ownernma}
	
_Perubahan_
Versi Bot = V2.1

Ubah Tampilan UI

_Fix Bug_
Fix Random Image

_Tambahan_
Add Fitur List
Add Antilink 
Add Mute
Add Rank
Add Anti Wa.me
Add Broadcast Image / Text / Vidio / Audio
Add Maker 
Add Ephoto
Add Fitur Convert
Add Hiburan Image

_Next Update Fitur_
Add Rpg

*Info*
*Penting Di Baca!!!*
Bot Masih Dalam Tahap Pengembangan ( Beta ) Jadi Kalo Ada Yang Error Jangan Spam Fitur nya!!
Jika Ada Bug Silahkan Ketik *report* <text>

Terimakasih (‚âß‚ñΩ‚â¶)

Thanks To
Fatih Arridho
DikaArdnt.
Adan
Juna Bot
KurrXd`)
}
break
case 'command':{
	let status = hisoka.fetchStatus(m.sender)
	let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
           let sections= [{
								"title": "Fitur Grup",
								"rows": [
									{
										"title": "Grup Fitur",
										"description": "Menampilkan Fitur Grup",
										"rowId": `${prefix}grupmenu`
									}
								]
							},
							{
								"title": "Bot Menu",
								"rows": [
									{
										"title": "ALL Fitur",
										"description": "Menampilkan Semua Fitur!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Download Fitur",
										"description": "Menampilkan Download Menu",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Fitur",
										"description": "Menampilkan Search Fitur",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Fitur",
										"description": "Menampilkan random Fitur",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "Image Fitur",
										"description": "Menampilkan image Fitur",
										"rowId": `${prefix}imagemenu`
										},
										{
											"title": "Image hiburan",
										"description": "Menampilkan image hiburan",
										"rowId": `${prefix}immageemenu`
										},
										{
											"title": "Fun",
										"description": "Menampilkan Fun Fitur",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "primbon Fitur",
										"description": "Menampilkan Primbon Fitur",
										"rowId": `${prefix}primbonmenu`
										},
										{
											"title": "Convert Fitur",
										"description": "Menampilkan Convert Fitur",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "No Category",
										"description": "Menampilkan NoCategory Fitur",
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "Ephoto Fitur",
										"description": "Menampilkan Ephoto Fitur",
										"rowId": `${prefix}ephotomenu`
										},
										{
											"title": "TextPro Fitur",
										"description": "Menampilkan TextPro Fitur",
										"rowId": `textpromenu`
										},
										{
											"title": "Database Fitur",
										"description": "Menampilkan Database Fitur",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Image Hiburan",
										"description": "menampilkan Image Hiburan",
										"rowId": `${prefix}immageemenu`
										},
										{
										"title": "Tolls Fitur",
										"description": "menampilkan Tolls Fitur",
										"rowId": `${prefix}tollsmenu`
										},
										{
											"title": "Voice Changer Fitur",
										"description": "Menampilkan Voice Changer Fitur",
										"rowId": `${prefix}voicemenu`
										},
								        {
										"title": "Religion Fitur",
										"description": "menampilkan Fitur Agama - Agama",
										"rowId": `${prefix}religionmenu`
										}
								]
							},
							{
								"title": "Chating Sesama Userüìû",
								"rows": [
									{
										"title": "Anonymous Chat",
										"description": "menampilkan Fitur Anonymous Chat",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "System GroupüëÆ",
								"rows": [
									{
										"title": "Group Sistem Fitur",
										"description": "menampilkan Fitur System Grup",
										"rowId": `${prefix}sistemmenu`
									}
								]
							},
							{
								"title": "Owner Command",
								"rows": [
									{
										"title": "Owner Fitur",
										"description": "menampilkan Owner Fitur ( Khusus Owner )",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "Thanks To",
								"rows": [
									{
										"title": "Contributor",
										"description": "menampilkan Nama Teman - Teman Saya Yang Sudah Membantu Merakit Bot Ini !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						]
						hisoka.sendList(m.chat, `Halo ${pushname}`, `*USER INFO*
Name : ${pushname}
Link : https://wa.me/${m.sender.split`@`[0]}
Bio : ${status.status}

*BOT INFO*
Owner : ${isCreator ? 'Yes' : 'No'}
Runtime : ${runtime(process.uptime())}
Libray : Baileys Multi-Device
Total Chat : ${anu.length} 
User Total : ${Object.keys(global.db.users).length}`, "LIST CLICK", "BlackTwin-WcB - MD", sections, { quoted: m})
}
            break
case 'grupmenu': {
	            group = `*GROUP MENU*
  
ï ${prefix}linkgroup
ï ${prefix}ephemeral [option]
ï ${prefix}grupinfo
ï ${prefix}setppgc [image]
ï ${prefix}setname _<text>_
ï ${prefix}setdesc _<text>_
ï ${prefix}group [option]
ï ${prefix}editinfo [option]
ï ${prefix}add @user
ï ${prefix}kick @user
ï ${prefix}hidetag _<text>_
ï ${prefix}tagall _<text>_
ï ${prefix}antilink [on/off]
ï ${prefix}antiwame [on/off]
ï ${prefix}mute [on/off]
ï ${prefix}promote @user
ï ${prefix}demote @user
ï ${prefix}vote _<text>_
ï ${prefix}devote
ï ${prefix}upvote
ï ${prefix}cekvote
ï ${prefix}hapusvote `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: group,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/groupmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}rules`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
	download = `*DOWNLOADER MENU*
  
ï ${prefix}tiktoknowm _<url>_
ï ${prefix}tiktokwm _<url>_
ï ${prefix}zippyshare 
ï ${prefix}mediafire _<url>_
ï ${prefix}tiktokmp3 _<url>_
ï ${prefix}instagram _<url>_
ï ${prefix}twitter _<url>_
ï ${prefix}twittermp3 _<url>_
ï ${prefix}facebook _<url>_
ï ${prefix}pinterestdl _<url>_
ï ${prefix}ytmp3 _<url>_
ï ${prefix}ytmp4 _<url>_
ï ${prefix}getmusic _<query>_
ï ${prefix}getvideo _<query>_
ï ${prefix}umma _<url>_
ï ${prefix}joox _<query>_
ï ${prefix}soundcloud _<url>_`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: download,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/downloadmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            case 'searchmenu': {
            	serachmenu = `*SEARCH MENU*
  
ï ${prefix}play _<query>_
ï ${prefix}yts _<query>_
ï ${prefix}google _<query>_
ï ${prefix}gimage _<query>_
ï ${prefix}pinterest _<query>_
ï ${prefix}wallpaper _<query>_
ï ${prefix}wikimedia _<query>_
ï ${prefix}ytsearch _<query>_
ï ${prefix}ringtone _<query>_`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: serachmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/searchmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
	randommenu = `*RANDOM MENU*
  
ï ${prefix}coffe
ï ${prefix}quotesanime
ï ${prefix}motivasi
ï ${prefix}couple
ï ${prefix}anime
ï ${prefix}waifu
ï ${prefix}hinata
ï ${prefix}mikasa
ï ${prefix}husbu
ï ${prefix}neko
ï ${prefix}shinobu
ï ${prefix}megumin`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: randommenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/randommenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'imagemenu': {
	imagemenu = `*IMAGE MENU*
  
ï ${prefix}anime
ï ${prefix}waifu
ï ${prefix}husbu
ï ${prefix}neko
ï ${prefix}shinobu
ï ${prefix}megumin`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: imagemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/imagemenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'funmenu': {
	funmenu = `*FUN MENU*
  
ï ${prefix}halah
ï ${prefix}hilih
ï ${prefix}huluh
ï ${prefix}heleh
ï ${prefix}holoh
ï ${prefix}jadian
ï ${prefix}jodohku
ï ${prefix}delttt
ï ${prefix}tictactoe
ï ${prefix}family100
ï ${prefix}tebak [option]
ï ${prefix}math [mode]
ï ${prefix}suitpvp [@tag]`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: funmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/funmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'voicemenu': {
	voicemenu = `*VOICE CHANGER*
	
ï ${prefix}bass
ï ${prefix}blown
ï ${prefix}deep
ï ${prefix}earrape
ï ${prefix}fast
ï ${prefix}fat
ï ${prefix}nightcore
ï ${prefix}reverse
ï ${prefix}robot
ï ${prefix}slow
ï ${prefix}tupai`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: voicemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/voicemenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'religionmenu': {
	religionmenu = `*RELIGION MENU*
	
*Islamic:*
ï ${prefix}iqra
ï ${prefix}hadist
ï ${prefix}alquran
ï ${prefix}juzamma
ï ${prefix}tafsirsurah

*Kristian:*
ï ${prefix}alkitab`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: religionmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/religionmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'immageemenu':  {
	immageemenu = `*IMAGE HIBURAN*

ï ${prefix}meme
ï ${prefix}ppcouple
ï ${prefix}darkjoke`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: immageemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/immageemenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tollsmenu': {
	toolsmenu = `*TOLLS MENU*

ï ${prefix}ssweb-hp
ï ${prefix}ssweb-pc
ï ${prefix}translate`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: toolsmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/toolsmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

case 'primbonmenu': {
	primbonmenu = `*PRIMBON MENU*
  
ï ${prefix}nomorhoki
ï ${prefix}artimimpi
ï ${prefix}artinama
ï ${prefix}ramaljodoh
ï ${prefix}ramaljodohbali
ï ${prefix}suamiistri
ï ${prefix}ramalcinta
ï ${prefix}cocoknama
ï ${prefix}pasangan
ï ${prefix}jadiannikah
ï ${prefix}sifatusaha
ï ${prefix}rezeki
ï ${prefix}pekerjaan
ï ${prefix}nasib
ï ${prefix}penyakit
ï ${prefix}tarot
ï ${prefix}fengshui
ï ${prefix}haribaik
ï ${prefix}harisangar
ï ${prefix}harisial
ï ${prefix}nagahari
ï ${prefix}arahrezeki
ï ${prefix}peruntungan
ï ${prefix}weton
ï ${prefix}karakter
ï ${prefix}keberuntungan
ï ${prefix}memancing
ï ${prefix}masasubur
ï ${prefix}zodiak
ï ${prefix}shio`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: primbonmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/primbonmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'convertmenu': {
	convertmenu = `*CONVERT MENU*
  
ï ${prefix}toimage
ï ${prefix}removebg
ï ${prefix}sticker
ï ${prefix}emojimix _<üòé + ‚ù§Ô∏è>_
ï ${prefix}tovideo
ï ${prefix}togif
ï ${prefix}tourl
ï ${prefix}tovn
ï ${prefix}tomp3
ï ${prefix}toaudio
ï ${prefix}ebinary
ï ${prefix}dbinary
ï ${prefix}styletext
ï ${prefix}ttp 
ï ${prefix}attp 
ï ${prefix}smeme
ï ${prefix}smeme2`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: convertmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/convertmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'nocategorymenu': {
	nocategorymenu = `*MAIN MENU*
  
ï ${prefix}ping
ï ${prefix}owner
ï ${prefix}menu
ï ${prefix}delete
ï ${prefix}infochat
ï ${prefix}quoted
ï ${prefix}listpc
ï ${prefix}listgc
ï ${prefix}tqtt
ï ${prefix}listonline`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: nocategorymenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/nocategorymenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'ephotomenu': {
	ephotomenu = `*EPHOTO MENU*

ï ${prefix}ffcover
ï ${prefix}crossfire
ï ${prefix}galaxy
ï ${prefix}glass
ï ${prefix}neon
ï ${prefix}beach
ï ${prefix}blackpink
ï ${prefix}igcertificate
ï ${prefix}ytcertificate`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: ephotomenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/ephotomenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'textpromenu': {
	textpromenu = `*TEXT PRO MENU*

ï ${prefix}candy
ï ${prefix}3dchristmas
ï ${prefix}sparklechristmas
ï ${prefix}deepsea
ï ${prefix}scifi
ï ${prefix}rainbow
ï ${prefix}waterpipe
ï ${prefix}spooky
ï ${prefix}pencil
ï ${prefix}circuit
ï ${prefix}discovery
ï ${prefix}metalic
ï ${prefix}fiction
ï ${prefix}demon
ï ${prefix}transformer
ï ${prefix}berry
ï ${prefix}thunder
ï ${prefix}magma
ï ${prefix}3dstone
ï ${prefix}neonlight
ï ${prefix}glitch
ï ${prefix}harrypotter
ï ${prefix}brokenglass
ï ${prefix}papercut
ï ${prefix}watercolor
ï ${prefix}multicolor
ï ${prefix}neondevil
ï ${prefix}underwater
ï ${prefix}graffitibike
ï ${prefix}snow
ï ${prefix}cloud
ï ${prefix}honey
ï ${prefix}ice
ï ${prefix}fruitjuice
ï ${prefix}biscuit
ï ${prefix}wood
ï ${prefix}chocolate
ï ${prefix}strawberry
ï ${prefix}matrix
ï ${prefix}blood
ï ${prefix}dropwater
ï ${prefix}toxic
ï ${prefix}lava
ï ${prefix}rock
ï ${prefix}bloodglas
ï ${prefix}hallowen
ï ${prefix}darkgold
ï ${prefix}joker
ï ${prefix}wicker
ï ${prefix}firework
ï ${prefix}skeleton
ï ${prefix}blackpink
ï ${prefix}sand
ï ${prefix}glue
ï ${prefix}1917
ï ${prefix}leaves`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: textpromenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/textpromenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
	databasemenu = `*DATABASE MENU*
  
ï ${prefix}setcmd
ï ${prefix}listcmd
ï ${prefix}delcmd
ï ${prefix}lockcmd
ï ${prefix}addmsg
ï ${prefix}listmsg
ï ${prefix}getmsg
ï ${prefix}delmsg`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: databasemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/databasemenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'anonymouschatmenu': {
	anonymouschatmenu = `*ANONYMOUS MENU*
	
ï ${prefix}anonymous
ï ${prefix}start
ï ${prefix}next
ï ${prefix}keluar
ï ${prefix}sendkontak`
	  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anonymouschatmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/anonymouschatmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'sistemmenu': {
	sistemmenu = `*SYSTEM MENU*
	
ï ${prefix}antilink On/Off
ï ${prefix}mute On/Off
ï ${prefix}antiwame On/Off`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: sistemmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/sistemmenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'ownermenu': {
  	ownermenu = `*OWNER MENU*
  
ï ${prefix}chat [option]
ï ${prefix}join [link]
ï ${prefix}leave
ï ${prefix}block @user
ï ${prefix}unblock @user
ï ${prefix}bcgroup _<text>_
ï ${prefix}bcall _<text>_
ï ${prefix}bcimg _<text>_
ï ${prefix}bcvidio _<text>_
ï ${prefix}bcaudio _<text>_
ï ${prefix}setppbot [image]
ï ${prefix}setexif
ï ${prefix}shutdown
ï ${prefix}restart
ï ${prefix}setmenu [option]
ï ${prefix}ban @user
ï ${prefix}unban @user
ï ${prefix}autobio On/Off
ï ${prefix}autoread On/Off
ï ${prefix}autoketik On/Off`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: ownermenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/ownermenu.jpg')},
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'back to menu',
                                    id: `${prefix}command`
                                }           
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tqtt': 
replay(`Thanks To 
DikaArdnt.
Ipul.
Adan
Juna Bot
KurrXd
Dan All Friend Yang Membantu Merakit Sc ini !!!`)
break
if (budy.includes("cekprefix")){
	replay(` Prefix Pada Bot Saat Ini Adalah ${prefix} `)
	}
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})