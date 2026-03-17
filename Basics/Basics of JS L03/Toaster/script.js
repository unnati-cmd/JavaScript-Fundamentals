let parent = document.querySelector('#parent');

function Toaster(mesg){
        let toaster = document.createElement('div');
        toaster.classList.add('toaster');
        toaster.innerHTML = mesg;
        parent.appendChild(toaster);

        setTimeout(() => {
            parent.removeChild(toaster);
        }, 4000);
}

Toaster('Download Successfull!');

setTimeout(() => {
    Toaster('Request Accepted!');
},1000);

setTimeout(() => {
    Toaster('100-days Streak!');
},2000);
