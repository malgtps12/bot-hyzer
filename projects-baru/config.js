/**
   * Create By adan.
   * Contact Me on wa.me/6289652903288
   * Follow https://github.com/ItsmeHndrr
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '043aa787f0',
}

// Other
global.owner = ['6289516353968'']
global.pemilik = ['6289516353968']
global.premium = ['6289516353968@s.whatsapp.net']
global.pengguna = 'MALL'
global.botnma = 'BOT MALL'
global.harga = 'Rp50.000'
global.atasreply = 'WLEWLEWLE' //BUAT REPLAY DI ATAS NYA ADA TEXT
global.atasreply2 = 'WLEWLEWLE' //BUAT REPLAY DI ATAS NYA ADA TEXT KE 2
global.webreply = '-' //URL DI ATAS REPLAY
global.webreply2 = '-' //URL BUAT DI ATAS REPLAY KE 2
global.melcanz = 'melcantik'
global.footer = 'Contact\nEmail: malganteng000@gmail.com\nContact: 62 895-1635-3968\nWebsite: -\nInstagram: https://instagram.com/xzdk.m\nGithub: https://github.com/ItsmeHndrr\nRegion: Indonesia, Aceh  ' //FooterText Biar Di Bawah Nya Ada Text 
global.web = '-' // Ubah Sama Lu Web Nya Bebas 
global.web2 = '-' //Ubah Jga Bebas Sama lu 
global.ganti = '-' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Github'
global.accestken = 'adann'
global.ownernma = 'MAL NO GAY'
global.packname = `• Owner: Mall
• Nomor: +62 895-1635-3968
• Packname: AGEN SECRET
• Authorname: Multi device
• Sticker by: Bot WhatsApp`
global.author = `                                                          \n`
global.sessionName = 'session.data'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'S u c c e s s',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_tunggu sebentar ga lama kaya dia_  ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "-",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
