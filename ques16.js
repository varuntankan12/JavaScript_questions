// Q16 find first occurence

let str = "This is string";
let char = "g";
index = 0;
for (const value of str) {
    if (char == value) {
        console.log(`"first occurence of ${char} is at ${index}`);
break;
    }
    index += 1;
}