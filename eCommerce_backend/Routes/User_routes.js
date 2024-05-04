const express = require('express');
const router = express.Router();
const User = require('../Models/User_model');

router.post('/register', async(req,res) =>{
    const {name, email, password, usertype} = req.body;
    try{
        const isExisting = await User.findOne({ where: { email } });
        if (isExisting) {
          console.log("Email address already exists!", email);
          throw new Error("Email address already exists!");
        }
        const newUser = await User.create({name, email, password, usertype});
        res.status(200).json(newUser);
    }catch (error) {
        console.log('Error registering user :',error)
        res.status(500).json({error:"Internal server error"});
    }
});
router.post('/login',async(req,res) =>{
    const { email, password,} = req.boby;
    console.log("email",email, password,"password");
    try{
        const user_validation = await User.findOne({where: { email, password}});
        if(user_validation == email){
            return res.status(200).json({message: "login successful"});
        }else{
            return res.status(400).json({message:"Invaid email or Password"});
        }
    }catch{
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }


})
module.exports = router;