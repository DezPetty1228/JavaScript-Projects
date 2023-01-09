function full_Sentence() {
    var part_1 = "I have";
    var part_2 = "made this";
    var part_3 = "into a complete";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
let text = "Hello World!";
let result = text.toUpperCase();
document.getElementById("demo").innerHTML = result;

let text = "Mr. Blue has a blue house"
let position = text.search("Blue");
document.getElementById("Search").innerHTML = position;

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}
function precision_Method() {
    var x2 = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x2.toPrecision(10);
    
}
//The toFixed() method converts a number to a string
// The toFixed() method rounds the string to a specified number of decimals.
let num = 5.56789;
let n = num.toFixed(10);
document.getElementById("fix").innerHTML = n;

//The valueOf() method returns the primitive value of a number.
// number.valueOf() = sentax 
let num2 = 15;
let n1 = num.valueOf();
document.getElementById("value").innerHTML = n;
