 function Call_Loop() { //creates function
    var Digit = ""; // defines variable
    var x = 1; // defines x
    while (x < 11) { // establishes parameters of loop
        Digit += "<br>" + x; 
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
 }

 let text = "Inglewood"; // defines text 
let length = text.length; // defines  length
return (text.length);

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; // defines variable
var Y;
function for_Loop() { // establishes loop function
    for (Y = 0; Y < Instruments.length; Y++) { // defines parametersa
    Content += Instruments[Y] + "<br>"; // results
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}