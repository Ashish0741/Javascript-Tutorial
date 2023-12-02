// All Events :
// click 
// mouseover
// mouseout
// onmousedown
// onmouseup

// function test(){
// // selection of an element

// var a = document.querySelector('h1')

// // Changing HTML

// a.innerText = 'I am Python Developer'

// // Changing CSS

// a.style.color = 'white'
// a.style.backgroundColor = 'red'

// // Event Listener

// a.addEventListener('mouseover',function(){
//     a.innerText = 'I am Django Developer'
//     a.style.textAlign = 'Center'
//     a.style.color = 'red'
//     a.style.backgroundColor = 'grey'
// })

// a.addEventListener('mouseout',function(){
//     a.innerText = 'I am Python Developer'
//     a.style.color = 'white'
//     a.style.textAlign = 'left'
//     a.style.backgroundColor = 'red'
// })
// }

// test()

// function myMove() {
//     var btn = document.querySelector('button')
//     btn.addEventListener('click',function(){
//         let id = null
//         const element = document.querySelector('.animate')
//         let pos = 0
//         clearInterval(id)
//         id = setInterval(frame, 5)
//         function frame(){
//             if (pos == 400) {
//                clearInterval(id)
//             }
//             else {
//                 pos++
//                 element.style.top = pos + 'px'
//                 element.style.left = pos + 'px'
//             }
//         }
//     })
// }

// myMove()


// ----------------------------------------------------------------------

function flashBulb(){

    // selecting element
    var bulb = document.querySelector('.bulb')
    var btn = document.querySelector('button')

    // adding event listener & changing css
    btn.addEventListener('click',function(){
        var btnValue = btn.innerText

        // if btnValue is ON
        if (btnValue === 'ON') {
            bulb.style.backgroundColor = 'yellow'
            btn.innerText = 'OFF'
        }
        // if btnValue is OFF
        else {
            bulb.style.backgroundColor = 'aliceblue'
            btn.innerText = 'ON'
        }
        

    })

}

flashBulb()