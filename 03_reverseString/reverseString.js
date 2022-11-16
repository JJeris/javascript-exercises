const reverseString = function(text) {
    let result = "";
    textArr = text.split("");
    reversedTextArr = [];
    
    for (let i = textArr.length; i>=0; i--){
        // console.log(textArr[i]);
        reversedTextArr.push(textArr[i]);
    }
    // console.log(reversedTextArr);
    return result = reversedTextArr.join("");
    // console.log(result);
}

// console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
