//Loading 1
const btnPlay1 = document.querySelector('#btn-play1')
const btnStop1 = document.querySelector('#btn-stop1')
const load1 = [...document.querySelectorAll('.ld1')]

btnPlay1.addEventListener('click',()=>{
    btnPlay1.classList.add('paused')
    btnStop1.style.display= 'block'
    load1.map((e)=>{
        e.classList.add('run')
    })
})
btnStop1.addEventListener('click',()=>{
    load1.map((e)=>{
        e.classList.remove('run')
        btnPlay1.classList.remove('paused')
        btnStop1.style.display= 'none'
    })
})

// Loading 2
const btnPlay2 = document.querySelector('#btn-play2')
const btnStop2 = document.querySelector('#btn-stop2')
const load2 = [...document.querySelectorAll('.ld2')]

btnPlay2.addEventListener('click',()=>{
    btnPlay2.classList.add('paused')
    btnStop2.style.display= 'block'
    load2.map((e)=>{
        e.classList.add('run')
    })
})
btnStop2.addEventListener('click',()=>{
    load2.map((e)=>{
        e.classList.remove('run')
        btnPlay2.classList.remove('paused')
        btnStop2.style.display= 'none'
    })
})

//Loading 3
const btnPlay3 = document.querySelector('#btn-play3')
const btnStop3 = document.querySelector('#btn-stop3')
const load3 = [...document.querySelectorAll('.ld3')]

btnPlay3.addEventListener('click',()=>{
    btnPlay3.classList.add('paused')
    btnStop3.style.display= 'block'
    load3.map((e)=>{
        e.classList.add('run')
    })
})
btnStop3.addEventListener('click',()=>{
    load3.map((e)=>{
        e.classList.remove('run')
        btnPlay3.classList.remove('paused')
        btnStop3.style.display= 'none'
    })
})


//Loading 4
const btnPlay4 = document.querySelector('#btn-play4')
const btnStop4 = document.querySelector('#btn-stop4')
const load4 = [...document.querySelectorAll('.ld4')]

btnPlay4.addEventListener('click',()=>{
    btnPlay4.classList.add('paused')
    btnStop4.style.display= 'block'
    load4.map((e)=>{
        e.classList.add('run')
    })
})

btnStop4.addEventListener('click',()=>{
    load4.map((e)=>{
        e.classList.remove('run')
        btnPlay4.classList.remove('paused')
        btnStop4.style.display= 'none'
    })
})