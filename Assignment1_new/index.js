const express = require('express');
const mongoose = require('mongoose');
const app = express();

const users = require('./users');
const employees = require('./employees');

const SERVER_PORT = 3001

app.use(express.json());

app.use(users);
app.use(employees);

//from youtube video https://youtu.be/sx3Lf2EaEEQ?si=Ci0D8-DCvfejAV9M

const start = async() => {
    try{
        await mongoose.connect('mongodb+srv://leonardo:PassWORd123@assignment1.xopob.mongodb.net/?retryWrites=true&w=majority&appName=Assignment1');

        app.listen(SERVER_PORT, () => {
            console.log(`Server is running on port ${SERVER_PORT}`);
        });
    }
    catch(error){
        console.log(error.message);
    }
};

start();