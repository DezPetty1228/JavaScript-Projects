//creates an object to  keep track of values
    const Calculator = {
        //This will display 0 on the calculator screen.
        Display_Value: '0',
        //This will hold the first operand for any expressions,we set it null for now
        First_Operand: null,
        //This checks wether or not the second operand has been inputted by the user
        Wait_Second_Operand: false,
        // this will hold the operator, we set it null for now.
        operator: null,
    };

    //This modifies values each time a button is clicked on.
    function Input_Digit(digit) {
        const {Display_Value, Wait_Second_Operand } = Calculator;
        //This checks if the Wait_Second_Operand is true and set Display_Value
        //to the key that was clicked on.
        if (Wait_Second_Operand === true) {
            Calculator.Display_Value = digit;
            Calculator.Wait_Second_Operand = false;
        } else {
            //This overwrites Display_value if the current value is 0
            //otherwise it adds onto it.
            Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
        }
    }

    //This section handles decimal points.
    function Input_Decimal(dot) {
        //This ensures that accidental clicking of the decimal point doesn't
        //cause bugs in the operation.
        if (Calculator.Wait_Second_Operand === true) return;
        if (!Calculator.Display_Value.includes(dot)) {
            //We are sying that if the Display_Value does not contain a decimal point
            //We want to add a decimal point.
            Calculator.Display_Value += dot;
        }
    }

    //This section handles operators 
    function Handle_Operator(Next_Operator) {
        const {First_Operand, Display_Value, operator} = Calculator;
        //When an operator key is pressed we convert the current number
        //displayed on the screen to a number and then store the results in 
        //Calculator
        const Value_of_Input = parseFloat(Display_Value);
        //Checks if the operator already exists and if Wait_Second_Operand is true,
        //then updates the operator an exits from the function
        if (operator && Calculator.Wait_Second_Operand) {
            Calculator.operator = Next_Operator;
            return;
        }
        if (First_Operand == null) {
            Calculator.First_Operand = Value_of_Input;
        } else if (operator) {//Checks if an operator already exists
            const Value_Now = First_Operand || 0;
            //If operator exists, property lookup is performed for the operator
            //in the perform_Calculation object and the function that matches the 
            //operator is executed
            let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
            //Here we add a fixed amount of numbers after the decimal
            result = Number(result).toFixed (9);
            //This will remove any trailing 0's
            result = (result *1).toString();
            Calculator.Display_Value = parseFloat(result);
            Calculator.First_Operand = parseFloat(result);
        } 
        Calculator.Wait_Second_Operand = true;
        Calculator.operator = Next_Operator;
    }
    const Perform_Calculation = {
        '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
        '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
        '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
        '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
        '=': (First_Operand, Second_Operand) => Second_Operand
    };
    function Calculator_Reset() {
        Calculator.Display_Value = '0';
        Calculator.First_Operand = null;
        Calculator.Wait_Second_Operand = false;
        Calculator.operator = null;
    }
    //This function updates the calculator screen with the contents of Display_VAlue
    function Update_Display() {
        //Makes use of the calculator-screen class to target the 
        //input tag in HTML document
        const display = document.querySelector('.calculator-screen');
        display.value = Calculator.Display_Value;
    }

    Update_Display();
    //This section monitors button clicks
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        //The Target variable is an object that represents the element 
        //that was clicked.
        const { target } = event;
        //If the element that is clicked on is not a button exit the function.
        if (!target.matches('button')) {
            return;
        }
        if (target.classList.contains('operator')) {
            Handle_Operator(target.value);
            Update_Display();
            return
        }
        if (target.classList.contains('decimal')) {
            Input_Decimal(target.value);
            Update_Display();
            return;
        }
        //Ensures that AC clears all inouts from the Calculator screen.
        if (target.classList.contains('all-clear')) {
            Calculator_Reset();
            Update_Display();
            return;
        }
        Input_Digit(target.value);
        Update_Display();
    })