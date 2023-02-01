# Broken App Issues
Within the app.js file I found one major issue that was preventing the whole application to break. 
The line: 
    let results = req.body.developers.map(async d => {
        return await axios.get(`https://api.github.com/users/${d}`);
    }

... is just going to return a promise. I realized when I was testing this code that you cant use an async/await call on a map function. 
So, rather than using a map function, I made my whole post route an async function through the line:
    app.post('/', async function(req, res, next) 

...and, rather than a .map function call, I used a simple for loop so I could await the user data within the for loop:
    for (u of developers){
    let user = await getUserData(u)
    arr.push(user)
  }

...This returned an array of extracted data(not promises), in which I could then call my map function to assign key value pairs, and ultimately return my dictionary
