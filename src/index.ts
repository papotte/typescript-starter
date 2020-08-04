import {Application} from 'pixi.js'
import './style/main.scss'

const content: HTMLElement = <HTMLElement>document.getElementById('content')

const component: () => HTMLDivElement = () => {
  const element = document.createElement('div')

  element.innerHTML = 'Hello webpack which changes!'
  element.style.border = '1px solid blue'

  return element
}

content.appendChild(component())

const app = new Application({
  antialias: true,
  transparent: false,
  resolution: 1,
  resizeTo: window,
})
app.renderer.backgroundColor = 0x061639
app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
content.appendChild(app.view)
