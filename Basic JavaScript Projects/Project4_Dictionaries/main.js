function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Pitbull",
        Sound: "Bark!"
    };
delete Animal.Species;
document.getElementById("dictionary").innerHTML = Animal.Species;
}
