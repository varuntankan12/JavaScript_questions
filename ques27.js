// Q27 Replace first occurence with another

let str = "This is a string";
let char = "r";
let replaceWith = "U";
index = 0;

for (const value of str) {
    if (char == value) {
        str = str.substring(0, index) + replaceWith + str.substring(index + 1);
        break;
    }
    index += 1;
}

console.log(str);