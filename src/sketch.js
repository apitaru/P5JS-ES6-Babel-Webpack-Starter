const sketch = (p) => {
  let gray = 0

  p.setup = function () {
    p.createCanvas(600, 400)
  }

  p.draw = function () {
    p.background(gray)
    p.rect(p.width/2 - 25, p.height/2 - 25, 50, 50)
  }

  p.mousePressed = function () {
    gray = (gray + 16) % 256
  }
}

// See https://github.com/processing/p5.js/wiki/Instantiation-Cases
new p5(sketch);  // 2nd param can be a canvas html element

