/*
** FINISHED FEATURES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** AUTO SCROLLING
*/
const GKbody = document.querySelector('body')
let scroll = () =>
{
  let scrollY = 0
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
}
/*
** clickable things
*/
let biggerLink = () =>
{
  const GKclickableAll = document.querySelectorAll('button, a, h3, ._6q-tv, ._4EzTm, .uL8Hv, _0ZPOP')

  for (let i = 0 ; i < GKclickableAll.length ; i++)
  {
    GKclickableAll[i].classList.add("GKclickable")
  }
}
/*
** LUCAS' SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** VIRTUAL KEYBOARD
*/
let virtualKeyboard = () =>
{
  const GKkeyboardContainer = document.createElement('div')
  GKkeyboardContainer.classList.add('GKkeyboardContainer')
  GKbody.appendChild(GKkeyboardContainer)

  const inputsList = document.querySelectorAll('input')
  inputsList.forEach(function(element)
  {
    element.addEventListener(
      'click',
      function()
      {
        let previousActive = document.querySelector('.GKisActive')
        if(previousActive != undefined)
        {
          previousActive.classList.remove('GKisActive')
        }
        this.classList.add('GKisActive')
        GKkeyboardContainer.style.visibility = 'visible'
      }
    )
  })

  const keyList = [
                    ["Leave","effect","leave"],
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
    GKisActive = document.querySelector('.GKisActive')
    if (type == "key")
    {
      if (majState)
      {
        GKisActive.value += key.innerHTML.toUpperCase()
        majState = false
        document.querySelector(".modifier").id = "default"
      }
      else
      {
        GKisActive.value += key.innerHTML
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
        GKisActive.value = GKisActive.value.substring(0, GKisActive.value.length-1)
      }
      else if (key.id == "leave")
      {
        GKkeyboardContainer.style.visibility = 'hidden'
      }
    }
  }
}
/*
** ROMAIN'S SANDBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
** AUTO CLICK
*/

chrome.storage.local.get(["parameter0","parameter1","parameter2","parameter3"], function(result) {
  if(result.parameter0 == 1)
  {
    virtualKeyboard()
  }
  if(result.parameter1 == 1)
  {
    scroll()
  }
  if(result.parameter2 == 1)
  {
    biggerLink()
  }
  if(result.parameter3 == 1)
  {
    autoClick()
  }
})

let autoClick = () =>
{
  window.addEventListener("mousemove", (_event) => {
    let underCursor = document.elementFromPoint(_event.clientX,_event.clientY)
    let timeOut
    timeOut = setTimeout(function(){
      underCursor.click()
      window.clearTimeout(timeOut)
    }, 2000)
    underCursor.addEventListener("mouseleave", ()=>{
      window.clearTimeout(timeOut)
    })
  })
}
