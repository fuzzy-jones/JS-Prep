// these are sample javascript interview type solutions
// I am putting them here with comments for reference and study purposes



// Triple add function

    // adding 3 single arguments together
    // curry the functions by returning anonymous functions while passing in the args
    function tripleAdd(num1) {
        return function(num2) {
            return function(num3) {
                return num1 + num2 + num3;
            };
        };
    }

    tripleAdd(10)(20)(30); // returns 60
    
    // more common multiple arg function
    function tripleAdd1(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    tripleAdd1(10, 20, 30);
        
    // Quadruple add with single and double args
    function quadrupleAdd(num1) {
        return function(num2) {
            return function(num3, num4) {
                return num1 + num2 + num3 + num4;
            };
        };
    }

    quadrupleAdd(10)(20)(30, 40);




// IIFE's

    // immediately invoking function
    // function that is wrapped in parenthesis and the arg to be passed to called right after
    (function doubleNumber(num) {
        return num * 2;
    })(10);
    
    // (function() {
        
    //     function getTotal(a, b) {
    //         return a + b;
    //     }
        
    //     var $ = 'currency';
        
    //     if (true) console.log('hello world');
        
    // })();




// Closures
    console.log("--JAVASCRIPT CLOSURES--");

    // global variable outside of the function
    const globalVariable = 'global var';
    
    // function called outter than passes in a parameter
    function outterFunc(param1) {
        // variable 1 is a functional scope variable
        const variable1 = 'var one';
        
        // inner func passes in another parameter
        function innerFunc(param2) {
            // variable2 has inner function scope
            const variable2 = 'var two';
            
            console.log('globalVariable: ', globalVariable);
            console.log('variable1: ', variable1);
            console.log('variable2: ', variable2);
            console.log('param1: ', param1);
            console.log('param2: ', param2);
        }
        
        innerFunc('param one');
    }
    
    outterFunc('param two');
    // inner function has access to parent function and global space
    console.log("--------------------------");




// This Keyword
    console.log("--THIS KEYWORD--")

    // this is a reference to the object itself
    var house = {
        price: 100000,
        squareFeet: 2000,
        owner: 'Taylor',
        // function is a property of the object that can reference the object itself by using this keyword
        getPricePerSquareFoot: function() {
            // runs some logic to divide the price by square feet to give price per square foot
            return this.price / this.squareFeet;
        }
      };
       
      console.log("price: " + house.price);
      console.log("price per sqft: " + house.getPricePerSquareFoot());

    console.log("--------------------------");




// Singly or Doubly invoked functions
      console.log("--SINGLE OR DOUBLE INVOKED FUNCTION--");

    //   function that will get the total indifferent to way the args are passed when function is called. doesnt take arguments in
      function getTotal() {
        // set a variable called 'arg' that 
        // Array.prototype creates a new array and prototype creates a new property in that array
        // slice will create a copy of the array
        // call bind the context of slice method to arguments passed. will call the method that is slicing the arguments out of the array
        // arguments is built in javascript (array like object), gives access to whatever arguments are passed in, dont need to define arguments when function is written
        var args = Array.prototype.slice.call(arguments);
        
        // if there are 2 arguments in one parenthesis, add the each by the index of which they are in the array created above
        if (args.length === 2) {
            return args[0] + args[1];
        }
        // else if there are single arguments, curry the numbers
        else if (args.length === 1) {
            return function(num2) {
                return args[0] + num2;
          };
        }
      }
       
      console.log(getTotal(10, 20));
      console.log(getTotal(5, 40));
      console.log(getTotal(3)(30));
      console.log(getTotal(8)(12));

      console.log("--------------------------");
      

