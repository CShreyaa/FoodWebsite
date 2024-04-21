const express = require("express");
const router = express.Router();
const User = require('../models/userModel'); // Change import statement

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
