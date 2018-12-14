/*
** FINISHED FEATURES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** AUTO SCROLLING
*/

let scrollY = 0;
const GKbody = document.querySelector('body')
const GKscrollZoneBottom = document.createElement('div')
const GKscrollZoneTop = document.createElement('div')
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
  }
}

const scrollDown = function(clientX)
{
  if (scrollY<GKbody.clientHeight)
  {
    let diff = ((clientX/GKbody.clientWidth)*25)
    scrollY+=diff
    window.scrollTo(0,scrollY)
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

/*
** LUCAS' SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** CLICKABLE THINGS
*/

const GKclickableAll = document.querySelectorAll('button, a')

for (let i = 0 ; i < GKclickableAll.length ; i++)
{
  GKclickableAll[i].classList.add("GKclickable")
}



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
