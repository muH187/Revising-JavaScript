let array = [1, 2, 3, 4]

let newArray = array.map((e) => {
    return e*2
})

console.log(newArray)

let array1 = [1, 2, 3, 4, 5, 6]

const getEvenNumber = (e) => {
    if(e%2 === 0) {
        return true
    }
    return false
}

console.log(array1.filter(getEvenNumber))    

let array2 = [10, 20, 30]

let addArray2 = (a, b) => {
    return a+b
}

console.log(array2.reduce(addArray2))