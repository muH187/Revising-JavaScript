let myName = "Muhammad Ali";

console.log(myName.charAt(0));
console.log(myName.indexOf("M"));
console.log(myName.lastIndexOf("m"));

let result = myName.startsWith(" ");
let newResult = myName.startsWith("M");

console.log(result);
console.log(newResult);

let userName = "Muhammad Ali";

let result2 = userName.startsWith(" ");

if(result2) {
    console.log("Username can't be started with an empty space");
}
else {
    console.log(userName);
}


let phoneNumber = "123-456-7890";
console.log(phoneNumber.replaceAll("-", ""));