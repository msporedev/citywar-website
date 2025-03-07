const express = require('express');  
const User = require('../models/User');  
const router = express.Router();  

// Sign up route  
router.post('/signup', async (req, res) => {  
    const { username, email, password } = req.body;  
    try {  
        const newUser = new User({ username, email, password });  
        await newUser.save();  
        res.status(201).json({ message: 'User created successfully' });  
    } catch (err) {  
        res.status(400).json({ error: err.message });  
    }  
});  

// Login route  
router.post('/login', async (req, res) => {  
    const { email, password } = req.body;  
    const user = await User.findOne({ email });  
    if (user && user.password === password) { // In a real app, use bcrypt for hashing  
        req.session.userId = user._id;  
        res.status(200).json({ message: 'Login successful' });  
    } else {  
        res.status(401).json({ message: 'Invalid credentials' });  
    }  
});  

module.exports = router;