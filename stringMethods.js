let name = "Ali";
let fullName = "Muhammad Ali";
let smallName = "ali";
let capitalName = "ALI";

console.log(name);
console.log(name.length);
console.log(fullName.length);
console.log(smallName.toUpperCase());
console.log(capitalName.toLowerCase());

console.log(fullName.slice(1, 5));
console.log(fullName.slice(2));

let casualName = "Ali Bhai";

console.log(casualName.replace("Bhai", "Bro"));
console.log(casualName);

let friendName = "Mirza";


console.log(fullName.concat(" is a friend of ", friendName));

let friend2Name = "       Ayesha      ";
console.log(friend2Name.trim());

for (let i = 0; i < fullName.length; i++) {
    console.log(fullName[i]);
}