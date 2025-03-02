const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User'); // Ensure this is correctly exported

dotenv.config(); // Load environment variables

const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware to handle invalid JSON
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ message: "Invalid JSON format!" });
    }
    next();
});

// ✅ Fix: Removed extra space in "/login"
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.json({ message: "Login successful!", username: user.username });
    } catch (err) {
        console.error("Error logging in:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://foodiee123:foodie%40123@product.v5t71.mongodb.net/backend?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ DB connected..."))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.get('/', (req, res) => {
    res.send("<h2 align=center>Welcome to the session</h2>");
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        console.log("User registration completed..");
        res.status(201).json({ message: "User Registered Successfully!" });

    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log("🚀 Server is running on port: " + PORT);
});
