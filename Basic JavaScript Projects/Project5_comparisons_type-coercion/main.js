
function my_Function2() {
    document.getElementById("Test").innerHTML = 0/0; // Result would be NaN because you can't divide 0 by 0 
}
function not_Function () {
    document.getElementById("Not").innerHTML = !(20 > 10);//This would return “False.”
}
function not_Function1() {
    document.getElementById("Not").innerHTML = !(5 > 10);//This would return “True.”
}
function equal_Function () {
    document.getElementById("same");
}



ocument.getElementById("test").innerHTML = isNaN('This is a string'); //You can also check whether or not something is a number by using the isNaN() function.
//This would display the result “true” because 'This is a string' is not a number NAN=Not a Number
document.getElementById("test").innerHTML = isNaN('007'); //This would result in “false” because 007 is a number.
document.write(2E310); //To display “infinity” (higher than our maximum floating point number) we would write any number larger than 1.7976931348623157E308. For example:
document.write(-3E310); //To display -Infinity, we would write any negative number that is -1.7976931348623157E308 or lower, such as:
//BOOLEAN LOGIC
document.write(10 > 2); //The output would be “true” because 10 is larger than 2.
document.write(10 > 2); //To output “false” 
// Double Equal signs
document.write(10 == 10); // == is used to check equality, so the result would be true
document.write(64 == 19); // == is used to check equality so the result would be false.
// Tripple Equal signs - The === (triple equal sign) symbol is used to show that a comparison should be made. Specifically, this “===” symbol is an instruction to check whether the data on the left side of the symbol is equal to the data on the right side and that it is the same type of data as that on the right. The answer to this comparison is an answer of “true” or “false.”
x = 10; //Defines X
y = 10; //Defines y
document.write(x === y);// This would return TRUE
A = 82; // defines A as a number
B = "82"; // Defines B as a String because of the ""
document.write(A === B); //This would return false because the types of data are different {string vs number}

C = "Magnus"; //Defines C as a String "Magnus"
D = "Magnus"; //Defines D as a String "Magnus"
document.write(C === D); // C AND D are both strings and contain identical characters, so this return True
// Logic Operators; 
//AND written: &&
document.write(5 > 2 && 10 > 4); //Our code returns “true” because five is greater than two, and ten is greater than four. 
document.write(5 > 10 && 10 > 4); // We can make our code return “false” by changing one or both of the comparisons, such as:
//OR written: ||
document.write(5 > 10 || 10 > 4); // This would return “true” because, while 5 is not greater than 10, 10 is greater than 4
document.write(5 > 10 || 10 > 20); //We can make it return “false” with the following code since neither is true:
//NOT written: !
document.write(typeof "word"); //For example, for the output “string,” we would write the following JavaScript code:
document.write(typeof 3); //Or to output “number” we would write:
document.write("100" + 16); // this would return 10016 just adds 16 to the string "100"