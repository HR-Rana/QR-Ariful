const express  = require('express');
const router = require('./Routes/Routes');
const app = express();
const cors = require('cors');
const serverless = require('serverless-http')




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());




app.use("", router)














module.exports.handler = serverless(app);