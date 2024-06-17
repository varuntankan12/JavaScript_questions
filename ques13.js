// Q13 reverse a string

let StringToReverse = "Reverse This gnirts";

StringToReverse[3] = "h";

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

for (let i = 0, j = StringToReverse.length - 1; i < j; i++, j--) {
    let temp = StringToReverse[i];
    StringToReverse = setCharAt(StringToReverse, i, StringToReverse[j]);
    StringToReverse = setCharAt(StringToReverse, j, temp);
}

console.log(StringToReverse);