const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

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