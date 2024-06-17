// Q12 count total words
const string = "This is string";

let wordList = string.split(" "); // Method 1
console.log(wordList.length, wordList);

let wordCount = 0; // Method 2
wordList = [];
let j = 0;
for (const i of string) {
    if (i === " ") {
        wordCount += 1;
        j += 1;
    } else {
        wordList[j] !== undefined ? wordList[j] += i : wordList[j] = i
    }
}
wordCount += 1;

console.log(wordCount, wordList);