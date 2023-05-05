
const {Circle, Triangle, Square}= require('./shapes');

describe('Circle', () => {
    test('render svg for a green circle', () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
      const circle = new Circle();
      circle.setColor('green');
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  
    test('it must accept a fillcolor param', () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
      const circle = new Circle();
      circle.setColor('blue');
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });

describe('Triangle', () =>{
    test('render svg for a green Triangle',()=>{
        const expectedSvg ='polygone points ="150, 18 244, 182 56,182" fill="green"/>';
        const triangle= new Triangle();
        triangle.setColor('green');
        const actualSvg= triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('it must accept a fillcolor param',()=>{
        const expectedSvg ='<polygone points ="150, 18 244, 182 56,182" fill="blue"/>';
        const triangle= new Triangle();
        triangle.setColor('black');
        const actualSvg= triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
describe('Square', () => {
    test('render svg for a red square', () => {
        const expectedSvg = "<rect x='100' y='100' height='100' fill='red'/>";
        const square = new Square();
        square.setColor('red');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

    test('it must accept a fillcolor param', () => {
        const expectedSvg = "<rect x='100' y='100' width='120' height='120' fill='pink'/>";
        const square = new Square();
        square.setColor('pink');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
