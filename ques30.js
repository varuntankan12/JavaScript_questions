// Q30 find first occurence of a word

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
            console.log(`first occurence of "${word}" is at ${i}`);
            break;
        }
    }
}