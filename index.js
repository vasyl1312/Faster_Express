import express from "express";

const PORT = process.env.PORT ?? 3000;//якщо є ПОРТ то беремо- як ні то 3000
const app = express();

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});