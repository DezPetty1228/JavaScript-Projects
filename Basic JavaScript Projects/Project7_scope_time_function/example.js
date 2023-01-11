
function Age_Function() {// Establishes Age function
   var Age = document.getElementById("Age").value; // defines variable
    if (Age >= 18) { // checks if age is more than 18
        Vote = "You are old enough to vote!"; // returns message if old enough
    }
    else { // checks for any number less than 18
        Vote = "You are not old enough to vote!"; // Return messsage for 17 and lower
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}