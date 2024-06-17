// Q1. Find the length of a string.
const string = "this is a string";
console.log(string.length); // method 1

let length = 0;  //method 2
for (const i in string) {
    length += 1;
}
console.log(length);