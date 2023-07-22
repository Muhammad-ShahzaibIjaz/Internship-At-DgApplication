function palindrome(num){
    return num[0] === num[num.length-1] ? true : false;
}

function printReverse(num){
    for(let i = num.length - 1; i > -1; i--){
        console.log(num[i]);
    }
}

let num = '1435';
if(!palindrome(num)){
    printReverse(num);
}
