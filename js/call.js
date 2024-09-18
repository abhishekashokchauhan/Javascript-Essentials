function greet(greeting, punctuation) {
  console.log(greeting, " , ", this.name, punctuation);
}

const person = {
  name: "Abhishek",
};

// Output is "Hello  ,  Abhishek !"
greet.apply(person, ["Hello", "!"]);

// Output is "Abhishek  ,  Abhishek Hello"
greet.apply(person, ["Abhishek", "Hello", "hey"]);
