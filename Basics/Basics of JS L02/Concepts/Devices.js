let set = document.querySelector('select');
let device = document.querySelector('#device');

set.addEventListener('change',function(det){
    device.textContent = `${det.target.value} Selected`;
})