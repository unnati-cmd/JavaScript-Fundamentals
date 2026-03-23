const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener('mousemove',function(dets){
        console.log(dets);
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX - 3}px, ${dets.clientY - 3}px)`
    });
}

circleMouseFollower();