class SVG {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.shape = null;
    this.text = null;
  }

  setShape(shape) {
    this.shape = shape;
  }

  setText(text, color) {
    this.text = { value: text, color };
  }

  render() {
    const shapeSvg = this.shape.render();
    const textSvg = this.text
      ? `<text x="50" y="70" fill="${this.text.color}">${this.text.value}</text>`
      : '';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
      ${shapeSvg}
      ${textSvg}
    </svg>`;
  }
}

module.exports = SVG;