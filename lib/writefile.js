const {Shape,Circle,Square,Triangle} = require('./shape.js');
const fs = require("fs");

const createShape = (param) =>{
    let result;
    switch(param.shape){
        case "Square":
            result = new Square(param);
            break;
        case "Circle":
            result = new Circle(param);
            break;
        case "Triangle":
            result = new Triangle(param);
            break;
    }

    fs.writeFile("./createdShape/shape.svg", result.render(),  (err) =>
    err ? console.error(err) :
     console.log('Success! Your SVG is in the createdShape folder.'));

}

module.exports = createShape;
