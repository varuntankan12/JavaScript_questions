// Q32 Find all occurenceof a word

let str = "This is a string that is to check, if 'is' removed";
let word = "is";
let occurences = [];
let k = 0;

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
            occurences[k] = i;
            k += 1;
        }
    }
}

console.log(`All occurences of "${word}" are at ${occurences}`);
