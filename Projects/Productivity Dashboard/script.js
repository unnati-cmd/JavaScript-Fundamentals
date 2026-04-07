function openFeatures(){
    var allElems = document.querySelectorAll('.elem');
    var FullElemsPage = document.querySelectorAll('.fullElements')
    var allFullElemsBackBtn = document.querySelectorAll('.fullElements .back')

    allElems.forEach(function(elem){
        elem.addEventListener('click', function(){
            FullElemsPage[elem.id].style.display = 'block';
        })
    })

    allFullElemsBackBtn.forEach(function(back){
        back.addEventListener('click',function(){
            FullElemsPage[back.id].style.display = 'none';
        })
    })
}
openFeatures();

// To Do List JS
let form = document.querySelector('.addTask form');
let taskInput = document.querySelector('.addTask form #task-input');
let taskDetailsInput = document.querySelector('.addTask form textarea');
let taskCheckBox = document.querySelector('.addTask form #check')

let allTask = [
    {
        task:'Mandir Jao',
        details: 'Hanuman ji wale',
        imp: true
    },
]

form.addEventListener('submit', function(e){
    e.preventDefault();
})