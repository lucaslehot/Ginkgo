const container = document.querySelector('.container')
const content = container.querySelector('.content')
const bigTitle = content.querySelector('h1')
const selectorPara = document.createElement('div')
const generalPara = container.querySelector('.generalPara')
const help = container.querySelector('.help')
selectorPara.classList.add('overParaSelect')
container.appendChild(selectorPara)

const selectorHelp = document.createElement('div')
selectorHelp.classList.add('overHelpSelect')
container.appendChild(selectorHelp)

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
             /*** animation  ***/
        generalPara.classList.add('animation_tabs_close')

        container.style.background = "#97D289"
        
    }
    }, 1000)
    selectorHelp.addEventListener('mouseleave', () => {
        window.clearTimeout(timeOut)
    })
})