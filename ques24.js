// Q24 remove the last occurence

let str = "This is a String";
char = "r";

for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == char) {
        str = str.substring(0, i) + str.substring(i + 1);
    }
}

console.log(str);