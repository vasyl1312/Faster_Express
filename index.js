import express from "express";
import path from "path";
import {requestTime, logger} from "./middlewares.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000; //якщо є ПОРТ то беремо- як ні то 3000
const app = express();

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(requestTime);//for middlewares
app.use(logger);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/features', (req, res) => {
    res.render('features')
})
// app.get('/', (req, res) => {
//     //resolve(шлях текущої діректорії, в папці, файл)
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// });

// app.get('/download', (req, res) => {
//     //download file
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// });

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});//14-50