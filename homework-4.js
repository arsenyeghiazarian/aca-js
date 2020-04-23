// 1

function removeFirstEl(arr, lastElIndex = arr.length - 1, arrClone = [...arr]) {
    if(arr.length === 0 || arr.length === 1) return [];
    arr[lastElIndex - 1] = arrClone[lastElIndex]
    if(lastElIndex !== 1) {
        removeFirstEl(arr, lastElIndex - 1, arrClone)
    }
    arr.length = arrClone.length - 1;
    return arr
}

// 2

function invertObj(o) {
    let newObj = {};
    for(key in o) {
        if(newObj[o[key]] && !Array.isArray(newObj[o[key]])) {
            const x = newObj[o[key]];
            newObj[o[key]] = [];
            newObj[o[key]].push(x,key);
            delete o[key]
        } else if(newObj[o[key]] && Array.isArray(newObj[o[key]])) {
            newObj[o[key]].push(key)
            delete o[key]
        } else {
            newObj[o[key]] = key
            delete o[key]
        }
    }
    Object.assign(o, newObj);
    return o
}

// 3   

function orderReader(list) {
    return list.filter(el => el.readStatus === true).sort((a,b) => b.percent - a.percent)
}

// 4
function rotateArr1(arr, n) {
    if(n < 0) n = arr.length + n
    if(n !== 0) {
        arr.push(arr[0])
        arr.shift()
        rotateArr2(arr, n - 1)
    }
    return arr
}

function rotateArr2(arr, n, lastElIndex = arr.length - 1, arrClone = [...arr]) {
    arr[findCharacterForChange(lastElIndex, n)] = arrClone[lastElIndex]
    if(lastElIndex > 0) {
        rotateArr(arr, n, lastElIndex - 1, arrClone)
    }
    function findCharacterForChange(lastElIndex, n) {
        if(lastElIndex - n < 0) {
            return lastElIndex - n + arr.length;
        }
        if(lastElIndex - n > arr.length - 1) {
            return lastElIndex - n - arr.length;
        }
        return lastElIndex - n
    }
    return arr
}

// 5

function makeTree(arr) {
    let tree = {};
    let mainObjId;
    for(el of arr) {
        if(el.parent === null) {
            tree[el.id] = {};
            mainObjId = el.id;
        } else if(el.parent === mainObjId) {
            tree[mainObjId][el.id] = {}
        } else checkNestedObj(tree[mainObjId], el)
    }
    return tree

    function checkNestedObj(obj, el) {
        if(obj[el.parent]) {
            obj[el.parent][el.id] = {}
        } else {
            for (let key in obj) {
                checkNestedObj(obj[key], el)
            }
        }
    }
}

// 7 

function ObjectMap() {
    if (!new.target) {
        return new ObjectMap();
    }

    this.map = function map(mapFn) {
        let newObj = {};
        for(let key in this) {
            if(typeof this[key] !== 'function') {
                newObj[key] = mapFn(this[key])
            }
        }
        return newObj
    }
}

