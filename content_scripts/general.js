/*
** FINISHED FEATURES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** SETTING VARIABLES
*/

const GKbody = document.querySelector('body')
const GKscrollZoneBottom = document.createElement('div')
const GKscrollZoneTop = document.createElement('div')

const GKclickableAll = document.querySelectorAll('button, a, h3')

/*
** AUTO SCROLLING
*/

if (localStorage.getItem("parameter1")==1){

let scrollY = 0;
GKscrollZoneBottom.classList.add('GKscrollZoneBottom', 'GKscrollZone')
GKscrollZoneTop.classList.add('GKscrollZoneTop', 'GKscrollZone')
GKbody.appendChild(GKscrollZoneBottom)
GKbody.appendChild(GKscrollZoneTop)

const scrollUp = function(clientX)
{
  if (scrollY>0)
  {
    let diff = ((clientX/GKbody.clientWidth)*25)
    scrollY-=diff
    window.scrollTo(0,scrollY)
    GKscrollZoneBottom.style.visibility = "visible"
  }
  else
  {
    GKscrollZoneTop.style.visibility = "hidden"
  }
}

const scrollDown = function(clientX)
{
  if (scrollY<GKbody.clientHeight)
  {
    let diff = ((clientX/GKbody.clientWidth)*25)
    scrollY+=diff
    window.scrollTo(0,scrollY)
    GKscrollZoneTop.style.visibility = "visible"
  }
  else
  {
    GKscrollZoneBottom.style.visibility = "hidden"
  }
}

let scrollUpInterval
let scrollDownInterval

GKscrollZoneTop.addEventListener(
  'mouseenter',
  function(e)
  {
    let clientX = e.clientX
    scrollUpInterval = setInterval(function(){scrollUp(clientX)}, 25)
  }
)
GKscrollZoneTop.addEventListener(
  'mouseleave',
  function()
  {
    clearInterval(scrollUpInterval)
  }
)
GKscrollZoneBottom.addEventListener(
  'mouseenter',
  function(e)
  {
    let clientX = e.clientX
    scrollDownInterval = setInterval(function(){scrollDown(clientX)}, 25)
  }
)
GKscrollZoneBottom.addEventListener(
  'mouseleave',
  function()
  {
    clearInterval(scrollDownInterval)
  }
)

} // <-- End of the very first "if"

/*
** CLICKABLE THINGS
*/

if (localStorage.getItem("parameter2")==1){

for (let i = 0 ; i < GKclickableAll.length ; i++)
{
  GKclickableAll[i].classList.add("GKclickable")
}

} // <-- End of the very first "if"

/*
** LUCAS' SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** LIGHTING
*/

// const GKbodyContent = document.querySelectorAll("body > *")
// const GKbody = document.querySelector("body")
//
// const GKcontainer = document.createElement("div")
// const GKlightingLeft = document.createElement("div")
// const GKlightingRight = document.createElement("div")
// GKlightingLeft.classList.add("GKlighting", "left")
// GKlightingRight.classList.add("GKlighting", "right")
// GKbody.appendChild(GKlightingLeft)
// GKbody.appendChild(GKlightingRight)
//
//
//
// GKbody.appendChild(GKcontainer)
// GKbody.classList.add("GKbody")
// GKcontainer.classList.add("GKcontainer")
//
// for (let i = 0 ; i < GKbodyContent.length ; i++)
// {
//   GKcontainer.appendChild(GKbodyContent[i])
// }

/*
** ROMAIN'S SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
