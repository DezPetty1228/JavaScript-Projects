function validate_Form() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
}