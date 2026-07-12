const bcrypt = require("bcryptjs");
const {db} = require("../config/db.js");
const generateToken = require("../utils/generateToken.js");


// REGISTER USER
const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            confirmPassword
        } = req.body;

        // Validate fields
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check passwords
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }

        // Check existing user
        const [users] = await db.execute(
            "SELECT id FROM users WHERE email = ?",
            [email]
        );

        if (users.length > 0) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        const [result] = await db.execute(
            `
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
            `,
            [name, email, hashedPassword]
        );

        const token = generateToken(result.insertId);

        return res.status(201).json({
            message: "Registration Successful",
            token,
            user: {
                id: result.insertId,
                name,
                email
            }
        });

    } catch (error) {
        console.error("Register Error:", error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};


// LOGIN USER
const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Find user
        const [users] = await db.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (users.length === 0) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }

        const user = users[0];

        // Compare password
        const match = await bcrypt.compare(
            password,
            user.password
        );

        if (!match) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }
        

        const token = generateToken(user.id);

        // Never return password
        const {
            password: userPassword,
            ...safeUser
        } = user;

        return res.status(200).json({
            message: "Login Successful",
            token,
            user: safeUser
        });

    } catch (error) {
        console.error("Login Error:", error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};


module.exports = {
    register,
    login
};