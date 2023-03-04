myFunction = function() { // defines a function that will return a string hen called
    return "This is my function";//the variable myFunction is assigned the value of a new function that returns the string.


}
//the variable myFunction is assigned the value of a new function that returns the string.
myFunction = () => "This is my function" // accomplishes the same thing as the above function
 
//In this example, the arrow function takes the values as val from the car variable in innerHTML.
var car;
 car = (val) => "These are my favorite car brands: " + val;
 document.getElementById('displayCar').innerHTML = car("Tesla, Audi, Lucid"); 
 var ages = [2, 10, 18, 20, 13, 15, 30];
 //Using the arrow function to pass in a parameter of age
 checkAge = (age) => age >= 18;

 function ageFunction() {
    // use the .some() to iterate through the array of ages and display the result.
    document.getElementById('displayAge').innerHTML = ages.some(checkAge);
    // Once the function gets to 18 in the array it won’t check the rest of the variables in the ages array, as 18 fulfills the function requirement.
 }
 