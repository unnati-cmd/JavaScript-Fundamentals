// IPL 2026 winner generator

const arr = [
    {
        name:"MI",
        primary: "blue",
        secondary: "gold",
        captain: 'Hardik Pandya'
    },
    {
        name:"CSK",
        primary: "gold",
        secondary: "blue",
        captain: 'Ruturaj Gaikwad'
    },
    {
        name:"DC",
        primary: "Red",
        secondary: "gold",
        captain: 'Axar Patel'
    },
    {
        name:"RCB",
        primary: "Red",
        secondary: "Black",
        captain: 'Rajat Patidar'
    },
    {
        name:"KKR",
        primary: "Purple",
        secondary: "Black",
        captain: 'Ajinkya Rahane'
    }
] 

var btn = document.querySelector('#box')
var atn = document.querySelector('#cursor')
var h = document.querySelector('h1')
var main = document.querySelector('main')

atn.addEventListener('click', function(){
    var num = Math.floor(Math.random()*arr.length)

    btn.style.color = arr[num].primary;
    btn.style.backgroundColor = arr[num]?.secondary;
    h.innerHTML = arr[num].captain;
    btn.innerHTML = arr[num]?.name;
    main.style.backgroundColor = arr[num]?.primary;
})