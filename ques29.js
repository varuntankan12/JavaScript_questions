// Q29 Replace all occurence with another char

let str = "This is a string which have multiple characters in it.";
char = "r";
replaceWith = "R";

for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
        str = str.substring(0, i) + replaceWith + str.substring(i + 1);
    }
}
console.log(str);