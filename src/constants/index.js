const uppercase = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

const lowercase = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

export const characters = {
	uppercase,
	lowercase,
	numbers,
	symbols
};

export const generateRandomNumber = size => {
	return Math.floor(Math.random() * size);
};

export const getPasswordStrength = (categories, characters) => {
  if (categories.includes('numbers') && categories.includes('symbols') && categories.includes('lowercase' && categories.includes('uppercase'))) {
    if (characters.length < 6) {
      return 0;
    } else if (characters.length < 9) {
      return 1;
    } else if (characters.length < 11) {
      return 2;
    } else {
      return 3;
    }
  } else if (categories.includes('numbers') && categories.includes('lowercase' && categories.includes('uppercase'))) {
    
  }

};

export const strengths = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];
