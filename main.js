/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/
function Make () {
  this.makeName = "Honda";
  console.log(this); 
}

function Model () {
  this.modelName = "Pilot";
  console.log(this);
}

Model.prototype = new Make();
console.log()

function Car () {
  
}

Car.prototype = new Model();


var firstCar = new Car();
  firstCar.color = "black";

var secondCar = new Car();
  secondCar.color = "grey";

var thirdCar = new Car(); 
  thirdCar.color = "blue";

console.log(firstCar);

console.log(secondCar);

console.log(thirdCar);

/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

/*
Create a function, Model, to hold the 
corresponding property and value
*/



// What is the prototype of a Model?


// Define a Car


// What is the prototype of a Car?


// Create the first car


// Create the second car


// Create the third car
