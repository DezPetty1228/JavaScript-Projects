function cat_pics() { // establishes function
    var Cat_Picture = []; // defines variable as an array
    Cat_Picture[0] = "sleeping"; // defines position 0 value
    Cat_Picture[1] = "playing";  // defines position 1 value
    Cat_Picture[2] = "eating"; // defines position 2 value
    Cat_Picture[3] = "purring";  // defines position 3 value
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}