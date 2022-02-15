/**
* Please Jangan Di Hapus Info Dan Tq To Nya
**/

/**
* Create By Zero YT7
* Contact Me on wa.me/6285157740529
* Follow Me On All Sosial Media
* Instagram : @Zero_YT7
* Tiktok : @_zeroyt7
* Github : Zero-YT7
* Youtube : Zero YT7
**/

/**
* Thanks To
* Allah S.W.T
* Ortu
* Zero YT7
* Dhika Ardiant
* All Creator Bot
* All Subscriber Ku
**/
require('../command/config')
var { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@danielteodoro/baileys-md')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var { fromBuffer } = require('file-type')
var path = require('path')
var os = require('os')
var request = require('request')
const cheerio = require('cheerio')
var speed = require('performance-now')
var { performance } = require('perf_hooks')
var { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, webp2mp4File, upload1, upload2 } = require('../message/myfunc')
const { tiktokdownload } = require('../message/tiktokD.js')
var database = require('../json/database.json')
var simbol = '»'
var setting = require('../json/setting.json')
let {
ownername,
ownernomer,
myweb,
botname,
donasi
} = setting
const https = require('https');
const agent = new https.Agent({  
  rejectUnauthorized: false
});
const { y2mateA, y2mateV } = require('../message/ytdl.js')
lol = 'rey2k21'
xteam = 'benniismaelapikey'
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, m, chatUpdate) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
//var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()   
var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	     
var isGroup = m.key.remoteJid.endsWith('@g.us')
var sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
var fromSender = sender.split("@")[0]
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var isCreator = [zeroyt7.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == zeroyt7.user.id ? true : false
var isOwner = ownernomer.includes(m.sender)
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var groupMetadata = m.isGroup ? await zeroyt7.groupMetadata(m.chat).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
var isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

//━━━━━━━━━━━━━━━[ STATUS BOT ]━━━━━━━━━━━━━━━━━//

var used = process.memoryUsage()
var cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
var cpu = cpus.reduce((last, cpu, _, { length }) => {
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

//━━━━━━━━━━━━━━━[ SELF AND PUBLIC ]━━━━━━━━━━━━━━━━━//

if (!zeroyt7.public) {
if (!m.key.fromMe) return 
}

//━━━━━━━━━━━━━━━[ CONSOLE MESSAGE ]━━━━━━━━━━━━━━━━━//

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ ozan ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
        
//━━━━━━━━━━━━━━━[ SEND MESSAGE ]━━━━━━━━━━━━━━━━━//

var sendMess = (from, teks) => {
return zeroyt7.sendMessage(from, { text: teks })
}
var sendFileFromUrl = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url, { httpsAgent: agent })
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return zeroyt7.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return zeroyt7.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "video"){
return zeroyt7.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "audio"){
return zeroyt7.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
} else {
api = await getBuffer(url)
apii = await fromBuffer(api) || { ext: 'error' }
return zeroyt7.sendMessage(m.chat, { document: api, mimetype: mime, fileName: `${caption}.${apii.ext}`, mentions: men ? men : []}, {quoted: m })
}
}

zeroyt7.sendReadReceipt(m.chat, sender, [m.key.id])        

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync('./image/zeroyt7.jpg'), surface: 200, message: `© ZaBot`, orderTitle: pushname, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//
        
switch(command) {
case 'tourl': {
    m.reply(mess.wait)
    let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
    if (/image/.test(mime)) {
        let anu = await upload1(media)
        m.reply(util.format(anu))
    } else {
    	m.reply('reply gambar')
    }
    await fs.unlinkSync(media)
}
break

case 'tiktok':
case 'tt':
if (!q) throw 'linknya cuy'
but = [{ index: 1, quickReplyButton: {
	displayText: `Watermark`, id: `.tiktokwm ${q}` }
}, { index: 1, quickReplyButton: { displayText: `noWatermark`, id: `.tiktoknowm ${q}` }
}, { index: 2, quickReplyButton: { displayText: `audio`, id: `.tiktokaudio ${q}` }
}]
zeroyt7.sendMessage(m.chat, {text:`⭓Download Menu\nhai bro ${pushname}\nsilahkan di pilih`,templateButtons:but})
break
case 'tiktokwm':
if (!text) throw 'masukan link'
api = await tiktokdownload(q)
m.reply('downloading')
sendFileFromUrl(m.chat, api.wm)
break
case 'tiktoknowm':
if (!text) throw 'masukan link'
api = await tiktokdownload(q)
m.reply('downloading')
sendFileFromUrl(m.chat, api.nowm)
break
case 'tiktokaudio':
if (!text) throw 'masukan link'
api = await tiktokdownload(q)
m.reply('downloading')
buf = await getBuffer(api.audio)
sendFileFromUrl(m.chat, api.audio)
break
case 'play': case 'yts': case 'yt': case 'ytsearch':
const ytsr = require('@distube/ytsr')
if (!text) throw 'masukan query'
var api = await ytsr(q)
res = api.items[0]
menuBut = [{index: 1,quickReplyButton: {displayText: 'audio',id: `.ytmp3 ${res.url}`}}, {index: 2,quickReplyButton: {displayText: 'video',id: `.ytmp4 ${res.url}`}}]
hh = await getBuffer(res.thumbnail)
await zeroyt7.sendMessage(m.chat, { caption: `⭓Download Menu
*_${res.name}_*
_${res.uploadedAt}_`,location: {jpegThumbnail: hh},templateButtons: menuBut,footer: pushname},)
break
case 'ytmp3': case 'mp3': case 'yta': {
  if (!q) throw 'mana linknya?'
  m.reply('wait')
  apis = await y2mateA(q)
  api = apis[0]
  m.reply(`downloading 
*size:* ${api.size}
*quality:* ${api.quality}`)
  buf = await getBuffer(api.link)
  zeroyt7.sendMessage(m.chat, { document: buf, mimetype: 'audio/mpeg', fileName: api.output}, {quoted:m})
}
break
case 'ytmp4': case 'mp4': case 'ytv': {
  if (!q) throw 'mana linknya?'
  m.reply('wait')
  apis = await y2mateV(q)
  api = apis[0]
  m.reply(`downloading 
*size:* ${api.size}
*quality:* ${api.quality}`)
  buf = await getBuffer(api.link)
  zeroyt7.sendMessage(m.chat, { document: buf, mimetype: 'video/mp4', fileName: api.output}, {quoted:m})
}
break
case 'menu': case 'help': case 'm': case '?': {
txt =`⭓Group Menu
${simbol} ${prefix}revoke
${simbol} ${prefix}add
${simbol} ${prefix}kick
${simbol} ${prefix}promote
${simbol} ${prefix}demote
${simbol} ${prefix}setname
${simbol} ${prefix}setprofile
${simbol} ${prefix}group
${simbol} ${prefix}linkgroup
${simbol} ${prefix}hidetag
${simbol} ${prefix}tagall

⭓Sticker Menu
${simbol} ${prefix}sticker
${simbol} ${prefix}togif
${simbol} ${prefix}tomp4
${simbol} ${prefix}toimage
${simbol} ${prefix}tourl

⭓Download Menu
${simbol} ${prefix}play
${simbol} ${prefix}ytmp3
${simbol} ${prefix}ytmp4
${simbol} ${prefix}tiktok
${simbol} ${prefix}tiktokwm
${simbol} ${prefix}tiktoknowm
${simbol} ${prefix}tiktokaudio

⭓Owner Menu
${simbol} ${prefix}block
${simbol} ${prefix}unblock
${simbol} ${prefix}eval
${simbol} ${prefix}public
${simbol} ${prefix}self
${simbol} ${prefix}ping
${simbol} ${prefix}owner`
m.reply(txt)
}
break

case 'revoke':
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin                                               
let link = await zeroyt7.groupRevokeInvite(m.chat)
await m.reply( `*New Link For ${groupName}* :\n https://chat.whatsapp.com/${link}`)
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw 'Text ?'
await zeroyt7.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setprofile': case 'setpp': {
if (!isCreator && !m.key.fromMe) throw mess.owner
if (!quoted) throw 'Reply Image'
if (!/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
if (m.isGroup && isBotAdmins && isGroupAdmins) {
await zeroyt7.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
await fs.unlinkSync(media)
} else if (isCreator) {
await zeroyt7.updateProfilePicture(zeroyt7.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
await fs.unlinkSync(media)
}
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw 'Masukkan value open/close'
if (args[0].toLowerCase() === 'close') {
await zeroyt7.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open') {
await zeroyt7.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await zeroyt7.groupInviteCode(m.chat)
zeroyt7.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'hidetag':
if (!m.isGroup) throw mess.group
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
var group = await zeroyt7.groupMetadata(m.chat)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetag = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: m
}
zeroyt7.sendMessage(m.chat, optionshidetag, text)
break
case 'tagall': case 'infoall':
if (!m.isGroup) throw mess.group
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let startnum = 1
let teks = `*_Tag All Member_*\n*Pesan : ${q ? q : '-'}*\n\n`
for (let mem of groupMembers) {
teks += `${startnum++}. @${mem.id.split('@')[0]}\n`
}
teks += `\n⋙ ZaBot ⋘`
zeroyt7.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zeroyt7.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await zeroyt7.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await zeroyt7.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await zeroyt7.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'public': {
if (!isCreator && !m.key.fromMe) throw mess.owner
zeroyt7.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator && !m.key.fromMe) throw mess.owner
zeroyt7.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'ping': case 'botstatus': case 'statusbot': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
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
let vcard = `BEGIN:VCARD\n` // metadata of the contact card
+ `VERSION:3.0\n`
+ `N:;${pushname}.;;;`
+ `FN:${pushname}.\n` // full name
+ `ORG:${pushname};\n` // the organization of the contact
+ `TEL;type=CELL;type=VOICE;waid=${fromSender}:${fromSender}\n` // WhatsApp ID + phone number
+ `END:VCARD`
let msg = await zeroyt7.sendMessage(m.chat, { contacts: { displayName: `${pushname}`, contacts: [{ vcard }] } }, { quoted: m })
let buttons3 = [
{buttonId: `.menu`, buttonText: {displayText: '►BACK MENU '}, type: 1},
]
let buttonMessage3 = {
text: `DONT NOT SPAM OWNER!! `,
footerText: 'Press The Button Below',
buttons: buttons3,
headerType: 2
}
zeroyt7.sendMessage(m.chat, buttonMessage3, { quoted: m })                        
}
break
case 'eval': {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
break
case 'block': {
if (!isCreator && !m.key.fromMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator && !m.key.fromMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'sc': {
m.reply('lol')
}
break

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
mas = String(err)
m.reply(mas)
}
}

if (budy.startsWith('$')) {
if (!isCreator && !m.key.fromMe) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
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
