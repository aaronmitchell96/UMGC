### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

awaiting the response, and saving to variable.
making an asynchronous function call within a dictionary.

- What is a Promise?

a promise is the programming language telling us it will get back to us. This promise could
be resolved or rejected, but the programn will continue on while it attemps to resolve the promise. 

- What are the differences between an async function and a regular function?

An async function always returns a promise and you can use the await keyword to hold this promise 

- What is the difference between Node.js and Express.js?

Express is a framework for node. Express it usefull for rouding, middleware, and other popular features while node
is usefull for building backend api's

- What is the error-first callback pattern?

Error-first callback in Node. js is a function that returns an error object whenever any successful data is returned by the function.

- What is middleware?

middleware is an express tool that runs in between routes. Very usefull for authentication.

- What does the `next` function do?

next allows the program to continue, rather than just returning something and exiting

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

for one its no error handling. So what happens if github cant find the username inputed?
secondly, this can be pretty easily simplified by having one function that has a parameter ('username'), which when passed through, 
  gets data for the passed in username, then appends to array. 

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
