function mathAdd(S1, S2){ //Created a Addition Function
    return S1 + S2;//defines result
    document.getElementById("Math").innerHTML = mathAdd(68, 94);// asks http element to grab the addition function and use it to find the sum of 68 and 94
}
function subtract_Function(S1, S2){ //Creates Subtraction Function
    return S1 - S2; // defines results 
    var Subtraction = S1 - S2 //Defines Variable amd gives it an operator
    document.getElementById("Math").innerHTML = "85 - 9 =" + subtraction_Function;
}
function multiplication() { //Creates and Defines multiplication function
    var simple_Math = 6 * 8; // defines variable
    document.getElementById("Math").innerHTML = "6 x 8 =" + simple_Math; // Calls function
}
function division() { //Creates and Defines Division function
    var Divi = 48 / 6; // Defines variable
    document.getElementById("Math").innerHTML = "48 / 6 =" + Divi; // Cals Function into HTML
}
function more_Math () { // Defines Function
    var simple_Math1 = (1+2) * 10 / 2 -5; // defines Variable
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math1;
}
function modulus_Operartor() { //Defines Function 
    var simp_Math = 25 % 6;     // defines variable using Modulus Operator
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simp_Math;
}
function negation_Operator() { //negation operator.” This returns the opposite or negative form of something.
    var x = 10; //A “unary operator” is an operation that only contains a single operand.
    document.getElementById("Math").innerHTML = -x;
}
var Q = 5;
Q++; //An increment is an addition or increase to something. “To increment” means to increase. The increment operator in JavaScript is written as ++ and counts one step up.
document.write(Q) //This would increment from 5 to 6.
var E = 5.25;
E--;// “decrease or reduce.” In computing, it means “to reduce by discrete (individually separate) amounts.
document.write(E); //This would show up as “4.25.”
window.alert(Math.random()); //To return a random number between 0 and 1, you would write the following JavaScript code:
window.alert(Math.random() * 100);//If you would like to have a random number displayed between ___ and ___ (such as between 0 and 100), you would write the following code:

