// Write a program to find the total number of duplicate values in array.
// 11, 10, 20, 11, 25, 1, 10, 30, 25, 11,25,30

let array = [1,10,10,10,25,1,10,30,25,11,25,30];
array.sort();
let duplicateValue = '';
let duplicateCount = 0;
let j = 0;
for(let i = 1; i < array.length; i++){
    if(array[j] === array[i] && array[j] !== duplicateValue){
        duplicateCount += 1;
        duplicateValue = array[j];
    }
    else{
        j = i;
    }
}
console.log(duplicateCount);