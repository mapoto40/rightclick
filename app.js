var div_position = document.querySelector('.options_div')
var mouseX = 0
var mouseY = 0

document.body.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    div_position.style.transform = `translateX(${mouseX - 125}px) translateY(${mouseY}px)`
    div_position.classList.add('ok')
})
document.body.addEventListener('click', () => {
    div_position.classList.remove('ok')
})

document.querySelectorAll('button').forEach((e) => {
    e.addEventListener('click', () => {
        document.querySelector('h1').innerHTML = e.innerHTML
    })
})