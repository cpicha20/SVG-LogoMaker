

class Shape {
    constructor(inq){
        this.inq = inq;
        
    }
    
    render(){
        
    return`    
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${this.shape()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.inq.txtColor}">${this.inq.txt}</text>

</svg>`
    }

}


class Square extends Shape {
    constructor(inq){
        super(inq);
    }
    shape(){
        return`<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="1" fill="${this.inq.shapeColor}" />`
    }
}
class Circle extends Shape {
    constructor(inq){
        super(inq);
    }
    shape(){
        return`<circle cx="50" cy="50" r="40" fill="${this.inq.shapeColor}" />`
    }
}
class Triangle extends Shape {
    constructor(inq){
        super(inq);
    }
    shape(){
        return`<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="1" fill="${this.inq.shapeColor}" />`
    }
}