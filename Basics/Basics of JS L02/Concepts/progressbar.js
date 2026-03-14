// progress bar and blinker alert div

let count = 0;
let seconds = 10;
let progrss = document.querySelector('.progress-bar');
let progressText = document.querySelector('#progress-number')

let intv = setInterval(
    function(){
        if(count <= 99){
            count++;
            progrss.style.width = `${count}%`;
            progressText.textContent = `${count}`;
        }
        else{
            document.querySelector("h2").textContent = 'Downloaded';
            clearInterval(intv);
        }
},(seconds * 1000) / 100);

var alertt = document.querySelector('#alert');
var intervall = setInterval(function(){
    if(alertt.style.display === 'none' || alertt.style.display === '') {
        alertt.style.display = 'block';
    } else {
        alertt.style.display = 'none';
    } 
    if(count >= 100) {
        clearInterval(intervall);
        alertt.style.display = 'none';
    }
}, 1000);