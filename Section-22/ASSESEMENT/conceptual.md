### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

  Syntax differences (ie you dont put let or const before variables) 
  Python has more ready to use libraries and modules

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

  .get method
  if else statement: if 'c' in {}

- What is a unit test?



- What is an integration test?

- What is the role of web application framework, like Flask?

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

if theres more than a few options as to what that new route could possibly be, it would
be more convenient to collect date from a URL placeholder parameter, rather than hard code the route in. 

- How do you collect data from a URL placeholder parameter using Flask?

put < > around element  

- How do you collect data from the query string using Flask?

request.args stores elements from the url into an HTML like element 

- How do you collect data from the body of the request using Flask?

request.form

- What is a cookie and what kinds of things are they commonly used for?

a cookie, similar to 'SESSION' holds user data for that particular session, or until the user closes the tab

- What is the session object in Flask?

similar to a 'cookie' holds a key value pair for any particular session. Can hold more information than cookies can

- What does Flask's `jsonify()` do?

returns page formatted is JSON
