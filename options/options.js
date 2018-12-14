const container = document.querySelector('.container')
const content = container.querySelector('.content')
const bigTitle = content.querySelector('h1')
const selectorPara = container.querySelector('.leftTab .generalPara')
const selectorHelp = container.querySelector('.leftTab .help')
let timeOut = null

selectorPara.addEventListener('mouseenter', () => {
    timeOut = setTimeout(function(){
    if(selectorPara.classList.contains('active') == true)
    {
        console.log('already active')
    }
    else
    {
        selectorHelp.classList.remove('active')
        selectorPara.classList.add('active')

        container.style.background = "#D1F1CE"
    }
    }, 1000)
    selectorPara.addEventListener('mouseleave', () => {
        window.clearTimeout(timeOut)
    })
})
selectorHelp.addEventListener('mouseenter', () => {
    timeOut = setTimeout(function(){
    if(selectorHelp.classList.contains('active') == true)
    {
        console.log('already active')
    }
    else
    {
        selectorPara.classList.remove('active')
        selectorHelp.classList.add('active')

        container.style.background = "#97D289"
        
    }
    }, 1000)
    selectorHelp.addEventListener('mouseleave', () => {
        window.clearTimeout(timeOut)
    })
})