const userModel = require('../models/user.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// ================= REGISTER USER =================

async function registerUser(req, res) {

    const { username, email, password, role = 'user' } = req.body;

    // Check user already exists or not
    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    if (isUserAlreadyExist) {
        return res.status(400).json({
            message: "User already exists"
        });
    }


    // Hash password
    const hash = await bcrypt.hash(password, 10);


    // Create new user
    const newUser = await userModel.create({
        username,
        email,
        password: hash,
        role
    });


    // Create JWT token
    const token = jwt.sign(
        {
            id: newUser._id,
            role: newUser.role
        },
        process.env.JWT_SECRET
    );


    // Store token in cookie
    res.cookie("token", token);


    // Send response
    res.status(201).json({
        message: "User registered successfully",

        user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        }
    });
}



// ================= LOGIN USER =================

async function loginUser(req, res) {

    const { username, email, password } = req.body;


    // Find user using username OR email
    const user = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    });


    // User doesn't exist
    if (!user) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }


    // Compare entered password with hashed password
    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );


    // Wrong password
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }


    // Create JWT token
    const token = jwt.sign(
        {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET
    );


    // Store token in cookie
    res.cookie("token", token);


    // Send response
    res.status(200).json({
        message: "User logged in successfully",

        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    });
}



// ================= EXPORT =================

module.exports = {
    registerUser,
    loginUser
};