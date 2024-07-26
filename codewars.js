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

const humanReadable = (seconds) => {
	let hours = "00";
	let minutes = "00";
	let second = "00";
	let temp;
	let tempArr;
	if (seconds >= 3600) {
		temp = (seconds / 3600).toString();
		tempArr = temp.split(".");
		hours = tempArr[0];
		temp = tempArr[1] * 3600;
		tempArr = temp.split(".");
		minutes = tempArr[0];
		second = tempArr[1];
	} else if (seconds >= 60 && seconds < 3599) {
		temp = seconds / 60;
		temp = tempArr[1] * 3600;
		tempArr = temp.split(".");
		minutes = tempArr[0];
		second = tempArr[1];
	} else {
		second = seconds;
	}
	let arr = [hours, minutes, second];
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].toString().length);
		if (arr[i].length != 2) {
			arr.splice(i, 1, "0" + arr[i]);
		}
		[hours, minutes, second] = arr;
	}
	return hours + ":" + minutes + ":" + second;
};

const pigIt = (str) => {
	const arr = str.split(" ");
	let result = "";
	let regex = /[^a-zA-Z0-9]/g;
	for (let i = 0; i < arr.length; i++) {
		let string = arr[i];
		let firstChar = string.slice(0, 1);
		let rest = string.slice(1);
		if (regex.test(string) === true) {
			result += " " + rest + firstChar + "ay";
		} else {
			result += " " + rest + firstChar;
		}
	}
	return result.trim();
};

const isPrime = (num) => {
	if (num <= 1) return false;

	for (let i = 2; i < num; i++) {
		if (num % i == 0) return false;
	}
	return true;
};

const twoSum(numbers, target){
	return [0,1];
}


const zeros = (n) =>{
	if (n < 0) // Negative Number Edge Case
	return -1;

	// Initialize result
	let count = 0;

	// Keep dividing n by powers of
	// 5 and update count
	for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
		count += Math.floor(n / i);

 return count;


}