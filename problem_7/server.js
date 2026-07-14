const express = require("express");

const app = express();

app.get("/google", async (req, res) => {
    try {
        const response = await fetch("https://www.google.com");
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.send("Error fetching Google page");
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});