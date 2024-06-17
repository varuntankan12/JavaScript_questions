// Q2. copy one string to another string.
const string = "this is a string";
let string2 = '';
string2 = string;  // method 1
console.log(string2);

string2 = ''; // Method 2
for (const key of string) {
    string2 += key;
}
console.log(string2);