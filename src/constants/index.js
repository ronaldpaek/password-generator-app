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

export const labels = [
	'Include Uppercase Letters',
	'Include Lowercase Letters',
	'Include Numbers',
	'Include Symbols'
];

export const strengths = ['', 'TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

export const generateRandomNumber = size => {
	return Math.floor(Math.random() * size);
};

export const getPasswordStrength = (categories, characters) => {
	if (
		categories.includes('numbers') &&
		categories.includes('symbols') &&
		categories.includes('lowercase') &&
		categories.includes('uppercase')
	) {
		if (characters < 6) {
			return 1;
		} else if (characters < 9) {
			return 2;
		} else if (characters < 11) {
			return 3;
		} else {
			return 4;
		}
	} else if (
		(categories.includes('numbers') &&
			categories.includes('lowercase') &&
			categories.includes('uppercase')) ||
		(categories.includes('symbols') &&
			categories.includes('lowercase') &&
			categories.includes('uppercase'))
	) {
		if (characters < 6) {
			return 1;
		} else if (characters < 9) {
			return 2;
		} else if (characters < 11) {
			return 3;
		} else {
			return 4;
		}
	} else if (
		categories.includes('lowercase') &&
		categories.includes('uppercase')
	) {
		if (characters < 7) {
			return 1;
		} else if (characters < 10) {
			return 2;
		} else if (characters < 12) {
			return 3;
		} else {
			return 4;
		}
	} else if (
		categories.includes('lowercase') ||
		categories.includes('uppercase')
		) {
		if (characters < 8) {
			return 1;
		} else if (characters < 11) {
			return 2;
		} else if (characters < 14) {
			return 3;
		} else {
			return 4;
		}
	} else if (categories.includes('numbers') || categories.includes('symbols')) {
		if (characters < 11) {
			return 1;
		} else if (characters < 16) {
			return 2;
		} else {
			return 3;
		}
	}
};
