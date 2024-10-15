// By default, it would be bubbling up and not the capturing down
// By default, the capture=false as the 3rd argument in the addEventListner

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent was clicked !");
    e.stoppropagation();
  },
  true
); // Capture

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent was clicked !");
  },
  false
); // Bubble

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child was clicked !");
  },
  true
); // Capture

// If marked as True, then capture is on, grandparent › parent › child
// We also learned about the combination
// Golden rule is as W3C said entire cycle would be followed.
// Default is capturing, so start with the first one and go inside then onwards
// Consider making one U shape withe capture and bubble.
// Start the cycle with capture
// Complete the capture cycle from top down
// once done, start the bubble cycle and cover the elements that were not captured in capture cycle.
// We can do, e.stopPropagation() to stop the propagation cycle :)
// Now, I can answer any capturing and bubbling related questions.
