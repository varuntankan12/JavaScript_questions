
// Q31 find last occurence of a word

let str = "This is a string that is to check, if 'is' removed";
let word = "is";

for (let i = str.length - 1; i >= 0; i--) {
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
            console.log(`Last occurence of "${word}" is at ${i}`);
            break;
        }
    }
}