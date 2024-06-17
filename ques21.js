// Doubt ??????????????????????????????????????????????????????
// Q21 find lowest frequency character;

let str = "This is a string which have multiple characters in it";
let count = 0;
let minCount = str.length;
let countChar = '';
let minCountChar = '';
for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
        if ((str[i] == str[j]) && str[i] !== " ") {
            count += 1;
            countChar = str[i];
            console.log(countChar);
        }
    }
    if (count < minCount) {
        minCount = count + 1;
        minCountChar = countChar;
    }
    count = 0;
    countChar = '';
}
console.log(`Max frequency character is ${minCountChar} and it occur ${minCount} times`);
