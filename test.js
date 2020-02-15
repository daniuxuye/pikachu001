import string from './css.js'
const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
demo.innerHTML =string.substr(0,n)
demo2.innerText = string.substr(0,n)
let time = 50
let n =1
const run =()=>{
    n+=1
    if(n>string.length){
        window.clearInterval(id)
        return
    }
    demo.innerHTML = string.substr(0,n)
    demo2.innerText = string.substr(0,n)
    demo2.scrollTop = demo2.scrollHeight
}
const play = ()=>{
    return setInterval(run,time)
}
const pause =()=>{
    window.clearInterval(id)
}
let id = play()
btnPause.onclick =()=>{
    pause()
}
btnPlay.onclick=()=>{
    id = play()
}
btnSlow.onclick=()=>{
    pause()
    time =80
    id = play()
}
btnNormal.onclick=()=>{
    pause()
    time =20
    id = play()
}
bntFast.onclick=()=>{
    pause()
    time = 0
    id = play()
}
