// Q4 compare two strings
const string = "This is String";
let string2 = "this is a otring ";
let isEqual = true;
let equalPart = '';

for (let i = 0; i < string.length; i++) {
    if (string[i] !== string2[i]) {
        isEqual = false;
        break;
    }

    if (isEqual) {
        equalPart += string[i];
    }
}
console.log(`Strings are ${isEqual = true ? "" : "Not "}Equal`)
console.log(`Equal Part Of strings = "${equalPart}"`);