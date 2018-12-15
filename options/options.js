const container = document.querySelector(".container")
const content = container.querySelector(".content")
const bigTitle = content.querySelector("h1")
const generalPara = container.querySelector(".generalPara")
const help = container.querySelector(".help")
const subContent = content.querySelector(".subContent")

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

        subContent.style.display = "flex"
        title.innerHTML = "General Parameters"
        subtitle.innerHTML = "Change things you like so Ginkgo can help you feel better when navigating."
        subtitle.classList.add("opacity")
        title.classList.add("opacity")
        subContent.classList.add("opacity")

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

        subContent.style.display = "none"
        title.innerHTML = "Help"
        title.classList.add("opacity")
        subtitle.innerHTML = "If you ever encounter a problem using our extension contact us and we'll take your feedback in consideration to make Ginkgo better for you !"
        subtitle.classList.add("opacity")
        
        timeOut = setTimeout(function(){
            subtitle.classList.remove("opacity")
            title.classList.remove("opacity")
        },299)

    }}, 1000)
    selectorHelp.addEventListener("mouseleave", () => {
        window.clearTimeout(timeOut)
    })
})


/***
 * Button on hover switch
 */

const buttonSwitch = content.querySelector(".subContent button")
const buttonSwitchAfter = content.querySelector(".subContent button .after")
const buttonSwitchBefore = content.querySelector(".subContent button .before")
let keyboard = localStorage.getItem("keyboard")
if(keyboard == "off"){
    buttonSwitchAfter.classList.add("moving")
    buttonSwitchBefore.style.display = "none"
}
else{
    buttonSwitchBefore.classList.add("moving")
    buttonSwitchBefore.classList.add("animBefore")
    buttonSwitchAfter.style.display = "none"
}



buttonSwitch.addEventListener("mouseenter", (_event) => {
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
            keyboard = localStorage.setItem("keyboard","on")
        }
        else{
            buttonSwitchBefore.classList.remove("moving")
            buttonSwitchBefore.style.display = "none"
            buttonSwitchAfter.style.display = "block"
            buttonSwitchAfter.classList.add("moving")
            buttonSwitchBefore.classList.remove("animBefore")
            console.log("keyboard off")
            keyboard = localStorage.setItem("keyboard","off")
        }
     }, 999)
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
