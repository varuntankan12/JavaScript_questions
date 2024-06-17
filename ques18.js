
// Q18 find all occurence

let str = "This is string";
let char = "s";
let occurence = 0;
for (let i = 0; i < str.length - 1; i++) {
    if (char == str[i]) {
        occurence += 1;
    }
}

console.log(`Total occurence of "${char}" is ${occurence}`);