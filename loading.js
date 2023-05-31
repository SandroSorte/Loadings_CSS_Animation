const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
const load = [...document.querySelectorAll('.ld1')]

btn.addEventListener('click',()=>{
    btn.classList.add('paused')
    btn1.style.display= 'block'
    clicado = true
    load.map((e)=>{
        e.classList.add('run')
    })
})
btn1.addEventListener('click',()=>{
    load.map((e)=>{
        e.classList.remove('run')
        btn.classList.remove('paused')
        btn1.style.display= 'none'
    })
})
