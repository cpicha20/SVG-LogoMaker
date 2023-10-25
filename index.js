const fs = require("fs");
const inquirer = require('inquirer');
const {Shape,Circle,Square,Triangle} = require('./lib/shape.js');
const createShape  = require('./lib/writefile.js')


function init(){
    inquirer
    .prompt([
       {
        type: 'input',
        name: 'txt',
        message: 'Enter the text input:',
      } ,
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Square', 'Circle', 'Triangle'],
      },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
      },
      {
        type: 'input',
        name: 'color',
        message: 'Enter the text color:',
      },
    ])
    .then((param) => {
        createShape(param);
    });
}

init();
