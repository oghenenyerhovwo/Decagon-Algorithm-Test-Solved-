// # Challenge 5

// The Morse code encodes every character as a sequence of "dots" and "dashes".

// For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−.

// The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words.

// For example, the message `Decadev` in Morse code is -.. . -.-. .- -.. . ...-

// NOTE: Extra spaces before or after the code have no meaning and should be ignored. In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example.

// ```js
// decodeMorse("-.. . -.-. .- -.. . ...-");
// //should return "DECADEV"
// ```

// Use the object `MORSE_CODE` given to you in your code to translate input morse code to regular texr.



//DO NOT EDIT THIS OBJECT
//ONLY USE IT IN YOUR CODE TO TRANSLATE
//MORSE SYMBOLS TO REGULAR TEXT
const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
}

Object.freeze(MORSE_CODE)

function morse(text) {
    const inputString = text.trim()
    let outputString = ""
    let characterCode = ""
    for (let index = 0; index < inputString.length; index++) {
      if (inputString[index] === " ") {
        outputString += MORSE_CODE[characterCode]
        characterCode= ""
      } else if(index !== inputString.length -1 && inputString[index] === " " && inputString[index + 1] === " " && inputString[index + 2] === " "){
        outputString += " "
      } else{
        characterCode += inputString[index]
      }
      
    }

    return outputString += MORSE_CODE[characterCode]
}

const test = "-.. . -.-. .- -.. . ...-"

console.log(morse(test))

module.exports = morse
