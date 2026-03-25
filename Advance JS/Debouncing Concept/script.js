function debounce(fun, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun(this);
        }, delay);
    }
}

document.querySelector('#search').addEventListener('input', debounce(function(){
    console.log('Chalao');
}, 1000));