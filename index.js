const inquirer = require('inquirer');
const {Shape,Circle,Square,Triangle} = require('./lib/shape.js');
const createShape  = require('./lib/writefile.js')


function init(){
    inquirer
    .prompt([
       {
        type: 'input',
        name: 'txt',
        message: 'Enter the text input (max 3 characters) :',
        validate: function(input) {
            if (input.length <= 3) {
              return true; // Input is valid
            }
            return 'Text must be 20 characters or less.';
          }
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
        name: 'txtColor',
        message: 'Enter the text color:',
      },
    ])
    .then((param) => {
        createShape(param);
    });
}

init();
