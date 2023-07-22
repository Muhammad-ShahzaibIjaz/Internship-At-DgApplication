// Following is the sample for two arrays. Show the output format as shown in 3rd.
// Sample array:
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output:
// [4, 5, 8, 10, 12, 13]

let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let array3 = [];

let len1 = array1.length;
let len2 = array2.length;

if(len1 > len2){
    for(let i = 0; i < len2; i++){
        array3.push(array1[i]+array2[i]);
    }
    let remainElements = len1 - len2;
    for(let i = 0; i < remainElements; i++){
        array3.push(array2[len2+i]);
    }
}
else if(len1 < len2){
    for(let i = 0; i < len1; i++){
        array3.push(array1[i]+array2[i]);
    }
    let remainElements = len2 - len1;
    for(let i = 0; i < remainElements; i++){
        array3.push(array2[len1+i]);
    }
}
else{
    for(let i = 0; i < len1; i++){
        array3.push(array1[i]+array2[i]);
    }
}


console.log(array3);