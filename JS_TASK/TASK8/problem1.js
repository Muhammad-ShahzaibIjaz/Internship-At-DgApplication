function printSeries(current,previous){
    if(current <= 34){
        console.log(current);
        let temp = current;
        current = current + previous;
        previous = temp;
        printSeries(current,previous);
    }
}

printSeries(1,0);