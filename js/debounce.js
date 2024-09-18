let counter = 0;

const fetchData = (args) => {
  console.log("From the fetchData", args);
  console.log("fetch data was called with ", args, " for the ", ++counter);
};

const doSomething = function (fnName, delay) {
  let timer;
  console.log("In the doSomething, args value is ", arguments);
  return (...args) => {
    console.log("arguments value is ", arguments);
    console.log("Args value is ", args);
    let context = this;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fnName.apply(context, args);
    }, delay);
  };
};

const betterFunction = doSomething(fetchData, 1000);
