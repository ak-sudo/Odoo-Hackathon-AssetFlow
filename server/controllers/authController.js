const bcrypt =require("bcryptjs");
const db  =  require("../config/db.js");
const generateToken  =  require("../utils/generateToken.js");

// Register User
const register = async (req, res) => {

    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords do not match"
        });
    }

    db.query(
        "SELECT * FROM users WHERE email=?",
        [email],
        async (err, result) => {

            if (err)
                return res.status(500).json({ message: err.message });

            if (result.length > 0) {
                return res.status(400).json({
                    message: "User already exists"
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            db.query(
                "INSERT INTO users(name,email,password) VALUES(?,?,?)",
                [name, email, hashedPassword],
                (err, result) => {

                    if (err)
                        return res.status(500).json({
                            message: err.message
                        });

                    res.status(201).json({
                        message: "Registration Successful",
                        token: generateToken(result.insertId)
                    });

                }
            );

        }
    );

};

// Login User

const login = (req, res) => {

    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email=?",
        [email],
        async (err, result) => {

            if (err)
                return res.status(500).json({
                    message: err.message
                });

            if (result.length === 0) {
                return res.status(400).json({
                    message: "Invalid Credentials"
                });
            }

            const user = result[0];

            const match = await bcrypt.compare(
                password,
                user.password
            );

            if (!match) {
                return res.status(400).json({
                    message: "Invalid Credentials"
                });
            }

            res.json({
                message: "Login Successful",
                token: generateToken(user.id),
                user
            });

        }
    );

};

module.exports = {
    register,
    login
};