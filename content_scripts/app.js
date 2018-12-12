console.log('hey')

const buttons = document.querySelectorAll("button")

for (let i=0;i<buttons.lenght;i++)
{
  buttons[i].classList.add('clickable')
}
