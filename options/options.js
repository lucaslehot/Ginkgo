const container = document.querySelector(".container")
const content = container.querySelector(".content")
const bigTitle = content.querySelector("h1")
const generalPara = container.querySelector(".generalPara")
const help = container.querySelector(".help")
const subContent = content.querySelector(".subContents")
const contact = content.querySelector(".contact")
const support = content.querySelector(".support")

let timeOut = null
const title = content.querySelector("h1")
const subtitle = content.querySelector(".content > p") 
const selectorPara = document.createElement("div")
selectorPara.classList.add("overParaSelect")
container.appendChild(selectorPara)

const selectorHelp = document.createElement("div")
selectorHelp.classList.add("overHelpSelect")
container.appendChild(selectorHelp)


selectorPara.addEventListener("mouseenter", () => {
    timeOut = setTimeout(function(){
    if(selectorPara.classList.contains("active") == true)
    {
        console.log("already active")
    }
    else
    {
        help.classList.remove("animation_open")
        generalPara.classList.remove("animation_tabs_close")
        selectorHelp.classList.remove("active")
        selectorPara.classList.add("active")
        container.style.background = "#D1F1CE"
        /*** animation  ***/
        help.classList.add("animation_tabs_close")
        generalPara.classList.add("animation_open")

        support.style.display = "none"
        contact.style.display = "none"
        subContent.style.display = "block"
        title.innerHTML = "General Parameters"
        subtitle.innerHTML = "Change things you like so Ginkgo can help you feel better when navigating."
        subtitle.classList.add("opacity")
        title.classList.add("opacity")
        subContent.classList.add("opacity")
        container.style.height = "830px"

        timeOut = setTimeout(function(){
            subtitle.classList.remove("opacity")
            title.classList.remove("opacity")
            subContent.classList.remove("opacity")
        },299)

    }}, 1000)
    selectorPara.addEventListener("mouseleave", () => {
        window.clearTimeout(timeOut)
    })
})

selectorHelp.addEventListener("mouseenter", () => {
    timeOut = setTimeout(function(){
    if(selectorHelp.classList.contains("active") == true)
    {
        console.log("already active")
    }
    else
    {
        generalPara.classList.remove("animation_open")
        help.classList.remove("animation_tabs_close")
        selectorPara.classList.remove("active")
        selectorHelp.classList.add("active")
        container.style.background = "#97D289"
        /*** animation  ***/
        generalPara.classList.add("animation_tabs_close")
        help.classList.add("animation_open")

        support.style.display = "flex"
        contact.style.display = "block"
        support.classList.add("opacity")
        contact.classList.add("opacity")
        subContent.style.display = "none"
        title.innerHTML = "Help"
        title.classList.add("opacity")
        subtitle.innerHTML = "If you ever encounter a problem using our extension contact us and we'll take your feedback in consideration to make Ginkgo better for you !"
        subtitle.classList.add("opacity")
        container.style.height = "750px"
        
        timeOut = setTimeout(function(){
            subtitle.classList.remove("opacity")
            title.classList.remove("opacity")
            support.classList.remove("opacity")
            contact.classList.remove("opacity")
        },299)

    }}, 1000)
    selectorHelp.addEventListener("mouseleave", () => {
        window.clearTimeout(timeOut)
    })
})


/***
 * Buttons on hover switch
 */

for (let i = 0; i < 3; i++) {
    let buttonSwitch = content.querySelector(`.subContent${i} button`)
    let buttonSwitchAfter = content.querySelector(`.subContent${i} button .after`)
    let buttonSwitchBefore = content.querySelector(`.subContent${i} button .before`)
    let parameters = localStorage.getItem(`parameter${i}`)
    if(parameters == "0"){
        buttonSwitchAfter.classList.add("moving")
        buttonSwitchBefore.style.display = "none"
    }
    else if(parameters == "1"){
        buttonSwitchBefore.classList.add("moving")
        buttonSwitchBefore.classList.add("animBefore")
        buttonSwitchAfter.style.display = "none"
    }
    else{
        localStorage.setItem(`parameter${i}`,`0`)
        buttonSwitchAfter.classList.add("moving")
        buttonSwitchBefore.style.display = "none"
    }
    buttonSwitch.addEventListener("mouseenter", () => {
        if(buttonSwitchAfter.classList.contains("moving")){
            buttonSwitchAfter.classList.add("animAfter")
        }
        else{
            buttonSwitchAfter.classList.remove("animAfter")
        }
        timeOut = setTimeout(function(){ 
            if(buttonSwitchAfter.classList.contains("moving")){
                buttonSwitchAfter.classList.remove("moving")
                buttonSwitchAfter.style.display = "none"
                buttonSwitchBefore.style.display = "block"
                console.log("keyboard on")
                parameters = localStorage.setItem(`parameter${i}`,`1`)
            }
            else{
                buttonSwitchBefore.classList.remove("moving")
                buttonSwitchBefore.style.display = "none"
                buttonSwitchAfter.style.display = "block"
                buttonSwitchAfter.classList.add("moving")
                buttonSwitchBefore.classList.remove("animBefore")
                console.log("keyboard off")
                parameters = localStorage.setItem(`parameter${i}`,`0`)
            }
         }, 799)
        buttonSwitch.addEventListener("mouseleave", () => {
            if(buttonSwitchAfter.classList.contains("moving")){
    
            }
            else{
                buttonSwitchBefore.classList.add("moving")
                buttonSwitchBefore.classList.add("animBefore")
            }
            window.clearTimeout(timeOut)
        })
    })    
}
console.log(localStorage.getItem("parameter0"))
console.log(localStorage.getItem("parameter1"))
console.log(localStorage.getItem("parameter2"))