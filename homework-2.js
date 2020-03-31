// 1
function getLargerNumbers1(arr, number) {
	newArr = [];
	arr.forEach( resp => {
		if(resp > number) newArr.push(resp)
	})
	if (newArr.length === 0) return "Such values do not exist."
	else return newArr;
}

function getLargerNumbers2(arr, number) {
	let j = 0;
	for(let i = 0; i < arr.length; i++) {
        if(arr[i] > number) {
            arr[j] = arr[i]
            j++
        } 
    }
	arr.splice(j, arr.length - j);
	if (arr.length === 0) return "Such values do not exist."
	else return arr;
}

// 2
function getEvenDigitNumbers(a, b) {
	result = [];
	while(a <= b) {
		let evenDigitCount = 0, num = a.toString();
		for(let i = 0; i < num.length; i++) {
			if(num[i] % 2 !== 0) {
				a++
                break;
 			} else {
				evenDigitCount++
			}
		}
		if(evenDigitCount == num.length) {
			result.push(a);
			a++
		}
	}
    if(result.length) {
		return result.toString()
	} else {
		return "Such numbers does not exist."
	}
}

// 3
function findIndex(arr) {
	let isViolated = false, result;
	for(let i = 0, j = 1; i < arr.length; i++, j++) {
		if(arr[j] < arr[i]) {
			isViolated = true;
            result = arr.indexOf(arr[j])
            break;
		}
	}
	if(isViolated) {
		return result;
	} else {
		return -1;
	}
}

// 4
function largestProduct(arr) {
	let result = -Infinity;
	arr.forEach((o, index) => {
		if(o * (arr[index + 1]) > result) {
			result = o * (arr[index + 1])
		}
	})
	return result;
}

// 5
function getCount1(arr) {
	let min = Math.min(...arr), max = Math.max(...arr); 
	let totalCount = max - min - 1;
	return totalCount - (arr.length - 2);
}

// 6
function sum(arr) {
	arr.forEach((o, index) => {
		let sum = 0;
		o.forEach(resp => {
			sum += resp
		})
		arr[index] = sum;
	})
	return arr;
}

// 7
function getEvenNumbers(arr) {
	let newArr = [];
	arr.forEach(o => {
		if(o % 2 === 1) newArr.push(o);
	})
	newArr.forEach((resp, index) => {
		newArr[index] = resp * newArr.length
	})
	return newArr
}

