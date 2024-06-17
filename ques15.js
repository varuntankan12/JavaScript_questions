// Q15 reverse oreder of words

let str = "This is a string";
str = str.split(" ");
for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}
let newStr = '';
for (const value of str) {
    newStr += value + " ";
}
console.log(newStr);