const express  = require('express');
const router = require('./Routes/Routes');
const app = express();
const cors = require('cors');





app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/static", express.static(path.join(__dirname, 'frontend')));
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
})


app.use("", router)













module.exports = app;
