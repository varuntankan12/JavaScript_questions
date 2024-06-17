
//Q19 find occurence of a char in string

function countChar(str, char) {
    let count = 0;
    for (const value of str) {
        if (value === char) {
            count += 1;
        }
    }
    return count;
}

let str = "This is string Find Occurence of i in this  string";
let countOfChar = countChar(str, "i");
console.log(countOfChar);