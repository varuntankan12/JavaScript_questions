//Q11 count vowals and consonants
const string = "This is a String";
let vowalCount = 0;
let consonentCount = 0;

function checkVowal(value) {
    let vowels = "aeiouAEIOU";
    for (i of vowels) {
        if (i == value) return true;
    }
    return false;
}

for (const value of string) {
    if (checkVowal(value)) {
        vowalCount += 1;
    } else {
        consonentCount += 1;
    }
}

console.log(vowalCount, consonentCount);