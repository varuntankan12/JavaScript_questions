// Q25 remove all occurences of a char

let str = "This is a String that contain miultiple characters";
let secondStr = str;
char = "i";
let index = 0;

for (const value of str) {
    if (value == char) {
        secondStr = secondStr.substring(0, index) + secondStr.substring(index + 1);
    }else{
        index += 1;
    }
}

console.log(secondStr);