const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

async function getUserData(username){
  let data = await axios.get(`https://api.github.com/users/${username}`)
  return data
}


// ****** OLD CODE *****
// try {
//   let results = req.body.developers.map(async d => {
//     return await axios.get(`https://api.github.com/users/${d}`);
//   });
//   let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//   return res.send(JSON.stringify(out));
// } catch {
//   next(err);
// }

app.post('/', async function(req, res, next) {
  const developers = req.body.developers
  let arr = []
  for (u of developers){
    let user = await getUserData(u)
    arr.push(user)
  }
  let out = arr.map(r => ({ name: r.data.name, bio: r.data.bio }));
  res.send(JSON.stringify(out))
});


app.listen(3000, () => {
    console.log("server running on port 3000")
});
