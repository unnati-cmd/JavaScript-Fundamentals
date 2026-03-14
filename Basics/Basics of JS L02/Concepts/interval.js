// 10 seconds counter for New Year

let count = 10;
let interval = setInterval(function(){
    if(count>0) {
        console.log(count);
        count--;
    }
    else {
        clearInterval(interval);
        console.log("Happy New Year!");
    }
}, 1000);