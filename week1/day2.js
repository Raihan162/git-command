// Challenge 1 : Palindrome ✅

function palindrome(kata) {
    let palindromeWord = ''
    for (let i = kata.length - 1; i >= 0; i--) {
        palindromeWord += kata[i]
    }
    if (kata == palindromeWord) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


// Challenge 2 : Menghitung Jumlah Kata ✅

function hitungJumlahKata(kalimat) {
    let totalWord = 1
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == ' ') {
            totalWord++
        }
    }
    return totalWord
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


// Challenge 3 : Password Generator ✅

function changeVocals(str) {
    let output = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            output += 'b'
        } else if (str[i] == 'i') {
            output += 'j'
        } else if (str[i] == 'u') {
            output += 'v'
        } else if (str[i] == 'e') {
            output += 'f'
        } else if (str[i] == 'o') {
            output += 'p'
        } else if (str[i] == 'A') {
            output += 'B'
        } else if (str[i] == 'I') {
            output += 'J'
        } else if (str[i] == 'U') {
            output += 'V'
        } else if (str[i] == 'E') {
            output += 'F'
        } else if (str[i] == 'O') {
            output += 'P'
        } else {
            output += str[i]
        }
    }
    return output
}

function reverseWord(str) {
    let wordToReverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        wordToReverse += str[i]
    }
    return wordToReverse
}

function setLowerUpperCase(str) {
    let lowAlpha = 'abcdefghijklmnopqrstuvwxyz'
    let uppAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerUpperAlpha = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < lowAlpha.length; j++) {
            if (str[i] == lowAlpha[j]) {
                lowerUpperAlpha += str[i].toUpperCase()
            } else if (str[i] == uppAlpha[j]) {
                lowerUpperAlpha += str[i].toLowerCase()
            }
        }
    }
    return lowerUpperAlpha
}

function removeSpaces(str) {
    let noSpace = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            noSpace += str[i]
        }
    }
    return noSpace
}

function passwordGenerator(name) {
    // changeVocals(name)
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


// Challenge 4 : Melee Ranged Grouping

function meleeRangedGrouping(str) {
    let arrMelee = []
    let arrHero = []
    let arrMel = ''
    for (let i = 0; i < str.length; i++) {

    }
    return arrMelee
}

// TEST CASE

// console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []


// Challenge 5 :

function stringToArray(string) {
    let output = []
    let subArr1 = []
    // string length 17
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ',' || string[i + 1] === undefined) {
            // subArr1.push(string[i])
            output.push(subArr1)
            subArr1 = []
        } else if (string[i] !== ',') {
            subArr1.push(string[i])
        }
    }
    return output
}

console.log(stringToArray('aqrst,ukaei,ffooo'))

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray('qwer,tyui,asdf,ghjk'))

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]