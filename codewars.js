// 4000> param <0
const romanNumeralEncoder = (num) => {
	let string = num.toString();
	const array = string.split();
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
	const length = array.length;

	const checkNumber = (place, value) => {
		let returnValue;
		if (value < 4) {
			for (let i = 0; i < value; i++) {
				returnValue += one;
			}
			return returnValue;
		} else if (value === 4) {
			returnValue = one + five;
		} else if (4 < value < 9) {
			returnValue = five;
			for (let i = 5; i < value; i++) {
				returnValue += one;
			}
			return returnValue;
		} else {
			return (returnValue = one + ten);
		}
	};

	switch (length) {
		case 1:
			let number = parseInt(array[0]);
			return checkNumber(4, number);
		case 2:
		case 3:
		case 4:
	}
};
