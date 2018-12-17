/*
** FINISHED FEATURES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** AUTO SCROLLING
*/

let scrollY = 0
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

/*
** clickable things
*/

const GKclickableAll = document.querySelectorAll('button, a, h3')

for (let i = 0 ; i < GKclickableAll.length ; i++)
{
  GKclickableAll[i].classList.add("GKclickable")
}

/*
** LUCAS' SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** ROMAIN'S SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

for (let j = 0; j < GKclickableAll.length; j++) 
{
  GKclickableAll[j].addEventListener('mouseenter', () => 
  {
    let timeOut
    timeOut = setTimeout(function(){ 
      GKclickableAll[j].click()
    }, 1000)
    GKclickableAll[j].addEventListener('mouseleave', () => {
      window.clearTimeout(timeOut)
    })
  })
}




window.addEventListener('mousemove', (_event) =>{
  const loop = () =>
  {

    window.requestAnimationFrame(loop)
    underCursor = document.elementFromPoint(_event.clientX,_event.clientY)
  }
  loop()
})
