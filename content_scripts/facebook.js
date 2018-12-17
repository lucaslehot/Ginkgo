/*
** FINISHED FEATURES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** SETTING VARIABLES
*/

const GKbody = document.querySelector('body')
const GKscrollZoneBottom = document.createElement('div')
const GKscrollZoneTop = document.createElement('div')
const GKcontentArea = document.querySelector('#contentArea')

const GKclickableAll = document.querySelectorAll('button, a, h3')

/*
** AUTO SCROLLING
*/

if (localStorage.getItem("parameter1")==1){

let scrollY = 0;
GKscrollZoneBottom.classList.add('GKscrollZoneBottom', 'GKscrollZone')
GKscrollZoneTop.classList.add('GKscrollZoneTop', 'GKscrollZone')
GKcontentArea.appendChild(GKscrollZoneBottom)
GKcontentArea.appendChild(GKscrollZoneTop)

const scrollUp = function(clientX)
{
  if (scrollY>0)
  {
    let diff = ((clientX/GKbody.clientWidth)*25)
    scrollY-=diff
    window.scrollTo(0,scrollY)
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
** clickable things
*/

if (localStorage.getItem("parameter2")==1){

for (let i = 0 ; i < GKclickableAll.length ; i++)
{
  GKclickableAll[i].classList.add("GKclickable")
  console.log('hey')
}

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

  let timeOut

  for (let j = 0; j < GKclickableAll.length; j++) 
  {
    GKclickableAll[j].addEventListener('mouseenter', () => 
    {
      let timeOut
      timeOut = setTimeout(function(){ 
        GKclickableAll[j].click()
      }, 1200)
      GKclickableAll[j].addEventListener('mouseleave', () => {
        window.clearTimeout(timeOut)
      })
    })
  }
}

let observer = new MutationObserver (addClass)

observer.observe (GKbody, config);

} // <-- End of the very first "if"

/*
** LUCAS' SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** ROMAIN'S SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
chrome.storage.local.get(['parameter0'], function(result) {
  console.log(result.parameter0)
})
