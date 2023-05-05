const { Circle, Triangle, Square } = require('./shapes');

class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeElement}
      ${this.textElement}
    </svg>`;
  }

  setText(message, color) {
    if (message.length > 3) {
      throw new Error('Text must not exceed more than 3 characters!')
    };
    this.textElement =` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
  }

  setShape(shape, color) {
    if (shape instanceof Circle || shape instanceof Triangle || shape instanceof Square) {
      shape.setColor(color);
      this.shapeElement = shape.render();
    } else {
      throw new Error('Invalid shape');
    }
  }
}

module.exports = SVG;