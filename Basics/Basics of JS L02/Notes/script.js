let ul = document.querySelector("ul");

// Notes app logic:
// 1. When clicked, strike through
// 2. When clicked and strike through, unstrike it
ul.addEventListener('click', function(dets){
    console.log(dets.target.textContent);
    console.log(dets);
    dets.target.classList.toggle("lt");
});


let input = document.querySelector('input');
let span = document.querySelector('span');

input.addEventListener('input', function(){
    let left = 20 - input.value.length;
    span.textContent = left;
    if(span.textContent<0){
        span.style.color = 'red';
    }
    else{
        span.style.color = 'white';
    }
})