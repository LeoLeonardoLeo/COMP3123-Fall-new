const express = require('express');
const app = express();
const SERVER_PORT = 3000;

app.get("/hello", (req, res) => {  
    res.status(200)
    res.send("<h1>Hello Express JS</h1>");
});



//http://localhost:3000/user?firstName=Leonardo&lastName=P
app.get("/user", (req, res) =>{
    console.log(req.query)
    res.status(200)
    const firstName = req.query.firstName; 
    const lastName = req.query.lastName;
    res.send(`First name: ${firstName}, last name: ${lastName}`);
});

app.post("/user/:firstName/:lastName", (req, res) => {
    res.status(201)
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    res.send(`First name: ${firstName}, last name: ${lastName}`);
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
