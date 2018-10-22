/* Question 1: Create a variable of each of the following data types
String, Int, Bool, Float

Question 2: Create a variable called true0False. Create an if statement
so that if the variable is true and the number 1 is returned. otherwise the
number 2 is returned.

Question 3: Create a loop that counts every even number from 1-100 starting at 0


Question 4: Create a variable that is a bool and is equal to true. Create a
while loop that will print "hello" to the console 20 times and then stop

Question 5: Create a function that can determine if a parameter is true or false.
If it is true return the string "true". Otherwise, return false. */



//Question 1
let bop1 = "Jill is the best";
let numbers= 37;
let isJillOssum = true;
let pi = 3.14;


//Question 2
var true0False = false;

if (true0False === true) {
 console.log("1")
} else {
  console.log("2")
}

//Question 3
let num= 100
for (let i=0; i<=num; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
//Question 4
var bop = function()
{   
    var i = 0
        while(i<=20){   
    
       console.log("hello");      
        i++;    
      }    
    };   
    
    bop();   

// Question 5
function calculateDogAge() {
    var age = false;

    if (age === true) {
     console.log("true")
    } else {
      console.log("false")
    }
}

calculateDogAge();
    