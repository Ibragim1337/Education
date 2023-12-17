// function log(message) {
//     //console.log(message);
//     for (let i = 0; i < arguments.length; ++i){
//         console.log(arguments[i]);
//     }
// }


// log("hi", 789, 12);

// console.clear();

// function summ() {
//     let sum = 0;

//     // for (let i = 0; i < arguments.length; ++i){
//     //     sum += arguments[i];
//     // }

//     for (const num of arguments) {
//         sum += num;
//     }

//     return sum;
// }

// console.log(summ(450, 5));

//-------------------------------------------------------------------------------------

// console.clear();

// function Student(fullName, age, groupNumber){
//     this.fullNAme = fullName;
//     this.age = age;
//     this.groupNumber = groupNumber;
// }

// const s2 = new Student("Ibragim", 24, 233);

// console.log(s2);


//----------------------------------------------------------------------------------------
// console.clear();

// function Student(fullNAme, age, groupNumber){
//     const title = `Student name is ${fullNAme}`;
//     const ageInfo = {normal: age,
//          korean: age + 1};
//     const group = {locattion: "CityPoint",
//          number: groupNumber};

//          this.getTitle = function(){
//             return title;
//          }

//          this.ageInfo = function() {
//             return {
//                 normal: ageInfo.normal,
//                 korean: ageInfo.korean
//             }
//          }

//          this.groupInfo = function() {
//             return {
//                 location: group.locattion,
//                 number: group.number 
//             }
//          }
// }

// const s1 = new Student ('Maxim', 20, 233);

// console.log(s1.groupInfo());
// console.log(s1.ageInfo());

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; ++i){
//     arr[i] = arr.length - [i];
// }

// console.log(arr);

//-----------------------------------lesson----------------------------

// console.clear();

// function Car(model, petrolType) {
//     let _petrolType = petrolType;
//     this.model = model;

//     this.getModel = function (){
//         return this.model;
//     }

//     Object.defineProperty(this, "petrolType",{ // getter
//         get(){
//             return _petrolType;
//         },
//         set(newPetrolType){
//            switch (newPetrolType){
//             case 92:
//             case 95: {
//                 _petrolType = newPetrolType;
//             }
//            }
//         }
//     })

// }

// const car = new Car('audi', 92);

// console.log(car.getModel());
// console.log(car.petrolType);
// car.petrolType = 95;
// console.log(car.petrolType);

// console.clear();

// class Car {
//     #model;
//     #petrolType;
//     constructor(model, petrolType) {
//         this.#model = model;
//         this.#petrolType = petrolType;
//     }

//     getModel(){
//         return this.model;
//     }

//     get petrolType(){ // getter
//         return this.#petrolType
//     }

//     set petrolType(newPetrolType){ //setter
//         switch (newPetrolType){
//             case 92:
//             case 95: {
//                 this.#petrolType = newPetrolType;
//             }
//         }
//     }
    
//     beep(){
//         return `Beep of ${this.#model}`;
//     }
// }



// class Audi {
//     #car;
//     constructor(petrolType){
//     this.#car = new Car('audi', petrolType);
//     }

//     beep(){
//         return this.#car.beep();
//     }
// }

// const car = new Car('audi', 92);

// console.log(car.beep());









// class Bmw {
//     #car;
//     constructor(petrolType){
//         this.#car = new Car('BMW', petrolType);
//     }
    
//     beep(){
//         return this.#car.beep();
//     }
// }

// class Student {
//     #name;
//     #age;
//     #groupNumber;
//     constructor (name, age, groupNumber){
//         this.#name = name;
//         this.#age = age;
//         this.#groupNumber = groupNumber;
//     }

//     get name(){
//         return this.#name;
//     }

//     get age(){
//         return this.#age;
//     }

//     get groupNumber(){
//         return this.#groupNumber;
//     }
// }

//-------------------------lesson-----------------------------


// function Rect(width, height) {
//     this.width = width;
//     this.height = height;

//     this.square = function() {
//         return this.width * this.height
//     }
// }

// Rect.prototype.perimeter = function (){
//     return (this.width + this.height) * 2;
// }

// Rect.prototype.diagonal = function() {
//     return (this.width ** 2 + this.height ** 2) * 0.5;
// }


// class Rect1 {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;

//         this.square = function() {
//             return this.width * this.height
//         }
//     } 

//     perimeter(){
//         return (this.width + this.height) * 2;
//     }

//     diagonal(){
//         return (this.width ** 2 + this.height ** 2) * 0.5;
//     }
// }



//--------------------------------------------------


// function Human (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Human.prototype.sayHi = function(){
//     return `hi! my name is ${this.name}`
// }

// function Player(name, age, sportName, inMainTeam){
//     Human.call(this, name, age);

//     this.sportName = sportName;
//     this.inMainTeam = inMainTeam;
// }

// Object.setPrototypeOf(Player.prototype, Human.prototype);

// const player1 = new Player('Alex', 25, 'football', true);

// console.log(player1);
// console.log(player1.sayHi());

//-----------------------------------------------------------

// console.clear();


// let arr = [1, 3, 5];

// const searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; ++i){
//         if (nums[i] === target){
//             return i;
//         }
//     }

//     if (target > nums[nums.length - 1]){
//         nums.push(target);
//         return nums.length - 1;
//     }
//     if (nums.includes(target) === false){
//         for (let j = 0; j < nums.length; ++j){
//             if (target > nums[j] && target < nums[j + 1]){
//                 nums.splice(j, 0, target);

//                 return j;
//             }
//         }
//     }
// };


// const searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; ++i){
//         if (nums[i] === target){
//             return i;
//         }
//     }

//     if (target > nums[nums.length - 1]){
//         return nums.length;
//     }

//     if (target < nums[0]){
//         return 0;
//     }

//     for (let j = 0; j < nums.length; ++j){
//         if (target > nums[j] && target < nums[j + 1]){
//             return j + 1;
//         }
//     }
// };


// console.log(searchInsert(arr, 2));

//------------------------------------------------------------------------------------------------------------

// const input = document.querySelector('input');

// input.addEventListener('input', function() {
//     const regexp = /[a-zA-Z]{7,}/;

//     console.log(regexp.test(input.value));
// });

//-----------------------------------------------------------------------------------------------------------

console.clear();

const variables = [5, 'qweqwe', true,
[12, 'qweqwe,', false,{
    number:14,
    string: 'qwer',
    boolean: false
}],
{
    number: 5,
    string: 'asdasd',
    boolean: true,
    arr:[12, 'asdda', false, null, undefined],
    null: null,
    undefined: undefined
}, 
null,
undefined];


for(const variable of variables) {
    const asJSON = JSON.stringify(variable);

    console.log(asJSON);

    if(variable === undefined){continue};

    const fromJSON = JSON.parse(asJSON);

    console.log(fromJSON);
}













