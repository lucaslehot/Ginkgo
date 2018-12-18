const button0 = document.querySelector('.options')
const button1 = document.querySelector('.keyboard')
let keyboard = localStorage.getItem("parameter0")
let activate
let timeOut0 = null
let timeOut1 = null

if(keyboard == 1)
{
    button1.innerHTML = "Deactivate Keyboard"
    activate = 0
}
else
{
    button1.innerHTML = "Activate Keyboard"
    activate = 1
}

button0.addEventListener('mouseenter', (_event) => {
    timeOut0 = setTimeout(function(){ window.open("../options/options.html")}, 1500)
    button0.addEventListener('mouseleave', () => {
        window.clearTimeout(timeOut0)
    })
})

button1.addEventListener('mouseenter', (_event) => {
    timeOut1 = setTimeout(function(){ 
        if(activate == 0)
        {
            button1.innerHTML = "Activate Keyboard"
            activate = 1
            localStorage.setItem("parameter0", 0)
            chrome.storage.local.set({parameter0 : 0})
        }
        else{
            button1.innerHTML = "Deactivate Keyboard"
            activate = 0
            localStorage.setItem("parameter0", 1)
            chrome.storage.local.set({parameter0 : 1})
        }
        chrome.storage.local.get(['parameter0'], function(result) {console.log(result.parameter0)})
    }, 1500)
    button1.addEventListener('mouseleave', () => {
        window.clearTimeout(timeOut1)
    })
})