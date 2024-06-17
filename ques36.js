// Q36 remove All occurence of a word in a string.

let str = "This is a string that is to check, if 'is' removed";
let word = "is";

for (let i = 0; i < str.length; i++) {
    if (word[0] == str[i]) {
        let index = 0;
        let same = true;
        for (let j = i; j < i + word.length; j++) {
            if (str[j] !== word[index]) {
                same = false;
                break;
            }
            index += 1;
        }
        if (same) {
            str = str.substring(0, i) + str.substring(i + word.length);
        }
    }
}

console.log(str);