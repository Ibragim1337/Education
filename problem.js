console.clear();

// class Car {
//     beep(){
//         return "beep";
//     }
// }

// class Audi extends Car{
//     // constructor(){
//     //     super();
//     // }
    
// }


// function Car (){}

// Car.prototype.beep = function(){
//     return "beep"
// }

// function Audi (){
//     Car.call(this);
// }

// Object.setPrototypeOf(Audi.prototype, Car.prototype);


// const audiR8 = new Audi();

// console.log(audiR8.beep());


// class Rect {
//     #width;
//     #height;

//     constructor (width, height){
//         this.#width = width;
//         this.#height = height;
//     }

//     get width (){
//         return this.#width
//     }

//     get height (){
//         return this.#height
//     }

//     area() {
//         return this.#height * this.#width;
//     }
// }

// class Square extends Rect {
//     constructor (width, height){
//         super(width, height)
//     }

//     perimeter(){
//         return (this.width + this.height) * 2;
//     }
// }

// function Rect(width, height) {
//     const _width = width;
//     const _height = height;

//     Object.defineProperty(this, "width", {
//         get() {
//             return _width;
//         }
//     });

//     Object.defineProperty(this, "height", {
//         get() {
//             return _height;
//         }
//     });
// }

// Rect.prototype.area = function () {
//     return this.width * this.height;
// }

// function Square(side){
//     Rect.call(this, side, side);
// }

// Object.setPrototypeOf(Square.prototype, Rect.prototype);

// Square.prototype.perimeter = function (){
//     return (this.width + this.height) * 2;
// }

// const square1 = new Rect(12, 10);

// const square2 = new Square(3, 4);

// console.log(square2.area());
// console.log(square2.perimeter());


//------------------------------------------------------










