// Q33 count all occurences of a word in string

let str = "This is a string that is to check, if 'is' removed";
let word = "is";
let count = 0;

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
            count += 1;
        }
    }
}

console.log(`The "${word}" occured ${count} times in the String`);

