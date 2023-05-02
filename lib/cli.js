const inquirer = require('inquirer');
const SVG = require('./SVG');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');

class CLI {
    run() {

inquirer
    .prompt([
        {
            name: 'text',
            type: 'input',
            message: 'Enter text for logo(must be 3 characters)',
            validate: (text) =>
                text.length <= 3 ||
                'Text must contain not more than 3 characters',
        },
        {
            name: 'textColor',
            type: 'input',
            message: "Please Enter Text Color:",
        },
        {
            name: 'shapeType',
            type: 'list',
            message: 'Please Select a Shape type:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            name: 'shapeColor',
            type: 'list',
            message: 'Please Select a Shape Color:',
            choices: ['Green', 'Yellow', 'Black', 'Blue', 'Red'],
        },
    ])
    .then((answer) => {
        let shape;
        switch (answer.shapeType) {
            case 'Circle':
                shape = new Circle();
                break;
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            default:
                shape = new Triangle();
                break;
        }
        shape.setColor(answer.shapeColor);
        
        const svg = new SVG(100, 100);
        svg.setShape(shape);
        svg.setText(answer.text, answer.textColor);

        return writeFile('logo.svg', svg.render());
    })
    .then(() => {
        console.log('SVG file saved as logo.svg');
    })
    .catch((err) => {
        console.error(err);
    });
}
}

module.exports = CLI;