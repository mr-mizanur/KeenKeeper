import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// root json path
const filePath = path.resolve("../friend.json");

// GET all friends
app.get("/api/friends", (req, res) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "File read error" });
        }
        res.json(JSON.parse(data));
    });
});

// GET single friend
app.get("/api/friends/:id", (req, res) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "File read error" });
        }

        const friends = JSON.parse(data);
        const friend = friends.find(f => f.id == req.params.id);

        res.json(friend);
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});