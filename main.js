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
      if (i===0){
        sum+=matrix[i][inc]
      } else if (i===1 && matrix[i-1][inc]!==0){
        sum += matrix[i][inc]
      } else if (i === 2 && matrix[i - 1][inc] !== 0 && matrix[i-2][inc]!==0){
        sum +=matrix[i][inc]
      }
    }
  }
  return sum
}

function allLongestStrings(inputArray) {
  let largest = 0;
  let newArr = [];
  for (let i = 0; i<inputArray.length; i++){
    if (inputArray[i].length>largest){
      largest = inputArray[i].length
    }
  }
  for (let inc = 0; inc<inputArray.length; inc++)
    if (inputArray[inc].length===largest){
      newArr.push(inputArray[inc])
    }
    return newArr
}

  function commonCharacterCount(s1, s2) {
    var count = 0;
    s1 = s1.split('');
    s2 = s2.split('');

    s1.forEach(e => {
      if (s2.includes(e)) {
        count++;
        s2.splice(s2.indexOf(e), 1);
      }
    });
    return count;
  }

function isLucky(n) {
  let half1Sum = 0;
  let half2Sum = 0;
  n = n.toString();
  let half1Length = (n.length/2);
  let half2Length = n.length;
  let half1 = n.slice(0, half1Length);
  let half2 = n.slice(half1Length, half2Length);
  half1 = half1.split("")
  half2 = half2.split("")
  for (let i = 0; i<half1.length; i++){
    half1.splice(i,1, parseInt(half1[i]))
    half1Sum +=half1[i];
  }
  for (let inc = 0; inc < half2.length; inc++) {
    half2.splice(inc, 1, parseInt(half2[inc]))
    half2Sum += half2[inc];
  }
  if (half1Sum === half2Sum) {
    return true
  } else {
    return false
  }
}

function sortByHeight(a){
  const tempArray = [];
  const indexArray = []
  for (let i = 0; i<a.length; i++){
    if (a[i] ===-1){
      continue
    }
    tempArray.push(a[i])
    indexArray.push(i)
  }
  tempArray.sort(function (a, b) {
    return a - b;
  })
  for (let inc = 0; inc < indexArray.length; inc++) {
    a.splice(indexArray[inc], 1, tempArray[inc])
  }
  return a
}


function reverseInParentheses(s) {
  if (s.includes('(')) {
    return reverseInParentheses(reverseOnce(s));
  } else {
    return s;
  }
}

function reverseOnce(s) {
  var regexp = /\(([^()]*)\)/i;
  var subStr = regexp.exec(s)[1];
  subStr = subStr.split('').reverse().join('');
  return s.replace(regexp, subStr)
}

function alternatingSums(a) {
  let teamA = []
  let teamASum = 0;
  let teamB = []
  let teamBSum = 0;
  let returnArray = []
  for (let i = 0; i<a.length; i+=2){
    teamA.push(a[i]);
  }
  for (let i =1; i<a.length; i+=2){
    teamB.push(a[i])
  }
  teamA.forEach(n => teamASum += n)
  teamB.forEach(n => teamBSum += n)

  returnArray.push(teamASum)
  returnArray.push(teamBSum)
  return returnArray

}

// var exArray = ["abc", "ded"] needs to become ["*****", "*abc*", "*ded*", "*****"]

function addBorder(picture) {
  const array = picture.slice();
  let length = array[0].length + 2;
  let front = "";
  let end = "";
  for (let i = 0; i < array.length; i++) {
    array[i] = `*${array[i]}*`
  }
  for (let inc = 0; inc < length; inc++) {
    front = front + "*";
    end = end + "*"
  }
  array.unshift(front)
  array.push(end)
  return array
}

function areSimilar(a, b){
  let count = 0;
  let subCount = 0;
  let first = null;
  let firstIndex = null;
  let second = null;
  let secondIndex = null;
  const arr = b.slice();
  for (let i =0; i<a.length; i++){
    if(a[i]===arr[i]){
      count++;
      if (count === a.length) {
        return true;
      }
    } else {
      if (first === null){
        first = arr[i];
        firstIndex = i;
      } else if(second===null) {
        second = arr[i];
        secondIndex = i;
        arr.splice(firstIndex, 1, second);
        arr.splice(secondIndex, 1, first);
        subCount = 0
        for (let inc = 0; inc<a.length; inc++){
          if (a[inc]===arr[inc]){
            subCount++;
            if (subCount ===a.length){
              console.log(subCount)
              return true;
            }
          }
        }
      } else{
        return false
      }
    }
  }
  return false;
}

function arrayChange(inputArray) {
  let count = 0;
  for (let i=1; i<inputArray.length;i++){
    while(inputArray[i-1]>=inputArray[i]){
      inputArray[i]+=1;
      count++
    }
  }
  return count;
}

function palindromeRearranging(inputString) {
  const charCounts = [...inputString].reduce((counts, char) => {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
    return counts;
  }, {});

  return Object.values(charCounts).filter(count => count % 2 !== 0).length <= 1;
}

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourStrongest = yourLeft;
  let friendStrongest = friendsLeft;
  if (yourStrongest<yourRight){
    yourStrongest=yourRight;
  }
  if (friendStrongest<friendsRight){
    friendStrongest=friendsRight
  }
  if(yourStrongest===friendStrongest && (yourLeft+yourRight===friendsLeft+friendsRight)){
    return true;
  } else {
    return false;
  }
}

function arrayMaximalAdjacentDifference(inputArray) {
  let difference = 0;
  for (let i=1; i<inputArray.length; i++){
    if (Math.abs(inputArray[i - 1] - inputArray[i]) < Math.abs(inputArray[i] - inputArray[i + 1]) && difference < Math.abs(inputArray[i] - inputArray[i + 1])){
        difference = Math.abs(inputArray[i] - inputArray[i + 1]);
    } else if (Math.abs(inputArray[i - 1] - inputArray[i]) > Math.abs(inputArray[i] - inputArray[i + 1]) && difference < Math.abs(inputArray[i - 1] - inputArray[i])) {
      difference = Math.abs(inputArray[i - 1] - inputArray[i])
    }
  }
  return difference;
}

function isIPv4Address(inputString) {
  let splitString = inputString.split(".");
  console.log(splitString)
  if (splitString.length!==4){
    return false;
  } else {
    for (let i=0; i<splitString.length; i++){
      if (splitString[i].length > 1){
        if (splitString[i][0] === "0"){
          return false
        }
      }
      if (!(/^\d+$/.test(splitString[i]))){
        return false;
      } else if (parseInt(splitString[i])<0 || parseInt(splitString[i])>255){
        return false
      }
    }
    return true;
  }
}

function avoidObstacles(inputArray) {
  inputArray = inputArray.sort((a,b) => a-b);
    
    var i =1;
    while(!inputArray.every((element)=> element%i != 0)){
        i++;
    }
    return i; 
  
  // let orderedArray = inputArray.sort(function(a, b){return a-b})
  // let jump = orderedArray[0];
  // for (let i = 1; i<orderedArray.length; i++){
  //     while(orderedArray[i]+jump <= orderedArray[i+1]){
  //       console.log('i = ', i)
  //       console.log("jump = ", jump)
  //       jump ++
  //       }
  // }
  // return jump

}

let image = [[1, 1, 1],
             [1, 7, 1],
             [1, 1, 1]];

// input: [[36,0,18,9,9,45,27], 
//         [27,0,254,9,0,63,90], 
//         [81,255,72,45,18,27,0], 
//         [0,0,9,81,27,18,45], 
//         [45,45,227,227,90,81,72], 
//         [45,18,9,255,9,18,45], 
//         [27,81,36,127,255,72,81]]

//  exprected output: [[82,73,48,25,31], 
//                     [77,80,57,32,32], 
//                     [81,106,88,68,42], 
//                     [44,96,103,89,45], 
//                     [59,113,137,126,80]]

function boxBlur(image){
  for (let i = 0; i<image.length; i++){
    for (let inc = 0; inc<image[i].length; inc++){
      console.log(image[i][inc])
    }
  }
}


