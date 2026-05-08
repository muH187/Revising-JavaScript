function reverse(str){
    return str.split("").reverse().join("");
}

const reverseString = reverse("Muhammad");

console.log(reverseString)

let myName = "Ali"
let fullName = "Muhammad Ali Khan"

console.log(myName.split());
console.log(fullName.split(" ")) // every word will be an array
console.log(fullName.split()) // will be a single array
console.log(fullName.split("")) // every letter will be an array
