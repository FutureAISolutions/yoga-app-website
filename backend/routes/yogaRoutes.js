const express = require("express");
const router = express.Router();
const Yoga = require("../models/Yoga");

// GET ALL
router.get("/", async (req, res) => {
    const data = await Yoga.find();
    res.json(data);
});

// GET BY CATEGORY
router.get("/:category", async (req, res) => {
    const data = await Yoga.find({ category: req.params.category });
    res.json(data);
});

// POST (for Postman)
router.post("/", async (req, res) => {
    const newYoga = new Yoga(req.body);
    await newYoga.save();
    res.json({ message: "Yoga Added 🔥" });
});

module.exports = router;