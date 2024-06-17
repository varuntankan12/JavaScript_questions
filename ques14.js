// Q14 check palindrome

let str = "minneennim";

function checkPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome(str));