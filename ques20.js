// Q20 find highest frequency char

let str = "This is a string which have multiple characters in it.";
let count = 0;
let maxCount = 0;
let countChar = '';
let maxCountChar = '';
for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
        if ((str[i] == str[j]) && str[i] != " ") {
            count += 1;
            countChar = str[i];
        }
    }
    if (count > maxCount) {
        maxCount = count+1;
        maxCountChar = countChar;
    }
    count = 0;
    countChar = '';
}
console.log(`Max frequency character is ${maxCountChar} and it occur ${maxCount} times`);
