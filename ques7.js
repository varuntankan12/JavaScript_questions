// Q7 toggle case of each char
const string2 = "This Is MixedCase Strings";
let stringToggled = '';

for (const i of string2) {
    stringToggled += i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
}
console.log(stringToggled);

stringToggled = '';
for (const i of string2) {
let charcode = i.charCodeAt(0);
if (charcode >= 62 && charcode < 91) {
    stringToggled += i.toLowerCase();
} else if (charcode >= 97 && charcode < 123) {
    stringToggled += i.toUpperCase();
} else {
    stringToggled += i;
}
}
console.log(stringToggled);
