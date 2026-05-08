let array = [1, 2, 3, 4, 8, 10, 11]
// let newArray = []

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     newArray.push(element**2)
// }

// console.log(newArray)


let newArray = array.map((e)=> {
    return e**2
})

console.log(newArray)