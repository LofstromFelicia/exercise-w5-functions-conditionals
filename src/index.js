// --- 1 --- 
const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  )
}
theCoders("Jennie", "Alfons")

// --- 2 ---
/* Note: I also fixed the script path in index.html from "src/index.js" to "index.js" because it was causing a GET error. :) 
*/

// theCoders("Jennie") - "navigator undefined" 

// --- 3 ---
const compareNames = (driver, navigator) => {
  if (driver.length > navigator.length) {
    console.log("The driver has the longest name.")
  }
  else if (navigator.length > driver.length) {
    console.log("The navigator has the longest name.")
  }
  else {
    console.log("The driver and the navigator has equally long names.")
  }
}

compareNames("Jennie", "Alfons")
// compareNames("Zlatan", "Bo") - driver has longer name

/*
3) 
create a function that checks which name is the longest when comparing the coders 
and print out: "The driver has the longest name." or "The navigator has the longest name" 
or if the names ar the same length "The driver and the navigator has equally long names"
*/

/*
4) 
to get user input you can use the prompt() and then store that into a variable.
Such as 
let userAge = prompt('How old are you?')
Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
alert('wow you are 33! that's young!')
or alert('23! Younger than Zlatan') or something like that.
Add as many conditonals as you want.
*/

const calculationTest = () => {
  /*
  5)
  In this function we want to give the user a mathematical calculation to 
  give us the answer to. Something like prompt('What is 5 + 6?')  
  If the answer is correct, congratulate the user. 'Yay! Correct'
  If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
  You choose if to use addition, subtraction, multiplication or division. 
  */
};

/*
6) **BONUS**
Make the calculation machine we just made show random calculations everytime you invoke the function.
But hey, maybe limit the randomness to be numbers between 0-10?
*/
