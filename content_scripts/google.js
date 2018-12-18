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
** VIRTUAL KEYBOARD
*/

const GKkeyboardContainer = document.createElement('div')
GKkeyboardContainer.classList.add('GKkeyboardContainer')
GKbody.appendChild(GKkeyboardContainer)
const keyList = [
                  ["1","key",""],              ["2","key",""],["3","key",""],["4","key",""],["5","key",""],["6","key",""],["7","key",""],["8","key",""],["9","key",""],["0","key",""],      ["Backspace","effect","twoColumns"],
                  ["a","key",""],              ["z","key",""],["e","key",""],["r","key",""],["t","key",""],["y","key",""],["u","key",""],["i","key",""],["o","key",""],["p","key",""],      ["Enter","effect","twoColumns"],
                  ["q","key",""],              ["s","key",""],["d","key",""],["f","key",""],["g","key",""],["h","key",""],["j","key",""],["k","key",""],["l","key",""],["m","key",""],      ["\'","key",""],                    ["\"","key",""],
                  ["w","key",""],              ["x","key",""],["c","key",""],["v","key",""],["b","key",""],["n","key",""],[",","key",""],[".","key",""],["!","key",""],["?","key",""],      ["Up","effect",""],                 ["/","key",""],
                  ["Maj","modifier","default"],[" ","key","fourColumns"],                                  ["(","key",""],[")","key",""],["-","key",""],["@","key",""],["Left","effect",""],["Down","effect",""],               ["Right","effect",""]
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
  if (type == "key")
  {

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

  }
}


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
