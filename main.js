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
