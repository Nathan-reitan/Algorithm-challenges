function howMuchisTrue(array){
  let count = 0;
  if (array.length ===0){
    return count
  }
  for (let i =0; i<array.length; i++){
    if (array[i] === true){
      count +=1
    }
  }
  return count
}

function filterArray(arr){
  const newArr = [];
  for (let i = 0; i<arr.length; i++){
    if (Number.isInteger(arr[i])){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

function charCount(myChar, str) {
  let count = 0
  for (let i = 0; i<str.length; i++){
    if (str[i] === myChar){
      count++
    }
  }
  return count
}

function firstDuplicate(a){
  const newArray = []
  for (let i = 0; i < a.length; i++) {
    if (!newArray.includes(a[i]) && i === a.length - 1) {
      return -1
    } else if (!newArray.includes(a[i])) {
      newArray.push(a[i])
    } else {
      return a[i];
    }
  }
}

function centuryFromYear(year) {
  return Math.ceil(year/100);
}

function checkPalindrome(inputString) {
  let reverse = "";
  for (let i = inputString.length-1; i>=0; i--){
    reverse += inputString[i];
  }
  if (reverse === inputString){
    return true;
  } else {
    return false
  }
}

function adjacentElementsProduct(inputArray) {
  let product = null
  for (let i = 0; i<inputArray.length-1; i++){
    if (i===0){
      product = inputArray[i] * inputArray[i + 1]
    }
    if (inputArray[i] * inputArray[i + 1]>product){
      product = inputArray[i] * inputArray[i + 1]
    }
  }
  return product
}

function shapeArea(n) {
  let line1 = n + n - 1
  let area = line1
  for (let i = n-1; i>0; i--){
    area += (line1 - 2)*2
    line1 -=2
  }
  return area;
}

function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => a - b)
  var need = statues.reduce(function (acc, cur, ind, arr) {
    var diff = cur - arr[ind - 1];
    if (diff > 1) {
      var i = 1;
      while (i < diff) {
        acc.push(arr[ind - 1] + 1);
        i++;
      }
    }
    return acc;
  }, [])
  return need.length
}

function almostIncreasingSequence(sequence) {
  const size = sequence.length;
  let counter = 0;
  let cond1;
  let cond2;
  if (size ===2) return true;
  for (let i =0; i<size-1; i++){
    if (sequence[i+1]<=sequence[i]){
      counter++;
      if (i+2<size && sequence[i+2]<=sequence[i]){
        cond1 = true
      }
      if (i-1>=0&&sequence[i+1]<=sequence[i-1]){
        cond2 = true
      }
      if (cond1 && cond2 || counter>=2) return false
    }
  }
  return true
}

function matrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++){
    for (let inc = 0; inc<matrix[i].length; inc++){
      if (matrix[0][inc]!==0){
        sum += matrix[0][inc]
      }
      if (matrix[i][inc]===0){
        sum+1
      }

    }
    sum+1
    return true
  }
}
