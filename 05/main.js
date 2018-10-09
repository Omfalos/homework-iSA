function evenOrOdd(num){
    if(num % 2 == 0){
        console.log("even");
        previousAndNext(num)
    }else{
        console.log("odd")
    }
}

evenOrOdd(2);

function previousAndNext(num){
    console.log(num - 1);
    console.log(num + 1);
}