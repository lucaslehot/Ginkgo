const button = document.querySelector('button')
let timeOut = null

button.addEventListener('mouseenter', (_event) => {
    timeOut = setTimeout(function(){ window.open("../options/options.html")}, 1600)
    button.addEventListener('mouseleave', () => {
        window.clearTimeout(timeOut)
    })
})