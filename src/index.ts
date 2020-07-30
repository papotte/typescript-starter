import * as PIXI from "pixi.js"

const component: () => HTMLDivElement = () => {
  const element = document.createElement('div')

  element.innerHTML = 'Hello webpack which changes!'
  element.style.border = '1px solid blue'

  return element
}

document.body.appendChild(component())

let app = new PIXI.Application({
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1,      // default: 1
  resizeTo: window
});
app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
document.body.appendChild(app.view);
