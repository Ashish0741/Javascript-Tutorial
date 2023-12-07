var btn = document.querySelector('#addFriend')
var istatus = document.querySelector('h4')
var profileImg = document.querySelector('#card img')

var flag = 0
btn.addEventListener('click',function(){
    if (flag === 0){
        istatus.innerHTML = 'Friends'
        istatus.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        btn.style.backgroundColor = 'gainsboro'
        flag = 1
    }
    else {
        istatus.innerHTML = 'Stranger'
        istatus.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        btn.style.backgroundColor = 'rgb(63, 209, 63)'
        flag = 0
    }

})

profileImg.addEventListener('mouseenter', function(){
    profileImg.style.transform = 'scale(2.5)'
})

profileImg.addEventListener('mouseleave', function(){
    profileImg.style.transform = 'scale(1)'
})