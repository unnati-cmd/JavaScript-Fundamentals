var inc = document.querySelector('#inc');
var dec = document.querySelector('#dec');
inc.innerHTML = '90';
dec.innerHTML = '90';
inc.style.color = 'white';
dec.style.color = 'red';

a=90

inc.addEventListener('click', function(){
    a++;
    console.log(a);
    inc.innerHTML = a
})

dec.addEventListener('click', function(){
    a--;
    console.log(a);
    dec.innerHTML = a
})