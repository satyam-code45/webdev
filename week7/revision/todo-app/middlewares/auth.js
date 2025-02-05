const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "satyam";
const app = express();
app.use(express.json());

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            return res.status(401).json({ message: "You are not logged in!" });
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);

        
        // Attach user ID to request
        req.userId = decoded.id;
        next();
        
    } catch (error) {
        console.error("Authentication Error:", error);

        // Check if token is expired
        if (error.name === "TokenExpiredError") {
            return res.status(403).json({ message: "Token expired! Please log in again." });
        }

        return res.status(401).json({ message: "Invalid token!" });
    }
};

module.exports = isAuthenticated;
