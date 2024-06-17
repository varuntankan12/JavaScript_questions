// Q17 find first occurence

let str = "This is string";
let char = "s";
for (let i = str.length - 1; i > 0; i--) {
    if (char == str[i]) {
        console.log(`last occurence of ${char} is at ${i}`);
        break;
    }
}