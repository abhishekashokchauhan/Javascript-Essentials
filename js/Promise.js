// Creating the promise that would resolve after 1s
const pl = new Promise(function (resolve, _) {
  setTimeout(function () {
    resolve();
  }, 1000);
});

// Creating the promise that would resolve after 5s
const p2 = new Promise(function (resolve, _) {
  setTimeout(function () {
    resolve({ message: "P2 promise is resolved" });
  }, 5000);
});

// Play with the different timeout values in the above promises to understand it better
async function doSomething() {
  console.log("Method doSomething started");
  const pidata = await pl;
  console.log(pidata);
  console.log("Pl is resolved at ", new Date());
  // Even though the p2 is fulfilled before pl, the JS would maintain the sequence
  // We know why !
  const { message } = await p2;
  console.log(message);
  console.log("P2 is resolved at ", new Date());
}
doSomething();
