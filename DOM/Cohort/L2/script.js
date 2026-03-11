//Color Generator Project

var btn = document.querySelector('#changebutton')
var box = document.querySelector('#box')

btn.addEventListener('click',function(){
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    console.log(c1,c2,c3);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})