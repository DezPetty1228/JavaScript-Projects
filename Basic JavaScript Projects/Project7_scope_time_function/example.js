function Age_Function() 
    Age = document.getElementById("Age").ariaValueMax;
    if (Age >= 18) { // checks if number entered is 18 or greater
        Vote = "you are old enough to vote!"; // returns Message if greater than 18
    }
    else { //if number that is entered that is less than 18   
       Vote =  "you are not old enough to vote!"; // this message will be returned if number is any number that is less than 18
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}