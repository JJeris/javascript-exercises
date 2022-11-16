const repeatString = function(string, num) {
    let result = '';

    if (num < 0){
        return "ERROR";
    }
    else if (!string){
        return string;
    }
    else {
        for (let i = 0; i < num; i++){
            result+=string;
        }
    }
    
    return result;
};
// console.log(repeatString('hey', 10));
// Do not edit below this line
module.exports = repeatString;
