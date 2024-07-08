// 4000> param <0
const romanNumeralEncoder = (num) => {
	let string = num.toString();
	const array = string.split("");
	const thousand = "M";
	const hundred = "C";
	const fiveHundred = "D";
	const fifty = "L";
	const ten = "X";
	const five = "V";
	const one = "I";
	const ones = [one, five];
	const tens = [ten, fifty];
	const hundreds = [hundred, fiveHundred];
	const thousands = [thousand, null];
	const romanNumerals = [thousands, hundreds, tens, ones];
	let numeralOne;
	let numeralTen;
	let numeralHundred;
	let numeralThousand;
	const length = array.length;

	const checkNumber = (place, value) => {
		let returnValue;

		if (0 < value < 4) {
			returnValue = romanNumerals[place][0];
			for (let i = 1; i < value; i++) {
				returnValue += romanNumerals[place][0];
			}
			return returnValue;
		} else if (value === 4) {
			return (returnValue = romanNumerals[place][0] + romanNumerals[place][1]);
		} else if (4 < value < 9) {
			returnValue = romanNumerals[place][1];
			for (let i = 6; i <= value; i++) {
				returnValue += romanNumerals[place][0];
			}
			return returnValue;
		} else if (value === 9) {
			return (returnValue = romanNumerals[place][0] + romanNumerals[place + -1][0]);
		} else {
			return "";
		}
	};

	switch (length) {
		case 1:
			numeralOne = parseInt(array[0]);
			return checkNumber(3, numeralOne);
		case 2:
			numeralOne = parseInt(array[1]);
			numeralTen = parseInt(array[0]);
			return checkNumber(2, numeralTen) + checkNumber(3, numeralOne);
		case 3:
			numeralOne = parseInt(array[2]);
			numeralTen = parseInt(array[1]);
			numeralHundred = parseInt(array[0]);
			return checkNumber(1, numeralHundred) + checkNumber(2, numeralTen) + checkNumber(3, numeralOne);
		case 4:
			numeralOne = parseInt(array[3]);
			numeralTen = parseInt(array[2]);
			numeralHundred = parseInt(array[1]);
			numeralThousand = parseInt(array[0]);
			return (
				checkNumber(0, numeralThousand) +
				checkNumber(1, numeralHundred) +
				checkNumber(2, numeralTen) +
				checkNumber(3, numeralOne)
			);
	}
};

const moveZeros = (arr) => {
	const solution = arr.slice();
	for (let i = solution.length - 1; i >= 0; i--) {
		if (solution[i] === 0) {
			solution.splice(i, 1);
			solution.push(0);
		}
	}
	return solution;
};

// skipped for now.  need to learn binary
const countBits = (n) => {};

const findEvenIndex = (arr) => {
	const initialValue = 0;
	const arrSum = arr.reduce((acc, cur) => acc + cur, initialValue);
	if (arrSum === 0) {
		return 0;
	} else {
		for (let i = 1; i < arr.length + 1; i++) {
			let leftSum = arr.slice(0, i).reduce((acc, cur) => acc + cur);
			let rightSum = arr.slice(i + 1).reduce((acc, cur) => acc + cur);
			if (leftSum === rightSum) {
				return i;
			}
		}
		return -1;
	}
};

const spinWords = (string) => {
	const arr = string.split(" ");
	let solution = "";
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 4) {
			const word = arr[i].split("");
			let spin = word.reverse().toString().replace(",", "");
			solution += " " + spin;
		} else {
			solution += " " + arr[i];
		}
	}
	return solution.trim();
};

const humanReadable = (seconds) => {};
