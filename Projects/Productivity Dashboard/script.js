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

var currentTask = []
if(localStorage.getItem('currentTask')) {
    currentTask = JSON.parse(localStorage.getItem('currentTask'));
}else {
    console.log('Task list is Empty.');
}

function renderTask(){
    var allTask = document.querySelector('.allTask')
    var sum = '';
    currentTask.forEach(function(elem,idx){
        sum = sum + `<div class='task'>
            <details>
                <summary>
                    <h5>${elem.task}<span class=${elem.imp}>Imp</span></h5>
                </summary>
                <p>${elem.details}</p>
            </details>
            <button id=${idx}>Mark as Completed</button>
        </div>`
    })
    allTask.innerHTML = sum;
    localStorage.setItem('currentTask', JSON.stringify(currentTask)) ;
}
renderTask();


let taskInput = document.querySelector('.addTask form #task-input');
let taskDetailsInput = document.querySelector('.addTask form textarea');
let taskCheckBox = document.querySelector('.addTask form #check')

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(taskInput.value == '' || taskDetailsInput.value == ''){
        alert('Please enter a task and description');
        return;
    }
    currentTask.push(
    {
        task: taskInput.value, 
        details: taskDetailsInput.value, 
        imp: taskCheckBox.checked
    })
    renderTask();
    location.reload();
})

//Mark as completed button 
var markCompletedBtn = document.querySelectorAll('.task button');
markCompletedBtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        currentTask.splice(btn.id, 1);
        renderTask();
        location.reload();
    })
})