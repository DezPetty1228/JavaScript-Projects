function my_Dictionary() { //creates Dictionary
    var Animal = { //Defines variables
        Species:"Dog", //sub set variables
        Color: "Black", //sub set variables
        Breed:"Labrador" //sub set variables
        Age:5, //Because 5 is the value type “number,” we don’t have to place it within quotation marks.
        Sound:"Bark!" //sub set variables
    };
    delete Animal.Sound; // removes Dictionary entry Animal.Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//The output of our code would be: Bark! Because this was associated with the key “Sound.”
}