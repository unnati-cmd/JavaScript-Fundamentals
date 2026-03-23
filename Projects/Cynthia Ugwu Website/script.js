const second = document.querySelectorAll('.elem');
const cursor = document.querySelector('#minicircle');

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener('mousemove', function(e){
    const scale = cursor.classList.contains("active") ? 6 : 1;
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
});

second.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    cursor.innerHTML = "VIEW";
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    cursor.innerHTML = "";
  });
 
});