const mario =document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const start=document.querySelector('.start')
const gameover=document.querySelector('.geme-over')

const startgame=()=>{
    pipe.classList.add('pipe-animation')
    start.computedStyleMap.display='none'
}
