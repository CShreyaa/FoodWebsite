const express = require("express");
const cors = require("cors"); // Import CORS middleware
const Food = require('./models/foodModel');
const db = require("./db");

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const foodsRoute = require('./routes/foodsRoute');
const userRoute = require('./routes/userRoute')

app.use("/api/foods/", foodsRoute);
app.use("/api/users/", userRoute)

app.get("/", (req, res) => {
    res.send("Server working");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
