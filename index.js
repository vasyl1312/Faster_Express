import express from "express";
import path from "path";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000; //якщо є ПОРТ то беремо- як ні то 3000
const app = express();

app.use(express.static(path.resolve(__dirname, 'static')))

// app.get('/', (req, res) => {
//     //resolve(шлях текущої діректорії, в папці, файл)
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// });

app.get('/download', (req, res) => {
    //download file
    res.download(path.resolve(__dirname, 'static', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});//14-50