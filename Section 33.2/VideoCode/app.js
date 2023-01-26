const express = require("express");
const ExpressError = require("./expressError");
const userRoutes = require("./userRoutes")
const middleware = require("./middleware")
const morgan = require("morgan")

const app = express();

app.use(express.json());
// app.use(middleware.logger)
app.use(morgan('dev'))

app.use('/api/users', userRoutes)

app.get('/secret', middleware.checkForPassword, (req,res, next) => {
        res.send("I LOVE YOU <3 FOR REAL MARRY ME")
})

app.get('/private', middleware.checkForPassword, (req,res) => {
        res.send("YOU HAVE REACHED THE PRIVATE PAGE, IT IS PRIVATE")
})
app.use(function (req,res){
    return new ExpressError("Not Found", 404)
});

app.use(function (err,req,res,next){
    let status = err.status || 500;

    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});

app.listen(3000, function () {
    console.log("Server is listening on port 3000")
});