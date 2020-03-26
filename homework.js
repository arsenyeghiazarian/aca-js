function pictureX(size) {
    let board = "\n", boardLength = 2 * size - 1;
    if (size > 0) {
        for (let y = 0; y < boardLength; y++) {
          for (let x = 0; x < boardLength; x++) {
            if (x == y || x + y == boardLength - 1) {
              board += "*";
            } else {
              board += " ";
            }
          }
          board += "\n";
        }
        return board
    } else {
        return "number should be greater than 0"
    }
}

function  numberFrequency(arr) {
  let count = 0, obj = {};
  for (let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] == arr[j]) {
        count++
      } else {
        obj.arr[i] = 1 / arr.length
      }
    }
    obj.arr[i] = count / arr.length
    count = 0       
  }
  console.log(obj) 
}

function  numberFrequency(arr) {
  let count = 1, obj = {};
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] == arr[j]) {
        count++
      } 
    }
    if(!obj[arr[i]]) {
        obj[arr[i]] = count / arr.length 
    }
    count = 1       
  }
  return obj 
}

function getLongestWord(sentence) {
  let arr = [], word = "";
  for (let i = 0, index = 0; i <= sentence.length; i++) {
    if (sentence[i] !== " " && sentence.length !== i) {
      word += sentence[i]
    } else {
      arr[index] = word
      index++
      word = "";
    }
  }
  longestWord = arr[0]
  for (j = 1; j <= arr.length - 1; j++) {
    if(arr[j].length >= longestWord.length) {
      longestWord = arr[j]
    }
  }
  return longestWord
}

function characterSwitch(str) {
  let letter = "", arr = [], newStr = "";
  for(let i = 0; i < str.length;i ++) {
    arr[i] = str[i]
  }
  for(let j = 0, x = 2; j < arr.length && x < arr.length; j += 3, x += 3) {
    letter = arr[j]
    arr[j] = arr[x]
    arr[x] = letter
  } 
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i]
  }
  return newStr
}

function productOfNumbers(arr) {
  let bigestNumbers = [], prod = 1, numberOfPosArray = 0;
  for(let i = 0; i < arr.length; i++) {
    if(!Array.isArray(arr[i])) {
      return "Invalid Argument"
    } else {
      let negativeNumbers = [];
      for(let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] < 0) {
          negativeNumbers.push(arr[i][j])
        }  
      }
      if(negativeNumbers.length == 0) {
        numberOfPosArray++;
      } else if (negativeNumbers.length == 1){
        bigestNumbers.push(negativeNumbers[0])
      } else {
        for(let x = 0; x < negativeNumbers.length; x++){
          if(negativeNumbers[x] > negativeNumbers[x + 1]) {
            negativeNumbers[x + 1] = negativeNumbers[x]
          }
        }
        bigestNumbers.push(negativeNumbers[negativeNumbers.length - 1])
      }
    } 
  }
  if(numberOfPosArray == arr.length) {
    return "No negatives"
  }
  for(let x = 0; x < bigestNumbers.length; x++) {
    prod = prod * bigestNumbers[x]
  }
  return prod
}

function arraySubsets(arr) {
  let newArr = [];
  if(arr.length > 3) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1;j < arr.length; j++) {
        for(let x = j + 1; x < arr.length; x++) {
          newArr.push([arr[i], [arr[j], [arr[x]])
        }
      }
    }
    return newArr
  }
}






