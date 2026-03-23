const cursor = document.querySelector('#minicircle');

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener('mousemove', function(e){
    const elem = document.elementFromPoint(e.clientX, e.clientY);
    const isHovering = elem && elem.closest('.elem');
    const scale = isHovering ? 6 : 1;
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
    if (isHovering) {
        cursor.innerHTML = "VIEW";
        cursor.style.backgroundColor = 'rgba(212, 204, 204, 0.5)';
        cursor.style.color = 'white';
    } 
    else {
        cursor.innerHTML = "";
        cursor.style.backgroundColor = 'white';
    }
});

function firstPageAnim(){
    var t1 = gsap.timeline();
    t1.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to('.boundingelem',{
        y: 0,
        ease: Expo.easeInOut,
        delay: -1,
        duration: 2,
        stagger: .2
    })
    .from('#herofooter',{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem){
  var rotate = 0;
  var diffrot = 0;
  elem.addEventListener('mouseleave', function(dets){
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: "power3.out",
      duration: 0.2,
    });
  });

  elem.addEventListener('mousemove', function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: "power3.out",
      top: diff,
      left: dets.clientX - elem.getBoundingClientRect().left,
      rotate: gsap.utils.clamp(-20, 20, diffrot*0.5),
      duration: 0.2
    });
  });
});