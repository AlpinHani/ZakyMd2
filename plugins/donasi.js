let handler =  m => m.reply(`
╭─「 Sewa 」
│ • 1 MINGGU  [5K]
│ • 1 BULAN   [10K]
│ • PERMANEN [15K]
╰────
╭─「 Payment/Pembayaran 」
│ • Gopay
│ • Dana
│ • Pulsa
│ • Allpayment (+1k)
│(Yang Belum Premium)
╰────


╭─「 Donasi 」
│ • Gopay [ ]
│ • Dana [ ]
│ • Pulsa [ ]
╰────
_*Tq Yang Udah Donasi*_
_*Biar Menjadi Berkembang*_

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi', 'sewa']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
