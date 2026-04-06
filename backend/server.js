const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// 🔥 MIDDLEWARE
app.use(cors());
app.use(express.json());

// 🔥 ROUTES IMPORT
const yogaRoutes = require("./routes/yogaRoutes");

// 🔥 ROUTES USE
app.use("/api/yoga", yogaRoutes);

// 🔥 MONGODB CONNECT (⚠️ SAME NAME USE KARNA)
mongoose.connect("mongodb://127.0.0.1:27017/yogaDB")
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log(err));

// 🔥 TEST ROUTE
app.get("/", (req, res) => {
    res.send("Server Running 🚀");
});

// 🔥 DATA ADD ROUTE (NO POSTMAN)
const Yoga = require("./models/Yoga");

app.get("/add-data", async (req, res) => {
    try {

        await Yoga.deleteMany({}); // optional

        await Yoga.insertMany([
            {
                name: "Bhujangasana",
                category: "women",
                image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
                description: "Fat loss yoga",
                tips: "Do daily for 15 minutes to reduce belly fat"
            },
            {
                name: "Power Yoga",
                category: "men",
                image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
                description: "Build strong body",
                tips: "Improve strength and stamina"
            },
            {
                name: "Tree Pose",
                category: "kids",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
                description: "Increase height",
                tips: "Improve balance and growth"
            }
        ]);

        res.send("Data Added Successfully 🔥");

    } catch (error) {
        console.log(error);
        res.send("Error adding data ❌");
    }
});

// 🔥 SERVER START
app.listen(5000, () => {
    console.log("Server running on port 5000 🔥");
});