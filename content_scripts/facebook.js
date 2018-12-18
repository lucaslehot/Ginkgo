/*
** FINISHED FEATURES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** AUTO SCROLLING
*/

let scrollY = 0
const GKbody = document.querySelector('body')
let GKcontentArea = document.querySelector('#contentArea')
if(GKcontentArea == null){
  GKcontentArea = document.querySelector('#globalContainer')
}
const GKscrollZoneBottom = document.createElement('div')
const GKscrollZoneTop = document.createElement('div')
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

/*
** clickable things
*/

const GKclickableAll = document.querySelectorAll('button, a:not(._4-eo), ._ivp5, ._2ms2, ._nbt, .fbRemindersTitle, ._6vg, ._6a-y::before, ._2aha, ._mxb ')

for (let i = 0 ; i < GKclickableAll.length ; i++)
{
  GKclickableAll[i].classList.add("GKclickable")
  console.log('hey')
}

/*
** LUCAS' SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

const config = {childList: true};

const addClass = function(mutationsList)
{
  let toModify = document.querySelectorAll('button, a, span')

  for (let i = 0 ; i < toModify.length ; i++)
  {
    if (!(toModify[i].classList.contains('GKclickable')))
    {
      toModify[i].classList.add("GKclickable")
    }
  }
}

let observer = new MutationObserver (addClass)

observer.observe (GKbody, config)

/*
** VIRTUAL KEYBOARD
*/

const inputsList = document.querySelectorAll('input')
inputsList.forEach(function(element)
{
  element.addEventListener(
    'click',
    function()
    {
      let previousActive = document.querySelector('.BKisActive')
      if(previousActive != undefined)
      {
        previousActive.classList.remove('BKisActive')
      }
      this.classList.add('BKisActive')
    }
  )
})

const GKkeyboardContainer = document.createElement('div')
GKkeyboardContainer.classList.add('GKkeyboardContainer')
GKbody.appendChild(GKkeyboardContainer)

const keyList = [
                  ["1","key",""],              ["2","key",""],["3","key",""],["4","key",""],["5","key",""],["6","key",""],["7","key",""],["8","key",""],["9","key",""],["0","key",""],          ["Backspace","effect","backspace"],
                  ["a","key",""],              ["z","key",""],["e","key",""],["r","key",""],["t","key",""],["y","key",""],["u","key",""],["i","key",""],["o","key",""],["p","key",""],          ["Enter","effect","enter"],
                  ["q","key",""],              ["s","key",""],["d","key",""],["f","key",""],["g","key",""],["h","key",""],["j","key",""],["k","key",""],["l","key",""],["m","key",""],          ["\'","key",""],                    ["\"","key",""],
                  ["w","key",""],              ["x","key",""],["c","key",""],["v","key",""],["b","key",""],["n","key",""],[",","key",""],[".","key",""],["!","key",""],["?","key",""],          ["Up","effect","up"],               ["/","key",""],
                  ["Maj","modifier","default"],[" ","key","space"],                                        ["(","key",""],[")","key",""],["-","key",""],["@","key",""],["Left","effect","left"],["Down","effect","down"],           ["Right","effect","right"]
               ]

let clicking
let majState = false
keyList.forEach(function(element)
{
  let key = document.createElement('div')
  key.innerHTML = element[0]
  key.classList.add(element[1])
  key.id = element[2]
  key.addEventListener(
    'mouseenter',
    function()
    {
      key.classList.add('runAnimation')
      const type = element[1]
      clicking = window.setInterval(function(){keyEffect(key, type)}, 1000)
    }
  )
  key.addEventListener(
    'mouseleave',
    function()
    {
      key.classList.remove('runAnimation')
      void element.offsetWidth
      window.clearInterval(clicking)
    }
  )
  GKkeyboardContainer.appendChild(key)
})

const keyEffect = function (key, type)
{
  BKisActive = document.querySelector('.BKisActive')
  if (type == "key")
  {
    if (majState)
    {
      BKisActive.value += key.innerHTML.toUpperCase()
      majState = false
      document.querySelector(".modifier").id = "default"
    }
    else
    {
      BKisActive.value += key.innerHTML
    }
  }
  else if (type == "modifier")
  {
    if(key.id == "active")
    {
      key.id = "default"
      majState = false
    }
    else
    {
      key.id = "active"
      majState = true
    }
  }
  else if (type == "effect")
  {
    if (key.id == 'backspace')
    {
      BKisActive.value = BKisActive.value.substring(0, BKisActive.value.length-1)
    }
  }
}

/*
** ROMAIN'S SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/


chrome.storage.local.get('parameter0', function(result) {
  console.log(result.parameter0)
})

/*
window.addEventListener('mousemove', (_event) =>{
  const loop = () =>
  {

    window.requestAnimationFrame(loop)
    underCursor = document.elementFromPoint(_event.clientX,_event.clientY)
    if (underCursor.classList.contains("GKclickable")) {}
    else {underCursor.classList.add("GKclickable")}
  }
})
loop()
let bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color')
console.log(bgColor)
*/
window.addEventListener('mousemove', (_event) => {
  let underCursor = document.elementFromPoint(_event.clientX,_event.clientY)
  let timeOut
  timeOut = setTimeout(function(){underCursor.click()}, 2000)
  console.log(underCursor)
  underCursor.addEventListener('mouseleave', ()=>{
    window.clearTimeout(timeOut)
  })
})