const express = require('express');
const router = express.Router();
const User = require('../Models/User_model');

router.post('/register', async(req,res) =>{
    const {name, email, password, usertype} = req.body;
    try{
        const isExisting = await User.findOne({ where: { email: User.email } });
        if (isExisting) {
          console.log("Email address already exists!", user.email);
          throw new Error("Email address already exists!");
        }
        const newUser = await User.create({name, email, password, usertype});
        res.status(200).json(newUser);
    }catch (error) {
        console.log('Error registering user :',error)
        res.status(500).json({error:"Internal server error"});
    }
});

module.exports = router;