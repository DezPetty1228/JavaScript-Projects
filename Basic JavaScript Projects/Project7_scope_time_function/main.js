function time_Function() { // defines Function
    var Time = new Date().getHours(); //takes time from the computer
    var Reply; // defines reply dependant on time
    if (Time < 12 == Time > 0) { // gives parameters breaking the 24 hr clock into sections
        Reply = "It is morning time!"; // return message if time hour is <= 12
    }
    else if (Time >= 12 == Time < 18) { // establishes seperate section of the 
        Reply = "It is afternoon."; // return message for 12pm -6pm
    }
    else {
        Reply = "It is evening time.";// return message for 7pm
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // calls information for Time from HTML 
}

function error_Function () { // establishes error function
    var S = "This is a Error"; // defines variable
    console.log(s)// In order to fix the error I would have to utilize a capital S
}