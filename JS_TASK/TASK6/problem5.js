// Find the largest element and its index in the Array without using JavaScript built-in
// function.
// [12, 25, 88, 101, 121, 339,52,993,13]

function findLargest(array){
    let largestIndex = 0;
    let largestElement = array[0];
    for(let i = 1; i < array.length; i++){
        if(largestElement < array[i]){
            largestIndex = i;
            largestElement = array[i];
        }
    }
    return [largestElement,largestIndex];
}


let array = [12,25,88,101,121,339,52,993,13];
let output = findLargest(array);
console.log(`The largest Element is ${output[0]} and it's index is ${output[1]}`);