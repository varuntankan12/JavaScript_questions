// Q23 remove first occurence.

let str = "This is a string";
let char = "r";
index = 0;

for (const value of str) {
    if (char == value) {
        str = str.substring(0, index) + str.substring(index + 1);
        break;
    }
    index += 1;
}

console.log(str);
