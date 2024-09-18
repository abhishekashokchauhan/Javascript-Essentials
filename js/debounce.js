// It has been a hell of a journey today.

let counter = 0;

// Had it not been the debouncing, we would have called this function.
const fetchData = function (args) {
  // Here we are getting out search text as the string.
  // Learned one more new thing that "arguments" would be available inside the "function". i.e. function declaration
  // "arguments" would not be available inside the "()" i.e. function statement
  console.log("In the fetchData, the arguments are ", arguments);
  console.log("From the fetchData", args);
  console.log("fetch data was called with ", args, " for the ", ++counter);
};

// This is my higher order function
// This takes the function as input and returns a function
const doSomething = function (fnName, delay) {
  let timer;
  // Below you would get 2 !
  // First is the definition of the function being called
  // Second is the delay
  // We would not get the searchText in the arguments
  console.log("In the doSomething, arguments value is ", arguments);
  return (...args) => {
    // Here the arguments still remain the same
    // First is  definition and the second is the delay
    console.log("arguments value is ", arguments);
    // Now comes the interesting part !
    // args here would be an array ! array that has just the one element, searchText !
    // Had we not written the ...args, it would have been a String !
    // And if it had been a string, it would fail !
    // Because ..... apply needs a GODDAMN array !!!!
    console.log("Args value is ", args);
    let context = this;
    if (timer) {
      // Clearing out the previous timers
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // Calling our function now !
      fnName.apply(context, args);
    }, delay);
  };
};

// We would be calling the betterFunction from our HTML.
// In the HTML, we would give the onkeyup="betterFunction(event.target.value)"
const betterFunction = doSomething(fetchData, 1000);
