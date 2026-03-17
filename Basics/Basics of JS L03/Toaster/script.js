let parent = document.querySelector('#parent');

function Toaster(mesg){
        let toaster = document.createElement('div');
        toaster.id = 'toaster';
        toaster.innerHTML = mesg;
        document.body.appendChild(toaster);

        setTimeout(() => {
            document.body.removeChild(toaster);
        }, 4000);
}

Toaster('Download Successfull!');

setTimeout(() => {
    Toaster('Request Accepted!');
},1000);

setTimeout(() => {
    Toaster('100-days Streak!');
},2000);
