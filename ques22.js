// Q22 Find frequency of each element

let str = " This is a String, Find the frequency of all elemets in this array";
let countObj = {};
// console.log(countObj["hel"]);

for (let i = 0; i < str.length; i++) {

    if (countObj[str[i]] == undefined) {
        countObj[str[i]]=1;
        for (let j = i+1; j < str.length; j++) {
            if ((str[i] == str[j])) {
                countObj[str[i]] += 1;
            }
        }
    }

}

console.log(countObj);
