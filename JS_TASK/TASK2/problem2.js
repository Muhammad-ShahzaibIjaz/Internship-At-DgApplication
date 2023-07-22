// Write a JavaScript program having a simple function to differentiate the two
// Different data types. Undefined and null

function differentiate(value){
    if(value === undefined){
        console.log('The given value is undefined');
    }
    else if(value === null){
        console.log('The value is null');
    }
    else{
        console.log('The value is neither Undefined or null');
    }
}

let var1, var2 = null, var3 = 3;
differentiate(var1);
differentiate(var2);
differentiate(var3);