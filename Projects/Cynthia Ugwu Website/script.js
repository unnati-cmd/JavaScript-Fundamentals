const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener('mousemove',function(dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX - 4}px, ${dets.clientY - 4}px)`
    });
}

circleMouseFollower();

const second = document.querySelectorAll('.elem');
const cursor = document.querySelector('#minicircle');

second.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    cursor.innerHTML = "VIEW";
    cursor.style.display = 'flex';
    cursor.style.alignItems = 'center';
    cursor.style.justifyContent = 'center';
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    cursor.innerHTML = "";
  });
 
});