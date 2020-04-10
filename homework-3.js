// 1

function oddDigits(number, numberClone = number) {
    if((numberClone % 10) % 2 !== 1 && numberClone) {
        return false 
    } else if(numberClone == 0 && number !== 0) {
        return true
    } else {
        numberInSrting = numberClone.toString();
        removeCheckedNumber = numberInSrting.substring(0, numberInSrting.length - 1);
        return oddDigits(number, removeCheckedNumber)
    }
}

// 2

function getMin2(arr, min = Infinity, arrClone = [...arr]) {
    if(arr.length == 0) return -1
    if(arr.length == 1 && arr[0] >= 0) return arr[0]
    if(arrClone[arrClone.length - 1] < min && arrClone[arrClone.length - 1] >= 0) min = arrClone[arrClone.length - 1]
    if(arrClone.length !== 1) {
        arrClone.splice(arrClone.length - 1, 1)   
        return getMin2(arr, min, arrClone)
    } else if(min == Infinity) {
        return -1
    } else {
        return min
    }
}

// 3 

function fibonacciSequence(number, arr = []) {
    switch(number) {
        case 0:
            return arr
        case 1:
            return [1]
        case 2: 
            return [1, 1]    
        default: 
            arr = fibonacciSequence(number - 1);
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            return arr
    }
}

// 4

function nestedArray2(arr, newArr = []) {
    if(!Array.isArray(arr[0])) {
        newArr.push(arr[0])
        if(arr.length !== 1) {
            arr.shift()
            nestedArray2(arr, newArr)
        } else {
            return newArr
        }
    } else if(Array.isArray(arr[0])){
        nestedArray2(arr[0], newArr)
        if(arr.length !== 1) {
            arr.shift()
            nestedArray2(arr, newArr)
        } else {
            return newArr   
        }
    }
    return newArr
}

// 5

function sumOfDigits(number, arrayOfDigits = Array.from(number.toString()), sum = 0) {
    sum += +arrayOfDigits[0];
    if(arrayOfDigits.length !== 1) {
        arrayOfDigits.shift()
        return sumOfDigits(number, arrayOfDigits, sum)
    } else if(sum.toString().length > 1) {
        return sumOfDigits(sum)
    } else {
        return sum
    }
}
