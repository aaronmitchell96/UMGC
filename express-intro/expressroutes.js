const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.get('/', (req,res) => {
    res.send("Homepage")
})

app.get('/dogs', (req,res) => {
    console.log("you asked for /dogs")
    console.log(req)
    res.send("WOOF WOOF!")
});

app.get('/chickens', (req,res) => {
    res.send("bock! bock! bock!")
})

app.post('/chickens', function createChicken(req,res){
    res.send("YOU CREATED A NEW CHICKEN!")
})

const greetings = {
    en: "hello",
    fr: "bonjour",
    ic: "hallo",
    ja: "konichiwa"
}

app.get("/greet/:language", (req,res) => {
    const lang = req.params.language;
    const greeting = greetings[lang]
    res.send(greeting)
})

app.post('/register', (req,res) => {
    req.send(req.body)
})


app.listen(3000, () => {
    console.log("server running on port 3000")
});