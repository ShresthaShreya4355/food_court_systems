const mongoose = require('mongoose');
//const express = require('express');
//const bodyParser = require('body-parser');
//const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})