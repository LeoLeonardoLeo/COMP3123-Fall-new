const express = require('express');
const router = express.Router();

const User = require('./modules/userSchema');


function idMaker(){
    const rndUserID = Math.random().toString(16).substring(2, 14);
    return rndUserID;
}


//user management
//1 - create account
//http://localhost:3001/api/v1/user/signup
router.post("/api/v1/user/signup", async (req, res) => {    
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //this it to check if a user exists, we use email for this
    const userExists = await User.findOne({ email });
    if(userExists ) {
        return res.status(400).json({
            message: "A user with this email already exists"
        });
    }

    //userID
    const userID = idMaker();
    
    const newUser = new User({
        userID,
        username,
        email,
        password
    });
    await newUser.save(); //save to database

    console.log(`User created: User ID: ${userID}`);
    res.status(201).json({ //post status
        message: "User created",
        userID: userID
    }); 
    
});


//2 - login
router.post("/api/v1/user/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email });

        if (user && user.password === password) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error", error);
        return res.status(500).json({ message: "Error" });
    }
});

module.exports = router;