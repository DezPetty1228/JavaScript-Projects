
            function add() { //Declares Function
               var num1, num2, sum; // Defines porential variables within function
               num1 = parseInt(document.getElementById("firstnumber").value); // designates where Values exist within function
               num2 = parseInt(document.getElementById("secondnumber").value);
               sum = num1 + num2; //establishes logic of the function
               document.getElementById("plus").value = sum; //calls Function
             }
            function subtract() { //Declares Function
                var num3, num4, dif; // Defines porential variables within function
                num3 = parseInt(document.getElementById("number3").value);
                num4 = parseInt(document.getElementById("number4").value);
                difference = num3 - num4; //establishes logic of the function
                document.getElementById("less").value = difference; //calls Function
            }
          
            function multiply() { //Declares Function
                var num5, num6, product; // Defines porential variables within function
                num5 = parseInt(document.getElementById("number5").value);
                num6 = parseInt(document.getElementById("number6").value);
                product = num5 * num6; //establishes logic of the function
                document.getElementById("multi").value = product; //calls Function
            }
           
           function divide() { //Declares Function
                var num7, num8, quotient; // Defines porential variables within function
                num7 = parseInt(document.getElementById("number7").value);
                num8 = parseInt(document.getElementById("number8").value);
                quotient = num7 / num8; //establishes logic of the function
                document.getElementById("divi").value = quotient; //calls Function
            }
           
           function more_Math() { //declares Function
            var simple_Math = (1+2) * 10 / 2 - 5;
            document.getElementById("math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
           }