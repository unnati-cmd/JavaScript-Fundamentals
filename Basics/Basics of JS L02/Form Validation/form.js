let form = document.querySelector('form');
let nm = document.querySelector('#name');
let email = document.querySelector('#email');
let passwd = document.querySelector('#password');


const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
function isValidEmail(Email) {
    return emailRegex.test(Email);
}

const passwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function isValidPasswd(Password) {
    return passwdRegex.test(Password);
}

const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
function isValidName(name){
    return nameRegex.test(name);
}

form.addEventListener('submit', function(dets){
    console.log(dets);
    dets.preventDefault();

    let resn = document.querySelector('#nameError');
    resn.style.display ='none';
    let rese = document.querySelector('#emailError');
    rese.style.display ='none';
    let resp = document.querySelector('#passwdError');
    resp.style.display ='none';

    if(!isValidName(dets.target[0].value)){
        resn.innerHTML = 'Invalid Name!';
        resn.style.display = 'initial';
    }
    if(!isValidEmail(dets.target[1].value)){
        rese.innerHTML = 'Invalid Email!';
        rese.style.display = 'initial';
    }
    if(!isValidPasswd(dets.target[2].value)){
        resp.innerHTML = 'Invalid Password!';
        resp.style.display = 'initial';
    }
})

var forming = document.querySelector('#form');
forming.addEventListener('mouseover', () => {
    var circ = document.createElement('div');
    circ.style.borderRadius = '50%';
    let x = Math.floor(Math.random()*80);
    circ.style.height = `${x}px`;
    circ.style.width = `${x}px`;
    circ.style.border = `${Math.floor(Math.random()*2 + 1)}px solid green`;

    circ.style.top = Math.floor(Math.random()*100 + 10) + '%';
    circ.style.left = Math.floor(Math.random()*100 + 10) + '%';

    circ.style.position = 'absolute';
    forming.appendChild(circ);
}) 