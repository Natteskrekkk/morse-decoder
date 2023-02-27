const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*****': ' '
};

function decode(expr) {
    // write your solution here
    let text = "";
    for (let end = 10; end <= expr.length; end += 10) {
        let start = end - 10;
        let substring = expr.substring(start, end);
        let morse = toMorse(substring);
        let letter = toLetter(morse);
        text += letter;
    }
    return text;
}

function toMorse(group) {
    let morse = "";
    for (let end = 2; end <= group.length; end += 2) {
        let start = end - 2;
        let signDigits = group.substring(start, end);
        let sign = toSign(signDigits);
        morse += sign;
    }
    return morse;
}

function toSign(digits) {
    if (digits === '00') {
        return ""
    } else if (digits === '10') {
        return "."
    } else if (digits === '11') {
        return "-"
    } else if (digits === '**') {
        return "*"
    }
}

function toLetter(morse) {
    return MORSE_TABLE[morse];
}


module.exports = {
    decode
}