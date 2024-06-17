// Q39 trim trailing white space in a string.

let str = "        This is a string that is to check, if 'is' removed          ";

for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        str = str.substring(i + 1);
        i--;
    } else {
        break;
    }
}

for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == " ") {
        str = str.substring(0, i);
    } else {
        break;
    }
}

console.log(`string = "${str}"`);
