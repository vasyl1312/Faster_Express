import express from "express";

const PORT = process.env.PORT ?? 3000; //якщо є ПОРТ то беремо- як ні то 3000
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello Express.js!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});//14-50