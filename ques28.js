// Q28 Replace Last occurence

let str = "This is a String";
char = "t";
replaceWith = "P";

for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == char) {
        str = str.substring(0, i) + replaceWith + str.substring(i + 1);
    }
}

console.log(str);