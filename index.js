const string = "this is a string";


// Uncomment a question and run file to test







// Q1. Find the length of a string.
// console.log(string.length); // method 1

// let length = 0;  //method 2
// for (const i in string) {
//     length += 1;
// }
// console.log(length);




// // Q2. copy one string to another string.
// let string2 = '';
// string2 = string;  // method 1
// console.log(string2);

// string2 = ''; // Method 2
// for (const key of string) {
//     string2 += key;
// }
// console.log(string2);




// Q3 concatinate two string.

// let string2 = "which is concatenated with another";
// string2 = string + ' ' + string2;
// console.log(string2);




// Q4 compare two strings

// let string2 = "this is a otring ";
// let isEqual = true;
// let equalPart = '';

// for (let i = 0; i < string.length; i++) {
//     if (string[i] !== string2[i]) {
//         isEqual = false;
//         break;
//     }

//     if (isEqual) {
//         equalPart += string[i];
//     }
// }
// console.log(`Strings are ${isEqual = true ? "" : "Not "}Equal`)
// console.log(`Equal Part Of strings = "${equalPart}"`);



// Q5 lowercase to uppercase

// console.log(string.toUpperCase());

// console.log(string2);




// Q6 uppercase to lowercase

// const string2 = "THIS IS UPPERCASE STRING";
// console.log(string2.toLowerCase());




// // Q7 toggle case of each char
// const string2 = "This Is MixedCase Strings";
// let stringToggled = '';

// for (const i of string2) {
//     stringToggled += i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
// }
// console.log(stringToggled);

// stringToggled = '';
// for (const i of string2) {
// let charcode = i.charCodeAt(0);
// if (charcode >= 62 && charcode < 91) {
//     stringToggled += i.toLowerCase();
// } else if (charcode >= 97 && charcode < 123) {
//     stringToggled += i.toUpperCase();
// } else {
//     stringToggled += i;
// }
// }
// console.log(stringToggled);







// Q10 count char, number and special char

// const str = "THis is string, that contain 0123456789 and ,./;'[]\ special char";
// let charCount = 0;
// let numCount = 0;
// let specCharCount = 0;

// for (const i of str) {
//     let charcode = i.charCodeAt(0);
//     if ((charcode >= 62 && charcode < 91) || (charcode >= 97 && charcode < 123)) {
//         charCount += 1;
//     } else if (charcode >= 48 && charcode < 58) {
//         numCount += 1;
//     } else {
//         specCharCount += 1;
//     }
// }

// console.log(`Number of Alphabets = ${charCount},\nNumber of Digits = ${numCount},\nNumber of Special Character = ${specCharCount}`);






// //Q11 count vowals and consonants

// let vowalCount = 0;
// let consonentCount = 0;

// function checkVowal(value) {
//     let vowels = "aeiouAEIOU";
//     for (i of vowels) {
//         if (i == value) return true;
//     }
//     return false;
// }

// for (const value of string) {
//     if (checkVowal(value)) {
//         vowalCount += 1;
//     } else {
//         consonentCount += 1;
//     }
// }

// console.log(vowalCount, consonentCount);





// Q12 count total words

// let wordList = string.split(" "); // Method 1
// console.log(wordList.length, wordList);

// let wordCount = 0; // Method 2
// wordList = [];
// let j = 0;
// for (const i of string) {
//     if (i === " ") {
//         wordCount += 1;
//         j += 1;
//     } else {
//         wordList[j] !== undefined ? wordList[j] += i : wordList[j] = i
//     }
// }
// wordCount += 1;

// console.log(wordCount, wordList);





// Q13 reverse a string

// let StringToReverse = "Reverse This gnirts";

// StringToReverse[3] = "h";

// function setCharAt(str, index, chr) {
//     if (index > str.length - 1) return str;
//     return str.substring(0, index) + chr + str.substring(index + 1);
// }

// for (let i = 0, j = StringToReverse.length - 1; i < j; i++, j--) {
//     let temp = StringToReverse[i];
//     StringToReverse = setCharAt(StringToReverse, i, StringToReverse[j]);
//     StringToReverse = setCharAt(StringToReverse, j, temp);
// }

// console.log(StringToReverse);





// // Q14 check palindrome

// let str = "minneennim";

// function checkPalindrome(str) {
//     for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//         if (str[i] !== str[j]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkPalindrome(str));







// // Q15 reverse oreder of words

// let str = "This is a string";
// str = str.split(" ");
// for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     let temp = str[i];
//     str[i] = str[j];
//     str[j] = temp;
// }
// let newStr = '';
// for (const value of str) {
//     newStr += value + " ";
// }
// console.log(newStr);





// // Q16 find first occurence

// let str = "This is string";
// let char = "g";
// index = 0;
// for (const value of str) {
//     if (char == value) {
//         console.log(`"first occurence of ${char} is at ${index}`);
// break;
//     }
//     index += 1;
// }






// // Q17 find first occurence

// let str = "This is string";
// let char = "s";
// for (let i = str.length - 1; i > 0; i--) {
//     if (char == str[i]) {
//         console.log(`last occurence of ${char} is at ${i}`);
//         break;
//     }
// }





// // Q18 find all occurence

// let str = "This is string";
// let char = "s";
// let occurence = 0;
// for (let i = 0; i < str.length - 1; i++) {
//     if (char == str[i]) {
//         occurence += 1;
//     }
// }

// console.log(`Total occurence of "${char}" is ${occurence}`);






// //Q19 find occurence of a char in string

// function countChar(str, char) {
//     let count = 0;
//     for (const value of str) {
//         if (value === char) {
//             count += 1;
//         }
//     }
//     return count;
// }

// let str = "This is string Find Occurence of i in this  string";
// let countOfChar = countChar(str, "i");
// console.log(countOfChar);






// // Q20 find highest frequency char

// let str = "This is a string which have multiple characters in it.";
// let count = 0;
// let maxCount = 0;
// let countChar = '';
// let maxCountChar = '';
// for (let i = 0; i < str.length; i++) {
//     for (j = i + 1; j < str.length; j++) {
//         if ((str[i] == str[j]) && str[i] != " ") {
//             count += 1;
//             countChar = str[i];
//         }
//     }
//     if (count > maxCount) {
//         maxCount = count+1;
//         maxCountChar = countChar;
//     }
//     count = 0;
//     countChar = '';
// }
// console.log(`Max frequency character is ${maxCountChar} and it occur ${maxCount} times`);






// Doubt ??????????????????????????????????????????????????????
// Q21 find lowest frequency character;

// let str = "This is a string which have multiple characters in it";
// let count = 0;
// let minCount = str.length;
// let countChar = '';
// let minCountChar = '';
// for (let i = 0; i < str.length; i++) {
//     for (j = i + 1; j < str.length; j++) {
//         if ((str[i] == str[j]) && str[i] !== " ") {
//             count += 1;
//             countChar = str[i];
//             console.log(countChar);
//         }
//     }
//     if (count < minCount) {
//         minCount = count + 1;
//         minCountChar = countChar;
//     }
//     count = 0;
//     countChar = '';
// }
// console.log(`Max frequency character is ${minCountChar} and it occur ${minCount} times`);






// Q22 Find frequency of each element

// let str = " This is a String, Find the frequency of all elemets in this array";
// let countObj = {};
// // console.log(countObj["hel"]);

// for (let i = 0; i < str.length; i++) {

//     if (countObj[str[i]] == undefined) {
//         countObj[str[i]]=1;
//         for (let j = i+1; j < str.length; j++) {
//             if ((str[i] == str[j])) {
//                 countObj[str[i]] += 1;
//             }
//         }
//     }

// }

// console.log(countObj);







// // Q23 remove first occurence.

// let str = "This is a string";
// let char = "r";
// index = 0;

// for (const value of str) {
//     if (char == value) {
//         str = str.substring(0, index) + str.substring(index + 1);
//         break;
//     }
//     index += 1;
// }

// console.log(str);







// // Q24 remove the last occurence

// let str = "This is a String";
// char = "r";

// for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] == char) {
//         str = str.substring(0, i) + str.substring(i + 1);
//     }
// }

// console.log(str);







// // Q25 remove all occurences of a char

// let str = "This is a String that contain miultiple characters";
// let secondStr = str;
// char = "i";
// let index = 0;

// for (const value of str) {
//     if (value == char) {
//         secondStr = secondStr.substring(0, index) + secondStr.substring(index + 1);
//     }else{
//         index += 1;
//     }
// }

// console.log(secondStr);






// // Q26 Remove all repeated characters

// let str = "This is a string which have multiple characters in it.";
// for (let i = 0; i < str.length; i++) {
//     for (j = i + 1; j < str.length; j++) {
//         if (str[i] == str[j]) {
//             str = str.substring(0, j) + str.substring(j + 1);
//         }
//     }
// }
// console.log(str);






// // Q27 Replace first occurence with another

// let str = "This is a string";
// let char = "r";
// let replaceWith = "U";
// index = 0;

// for (const value of str) {
//     if (char == value) {
//         str = str.substring(0, index) + replaceWith + str.substring(index + 1);
//         break;
//     }
//     index += 1;
// }

// console.log(str);







// // Q28 Replace Last occurence

// let str = "This is a String";
// char = "t";
// replaceWith = "P";

// for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] == char) {
//         str = str.substring(0, i) + replaceWith + str.substring(i + 1);
//     }
// }

// console.log(str);







// // Q29 Replace all occurence with another char

// let str = "This is a string which have multiple characters in it.";
// char = "r";
// replaceWith = "R";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == char) {
//         str = str.substring(0, i) + replaceWith + str.substring(i + 1);
//     }
// }
// console.log(str);







// // Q30 find first occurence of a word

// let str = "This is a string that is to check, if 'is' removed";
// let word = "is";

// for (let i = 0; i < str.length; i++) {
//     if (word[0] == str[i]) {
//         let index = 0;
//         let same = true;
//         for (let j = i; j < i + word.length; j++) {
//             if (str[j] !== word[index]) {
//                 same = false;
//                 break;
//             }
//             index += 1;
//         }
//         if (same) {
//             console.log(`first occurence of "${word}" is at ${i}`);
//             break;
//         }
//     }
// }








// // Q31 find last occurence of a word

// let str = "This is a string that is to check, if 'is' removed";
// let word = "is";

// for (let i = str.length - 1; i >= 0; i--) {
//     if (word[0] == str[i]) {
//         let index = 0;
//         let same = true;
//         for (let j = i; j < i + word.length; j++) {
//             if (str[j] !== word[index]) {
//                 same = false;
//                 break;
//             }
//             index += 1;
//         }
//         if (same) {
//             console.log(`Last occurence of "${word}" is at ${i}`);
//             break;
//         }
//     }
// }








// // Q32 Find all occurenceof a word

// let str = "This is a string that is to check, if 'is' removed";
// let word = "is";
// let occurences = [];
// let k = 0;

// for (let i = 0; i < str.length; i++) {
//     if (word[0] == str[i]) {
//         let index = 0;
//         let same = true;
//         for (let j = i; j < i + word.length; j++) {
//             if (str[j] !== word[index]) {
//                 same = false;
//                 break;
//             }
//             index += 1;
//         }
//         if (same) {
//             occurences[k] = i;
//             k += 1;
//         }
//     }
// }

// console.log(`All occurences of "${word}" are at ${occurences}`);








// // Q33 count all occurences of a word in string

// let str = "This is a string that is to check, if 'is' removed";
// let word = "is";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (word[0] == str[i]) {
//         let index = 0;
//         let same = true;
//         for (let j = i; j < i + word.length; j++) {
//             if (str[j] !== word[index]) {
//                 same = false;
//                 break;
//             }
//             index += 1;
//         }
//         if (same) {
//             count += 1;
//         }
//     }
// }

// console.log(`The "${word}" occured ${count} times in the String`);






// // Q34 remove first occurence of a word in a string.

// let str = "This is a string that is to check, if 'is' removed";
// let word = "is";

// for (let i = 0; i < str.length; i++) {
//     if (word[0] == str[i]) {
//         let index = 0;
//         let same = true;
//         for (let j = i; j < i + word.length; j++) {
//             if (str[j] !== word[index]) {
//                 same = false;
//                 break;
//             }
//             index += 1;
//         }
//         if (same) {
//             str = str.substring(0, i) + str.substring(i + word.length);
//             break;
//         }
//     }
// }

// console.log(str);







// // // Q35 remove Last occurence of a word in a string.

// let str = "This is a string that is to check, if 'is' removed";
// let word = "is";

// for (let i = str.length - 1; i >= 0; i--) {
//     if (word[0] == str[i]) {
//         let index = 0;
//         let same = true;
//         for (let j = i; j < i + word.length; j++) {
//             if (str[j] !== word[index]) {
//                 same = false;
//                 break;
//             }
//             index += 1;
//         }
//         if (same) {
//             str = str.substring(0, i) + str.substring(i + word.length);
//             break;
//         }
//     }
// }

// console.log(str);







// // Q36 remove All occurence of a word in a string.

// let str = "This is a string that is to check, if 'is' removed";
// let word = "is";

// for (let i = 0; i < str.length; i++) {
//     if (word[0] == str[i]) {
//         let index = 0;
//         let same = true;
//         for (let j = i; j < i + word.length; j++) {
//             if (str[j] !== word[index]) {
//                 same = false;
//                 break;
//             }
//             index += 1;
//         }
//         if (same) {
//             str = str.substring(0, i) + str.substring(i + word.length);
//         }
//     }
// }

// console.log(str);








// // Q37 trim trailing white space in a string.

// let str = "        This is a string that is to check, if 'is' removed";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//         str = str.substring(i + 1);
//         i--;
//     } else {
//         break;
//     }
// }

// console.log(str);









// // Q38 trim leading white space in a string.

// let str = "        This is a string that is to check, if 'is' removed          ";

// for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] == " ") {
//         str = str.substring(0, i);
//     } else {
//         break;
//     }
// }

// console.log(`string = "${str}"`);








// // Q39 trim trailing white space in a string.

// let str = "        This is a string that is to check, if 'is' removed          ";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//         str = str.substring(i + 1);
//         i--;
//     } else {
//         break;
//     }
// }

// for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] == " ") {
//         str = str.substring(0, i);
//     } else {
//         break;
//     }
// }

// console.log(`string = "${str}"`);











// // Q40 trim leading white space in a string.

// let str = "        This is a string that is to check, if 'is' removed              ";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//         str = str.substring(0, i) + str.substring(i + 1);
//         i--;
//     }
// }

// console.log(`string = "${str}"`);