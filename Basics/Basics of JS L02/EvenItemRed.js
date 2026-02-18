let li = document.querySelectorAll("ul li:nth-child(2n)");

li.forEach(function(ele){
    ele.classList.add("High");
})