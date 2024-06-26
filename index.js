import express from "express";



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendStatus(200);
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});