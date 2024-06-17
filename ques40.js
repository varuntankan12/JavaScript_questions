// Q40 trim leading white space in a string.

let str = "        This is a string that is to check, if 'is' removed              ";

for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        str = str.substring(0, i) + str.substring(i + 1);
        i--;
    }
}

console.log(`string = "${str}"`);