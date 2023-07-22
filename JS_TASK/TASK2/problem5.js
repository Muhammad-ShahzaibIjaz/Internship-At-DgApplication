// Write a program that elloborate the difference b/w (= =) operator and (= = =)
// operator

function equal(value1, value2){
    if(value1 == value2 ){
        console.log('The value of both variable are same');
    }
}

function strictEqual(value1, value2){
    if(value1 === value2){
        console.log('The value of both variable are same and their datatypes also same');
    }
    else{
        console.log('The value of both variable are same but their datatypes not same');
    }
}


equal(8, '8');
strictEqual(8, '8');
strictEqual('8', '8');