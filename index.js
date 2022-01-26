import express from "express";
import path from "path";
import {requestTime, logger} from "./middlewares.js";
import serverRoutes from "./routes/servers.js"

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000; //якщо є ПОРТ то беремо- як ні то 3000
const app = express();

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(requestTime);//for middlewares
app.use(logger);
app.use(serverRoutes);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Main page', active: 'main'})
})

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features', active: 'features'})
})

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});//45-00