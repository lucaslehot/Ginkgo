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
** clickable things
*/

const GKclickableAll = document.querySelectorAll('button, a, h3')

for (let i = 0 ; i < GKclickableAll.length ; i++)
{
  GKclickableAll[i].classList.add("GKclickable")
  console.log('hey')
}

/*
** LUCAS' SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

const GKbody = document.querySelector('body')
const config = {childList: true};

const addClass = function(mutationsList)
{
  let toModify = document.querySelectorAll('button, a, h3')

  for (let i = 0 ; i < toModify.length ; i++)
  {
    if (!(toModify[i].classList.contains('GKclickable')))
    {
      toModify[i].classList.add("GKclickable")
      console.log(toModify[i])
    }
  }
}

let observer = new MutationObserver (addClass)

observer.observe (GKbody, config);

/*
** ROMAIN'S SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

console.log('hey')
