// 1

function isArrUnique (arr) { 
    if(arr.length === 0) return 'array is empty'
    let set = new Set(arr);
    return set.size === arr.length
}

// 2

function sumOfQuadratic(arr) {
    return arr.reduce((t,c) => {
        if(Math.sqrt(c) % 2 === 0) {
            return t + c
        } else return t + 0
    }, 0)
}

// 3

function isPalindrome (str) {
    if (str.length <= 1) return true
    let firstChar = str[0];
    let lastChar = str[str.length - 1];
    if (lastChar !== firstChar) return false
    else return isPalindrome (str.slice(1, -1))
}

// 4

function anagrams(word, arr) {
    let newArr = [];
    arr.forEach(el => {
        if(el.length === word.length) {
            let s = new Set(word.split('').concat(el.split('')));
            if(s.size === word.length) newArr.push(el)
        }
    });
    return newArr
}

 