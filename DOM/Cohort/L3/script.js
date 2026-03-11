var btn = document.querySelector('button');

btn.addEventListener('click', () => {

    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    
    // When we want to display random colorful boxes
    // var div = document.createElement('div');
    // div.style.backgroundColor = `rgb(${c1} ${c2} ${c3})`;
    // div.style.height = '100px';
    // div.style.width = '100px';

    // When we want to display random colorful words/sentences
    var array = ['Hello', 'I am the best', 'Everything is fine', 'Let\'s hope', 'We will make it', 'God is with us', 'We are mature enough', 'Time is about to ring up', 'Call is on it\'s way'];
    var div = document.createElement('h1');
    div.style.color = `rgb(${c1} ${c2} ${c3})`;

    div.style.top = Math.floor(Math.random()*100) + '%';
    div.style.left = Math.floor(Math.random()*100) + '%';
    div.style.rotate = Math.floor(Math.random()*100) + 'deg';
    div.style.fontSize = Math.floor(Math.random()*50);
    div.innerHTML = array[Math.floor(Math.random()*array.length)];
    var main = document.querySelector('main');
    div.style.position = 'absolute';
    main.appendChild(div);
})