const removeFromArray = function(arr, ...args) {
    
    // const arr = args[0];
    let newArr = [];
    arr.forEach((item) => {
        if (!args.includes(item)){
            newArr.push(item);
        }
    });

    //   const array = args[0]
    //   return array.filter(val => !args.includes(val))
    return newArr;

};

console.log(removeFromArray([1, 2, 3, 4], 3, 4, 1));

// Do not edit below this line
module.exports = removeFromArray;


// old code
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === element) {
//         console.log(i, arr[i], element);
//         newArr.splice(i,1);
//     } 
// }

// console.log(arr);
    // let arrText = arr.join("");
    // arrText = arrText.replaceAll(""+element,"");
    // let newArr = arrText.split("");
    // let result = [];
    // for(let i = 0; i < newArr.length; i++) {
    //     result.push(+newArr[i]);
    // }
    // // return arrText;
    // return result;

    // let arrText = arr.join(",");
    // let j = -1;
    // for(let i = 0; i <= arr.length; i++){
    //     arrText = arrText.replaceAll(","+args[j],"");
    //     j++
    // }
    // newArr = arrText.split(",");