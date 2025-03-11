const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "Hello from Cloudtype!" });
});

app.get("/env", (req, res) => {
    res.json({ CLOUDTYPE_VAR: process.env.CLOUDTYPE_VAR || "Not Set" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
