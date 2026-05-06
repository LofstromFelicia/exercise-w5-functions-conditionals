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
  } else if (navigator.length > driver.length) {
    console.log("The navigator has the longest name.")
  } else {
    console.log("The driver and the navigator has equally long names.")
  }
}

compareNames("Jennie", "Alfons")
// compareNames("Zlatan", "Bo") - driver has longer name

// --- 4 --- 
const checkAge = () => {
  let userAge = prompt("How old are you?")

  if (userAge < 18) {
    alert(`Wow, ${userAge}! You are just a kid!`)
  } else if (userAge == 33) {
    alert("33! That's a prime age!")
  } else {
    alert(`${userAge}! Younger than Zlatan (probably)!`)
  }
}

checkAge()

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
