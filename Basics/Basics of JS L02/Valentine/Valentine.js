let abcd = document.querySelector("#abcd");
let div = document.querySelector('#divi');
let no = document.querySelector('#NO');
let h1 = document.querySelector('h1');

div.addEventListener('mouseover',function(){

    abcd.addEventListener('click',function(){
        h1.innerHTML = 'I LOVE YOU';
        h1.style.color = '#FFD9CC';
    });

   //MouseOver and MouseOut
    abcd.addEventListener('mouseover',function(){
        abcd.style.backgroundColor = "#F9D4B2";
    });

    abcd.addEventListener('mouseout',function(){
        abcd.style.backgroundColor = "red";
    })

    no.addEventListener('click',function(){
        no.style.display = 'none';
    });

    //MouseMove
    window.addEventListener('mousemove',function(dets){
        abcd.style.top = (dets.clientY - abcd.offsetHeight/2) + "px";
        abcd.style.left = (dets.clientX - abcd.offsetWidth/2) + "px";
    })
})
