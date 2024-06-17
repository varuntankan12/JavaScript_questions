// Q10 count char, number and special char

const str = "THis is string, that contain 0123456789 and ,./;'[]\ special char";
let charCount = 0;
let numCount = 0;
let specCharCount = 0;

for (const i of str) {
    let charcode = i.charCodeAt(0);
    if ((charcode >= 62 && charcode < 91) || (charcode >= 97 && charcode < 123)) {
        charCount += 1;
    } else if (charcode >= 48 && charcode < 58) {
        numCount += 1;
    } else {
        specCharCount += 1;
    }
}

console.log(`Number of Alphabets = ${charCount},\nNumber of Digits = ${numCount},\nNumber of Special Character = ${specCharCount}`);
