// Challenge 1

function bandingkanAngka(angka1, angka2) {
    if (angka2 > angka1) return true
    if (angka1 > angka2) return false
    if (angka1 == angka2) return -1
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
console.log('')

// Challenge 2

function balikKata(kata) {
    let reverse = ""
    for (let i = kata.length - 1; i >= 0; i--) {
        reverse += kata[i]
    }
    return reverse
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
console.log('')

// Challenge 3

function konversiMenit(menit) {
    if (menit < 60) {
        return `0:${menit}`
    } {
        return `${Math.floor(menit / 60)}:${menit % 60 < 10 ? `0${menit % 60}` : menit % 60}`
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log('')

// Challenge 4

function xo(str) {
    let paramX = 0
    let paramO = 0
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == 'x') {
            paramX += 1
        } else {
            paramO += 1
        }
    }
    if (paramX == paramO) {
        return true
    } {
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log('')

// Challenge 5

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


const dataHandling = (params) => {
    let dataHand = ''

    for (let i = 0; i < params.length; i++) {
        dataHand += `Nomor ID: ${params[i][0]}  \nNama Lengkap: ${params[i][1]} \nTTL: ${params[i][2]} ${params[i][3]} \nHobi: ${params[i][4]} \n \n`
    }
    return dataHand
}

console.log(dataHandling(input))

// Expected Result
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun