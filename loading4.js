const btn4 = document.querySelector('.btn4')
const btn14 = document.querySelector('.btn14')
const ball = [...document.querySelectorAll('.ball')]

btn4.addEventListener('click',()=>{
    btn4.classList.add('paused')
    btn14.style.display= 'block'
    ball.map((e)=>{
        e.classList.add('run')
    })
})

btn14.addEventListener('click',()=>{
    ball.map((e)=>{
        e.classList.remove('run')
        btn4.classList.remove('paused')
        btn14.style.display= 'none'
    })
})