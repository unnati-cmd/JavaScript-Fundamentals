let form = document.querySelector('form');
let nm = document.querySelector('#name');
let email = document.querySelector('#email');


const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
function isValidEmail(email) {
    return emailRegex.test(email);
}


form.addEventListener('submit', function(dets){
    console.log(dets);
    dets.preventDefault();
    // Name Verification
    // const regex = /^[A-Za-z][A-Za-z0-9_]{2,19}$/;
    // let ans = regex.test(dets)
    // Email Verification
    if(!isValidEmail(dets.target[1].value)){
        console.warn('Invalid email id');
    }
})