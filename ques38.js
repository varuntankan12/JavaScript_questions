
// Q38 trim leading white space in a string.

let str = "        This is a string that is to check, if 'is' removed          ";

for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == " ") {
        str = str.substring(0, i);
    } else {
        break;
    }
}

console.log(`string = "${str}"`);

