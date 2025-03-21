import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/test", (req, res) => {
    res.json({
        message: "Your application is working",
        body: "I Love you...",
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
