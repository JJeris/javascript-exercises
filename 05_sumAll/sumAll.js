const sumAll = function(...args) {
    let start = 0;
    let end = 0;
    let sum = 0;
    
    if (args[0] < 0 || args[1] < 0) {
        return "ERROR";
    }

    // else if (typeof args[0] == 'string' || typeof args[0] == 'array' || typeof args[1] == 'string' || typeof args[1] == 'array') {
    //     return "ERROR";
    // }
    else if (typeof args[0] == 'string' || typeof args[1] == 'string') {
        return "ERROR";
    }

    else if (args[0] <= args[1]){
        start = args[0];
        end = args[1];
    }

    else if (args[0] >= args[1]) {
        start = args[1];
        end = args[0];
    }

    else {
        return "ERROR";
    }

    for (; start <= end; start++){
        sum += start;
    }
    return sum;
};

// console.log(sumAll(1,5));

// Do not edit below this line
module.exports = sumAll;


// let start;
// let end;

// if (args[0] < 0 || args[1] < 0) {
//     return "ERROR";
// }

// else if (typeof args[0] == 'string' || typeof args[0] == 'array' || typeof args[1] == 'string' || typeof args[1] == 'array') {
//     return "ERROR";
// }

// else if (args[0] <= args[1]){
//     start = args[0];
//     end = args[1];
// }

// else if (args[0] >= args[1]) {
//     start = args[1];
//     end = args[0];
// }

// else {
//     return "ERROR";
// }