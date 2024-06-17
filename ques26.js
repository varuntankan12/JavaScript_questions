
// Q26 Remove all repeated characters

let str = "This is a string which have multiple characters in it.";
for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
        if (str[i] == str[j]) {
            str = str.substring(0, j) + str.substring(j + 1);
        }
    }
}
console.log(str);