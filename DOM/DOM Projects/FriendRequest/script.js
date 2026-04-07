let isStatus = document.querySelector('h5');
var addFriend = document.querySelector('#add');

var check =0;

addFriend.addEventListener('click',function(){
    if(check === 0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        check = 1;
        addFriend.innerHTML = 'Remove Friend';
        addFriend.style.backgroundColor = 'grey';
    }
    else{
        isStatus.innerHTML = 'Strangers';
        isStatus.style.color = 'red';
        check = 0;
        addFriend.innerHTML = 'Add Friend';
        addFriend.style.backgroundColor = 'cadetblue';
    }
})
