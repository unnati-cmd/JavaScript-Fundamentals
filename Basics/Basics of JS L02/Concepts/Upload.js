// Upload button functioning

let input = document.querySelector('#file_ip');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(dets){
    console.log(dets);
    file_ip.click();
})

input.addEventListener('change',function(dets){
    console.log(dets.target.files[0].name);
    const file = dets.target.files[0];
    if(file) btn.textContent = file.name;
})