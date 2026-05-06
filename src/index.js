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

// --- 5 --- 
const calculationTest = (driverName, navigatorName) => {
  let num1 = Math.floor(Math.random() * 11)
  let num2 = Math.floor(Math.random() * 11)
  let correctAnswer = num1 + num2

  let userAnswer = prompt(`Hi ${driverName}! To start your engine, prove you are awake. What is ${num1} + ${num2}?`)

  if (Number(userAnswer) === correctAnswer) {
    alert(`Yay! Correct! 🥳 Now let's check your age.`)

    let age = prompt(`How old are you, ${driverName}?`)

    if (Number(age) >= 18) {
      alert(`Great! ${driverName}, you are old enough to drive ${navigatorName} to the destination! 🚗💨`)
    } else {
      alert(`Sorry ${driverName}, you and ${navigatorName} have to wait ${18 - age} more years for a driver's license. 🚌`)
    }

  } else {
    alert(`Nooo, the answer is ${correctAnswer}. No driving for you today! 🧠`)
  }
};

calculationTest("Jennie", "Alfons")

/*
6) **BONUS**
Make the calculation machine we just made show random calculations everytime you invoke the function.
But hey, maybe limit the randomness to be numbers between 0-10?
*/
