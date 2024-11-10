const express = require('express');
const empRouter = require('./emp');
const userRouter = require('./users');
const errorHandlerMiddleware = require('./errorHandlerMiddleware');
const app = express();
const SERVER_PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const loggerMiddleware = (req, res, next) => {
    //logs the path, what method you are using and the time
    console.log(`logged ${req.url} ${req.method} -- ${new Date()}`);
    next();
}
app.use("/user", loggerMiddleware)

app.use("/user", userRouter)
app.use("/emp", empRouter)

app.get("/error", (req, res) => {
    throw new Error("This is a forced error")
});



app.use(errorHandlerMiddleware);

app.listen(SERVER_PORT, () => {
    console.log('Server is running on port 3000');
})