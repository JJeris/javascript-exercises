const sumAll = function(first, last) {
    let start = first;
    let end = last;
    let sum = 0;
    
    // if (typeof first != "integer" && typeof last != "integer") {
    if (!Number.isInteger(first) || !Number.isInteger(last)) {
        return "ERROR";
    }
    if (first < 0 || last < 0) {
        return "ERROR";
    }
    if (first > last){
        start = last;
        end = first;
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

// if () {
//     return "ERROR";
// }

// // else if (typeof args[0] == 'string' || typeof args[0] == 'array' || typeof args[1] == 'string' || typeof args[1] == 'array') {
// //     return "ERROR";
// // }