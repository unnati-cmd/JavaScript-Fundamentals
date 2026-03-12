//When we have to select the entire secreen or track event on entire screen, we can select entire window.
// if we want to track when a person types, we can simply track event which is known as keydown.

let h1 = document.querySelector('h1');

// this will change the text which appears on the screen by the char typed anywhere on the screen.
window.addEventListener("keydown", function(dets) {
    console.log(dets.key);
    if(dets.key !== " ") h1.textContent = dets.key;
    else h1.textContent = 'Space';
});