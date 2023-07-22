function merge(array, start, mid, end){
    const firstHalf = mid - start + 1;
    const secondHalf = end - mid;

    let leftSubArray = [];
    let rightSubArray = [];

    for(let i = 0; i < firstHalf; i++){
        leftSubArray.push(array[i+start]);
    }
    for(let j = 0; j < secondHalf; j++){
        rightSubArray.push(array[mid+j+1]);
    }

    leftSubArray.push(-99999999);
    rightSubArray.push(-99999999);

    let i = 0, j = 0;
    for(let k = start; k <= end; k++){
        if(leftSubArray[i] >= rightSubArray[j]){
            array[k] = leftSubArray[i];
            i += 1;
        }
        else{
            array[k] = rightSubArray[j];
            j += 1;
        }
    }
}

function mergeSort(array, start , end){
    if(start < end){
        let mid = Math.floor((start+end)/2);
        mergeSort(array,start,mid);
        mergeSort(array,mid+1, end);
        merge(array,start,mid,end);
    }
}

// 0 1 7 12 3 13 4 9
let arr = [0,1,7,12,3,13,4,9];
console.log(`The array before sort is ${arr}`);
mergeSort(arr,0,arr.length-1);
console.log(`The array after sort is ${arr}`);