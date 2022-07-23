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
};

function decode(expr) {
    // write your solution here
    let arr = expr.match(/.{1,10}/g);
    console.log(arr);
    let str = arr.map((item) => {
      let letter = item.replace(/00/g, "");
      letter = letter.replace(/10/g, ".");
      letter = letter.replace(/11/g, "-");
      letter = letter.replace("**********", " ");
      if (MORSE_TABLE.hasOwnProperty(letter)) {
        return MORSE_TABLE[letter];
      } else {
        return letter;
      }
    });
  
    return str.join("");
  }

module.exports = {
    decode
}