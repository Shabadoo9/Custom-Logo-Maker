const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const { Triangle, Square, Circle, TextColor } = require('./assets/shapes.js');

// inquirer questions
const questions = [
    {
        type: "list",
        name: "shape",
        message: "choose a shape for your logo!",
        choices: ["circle", "square", "triangle",],
    },
    {
        type: "input",
        name: "logoText",
        message: "enter up to three letters for your logo!",
        validate: function (input) {
            if (input.length > 3) {
                return "Please provide three or fewer characters.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Choose a color for your logo (hexadecimal allowed)!",
    },
    {
        type: "input",
        name: "textColor",
        message: "Choose a color for your text (hexadecimal allowed)!",
    },
];

//Function to write the SVG file
// Function to write the SVG file
function writeToFile(fileName, data) {
    const shape = data.shape;
    const shapeColor = data.shapeColor;
    const textColor = data.textColor;
    const logoText = data.logoText;

    let svgHTML = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgHTML += '<g>';

    // Create instances of the shape and text classes
    const shapeInstance = new (shape === 'circle' ? Circle : shape === 'square' ? Square : Triangle)();
    const textColorInstance = new TextColor();
  
    // Set colors
    shapeInstance.setColor(shapeColor);
    textColorInstance.setColor(textColor);

    // Render shapes and text
    svgHTML += shapeInstance.render();
    svgHTML += textColorInstance.render(logoText);

    svgHTML += '</g>';
    svgHTML += '</svg>';

    fs.writeFile(fileName, svgHTML, function (err) {
        if (err) {
            return console.log(err);
        } else {
            console.log('Your SVG file has been created!');
        }
    });
}

//Function to initialize the application
function init() {
    inquirer.prompt(questions).then(function (data) {        
        console.log("Hit init function!");
        writeToFile("logo.svg", data);

    });
};


//Initialization of app upon CLI call
init();