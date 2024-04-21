const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Add unique constraint for email
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Users', userSchema); // Change model name to 'User'
