const getWithTimeOut = function () {
  const userInput = document - getElementById("userinput").value;
  const url = "https://api.restful-api.dev/objects/" + userInput;

  // Creating an abort controller
  const controller = new AbortController();
  const signal = controller.signal;
  // Creating an timeout Promise
  const timeoutPromise = new Promise((resolve, reject) => {
    // Setting the timeout that after 2000ms, we would abort the request.
    // Also we would Reject the promise
    setTimeout(() => {
      controller.abort();
      reject(new Error("Request timed out !"));
    }, 1000);
  });

  // Creating the promise for the fetch
  // Passing the signal here so that if needed, it can be aborted.
  const fetchPromise = fetch(url, { signal }).then((response) => {
    if (!response.ok) {
      throw new Error("Error with the API");
    }
    return response.json();
  });

  // Racing the two promise
  Promise.race([timeoutPromise, fetchPromise])
    .then((data) => {
      document.getElementById("response").innerText = JSON.stringify(data);
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        document.getElementById("response").innerText = "Request timed out";
      } else {
        document.getElementById("response").innerText = error.message;
      }
    })
    .finally(() => {
      console.log("Finally is called !");
    });
};
