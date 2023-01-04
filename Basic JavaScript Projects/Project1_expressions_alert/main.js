var Zip = ("welcome to my Page"); //Defines Variable Zip naming it
window.alert(Zip); 
var Family = "The Pettys", Dad = "Dezden", Mom = "Alissa", Daughter = "Brynn", Son = "Kaden";//Defines Variable and gives values
var Sent1 =("This is the beginning of the string"); //Defines variable and gives string value
var Sent2 = ("and this is the end of the string"); // Defines Variable and gives string Value
document.write(Sent1+Sent2);
function My_First_Function() {        //Defining a Function and naming it
    var str = "This is the button text!"; //Defining a Variable and giving it a string value
    document.getElementById("Button_Text") .innerHTML = str; //puting the value of the variable into the HTML elementFromPoint // with the "Button_Text" id
}
function myFunction() { //Defines Function 
    var sentence ="I am Learning"; // Defines Variable, and gives it a string value
    sentence += "a lot from this book!"; // Concatenates a string
    document.getElementById("Concatenate").innerHTML = sentence; // creates an Elements Id
}
function yoFunction(p1, p2) {// defines yoFunction 
    return p1 * p2; // explains results of function
document.getElementById("fire").innerHTML = yoFunction(17, 43);}// Multiplies 17 and 43 using yoFunction
function addition_Function() { //Created a function to add 2+2
    var addition = 2+2;//Defines variable addition
    document.getElementById("MATH").innerHTML = "2+2 = " + addition;// Calls MATH
}
