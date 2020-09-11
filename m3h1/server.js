const express = require('express');
const bodyParser = require('body-parser');


//bikin App Express
const app = express();

//ngeparse request content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

//ngeparse req of content-type - application/json
app.use(bodyParser.json())

//mendefinisikan router
app.get('/', (req, res) => {
    res.json({"message" : "Welcome to node js & mongoDb web server"});
});

//ndengerin dari req
app.listen(3000, () => {
    console.log("server is listening on port 3000")
})

// Konfigurasi Database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// koneksi Ke Database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to db");    
}).catch(err => {
    console.log('Error, database is not connected or does not exist');
    process.exit();
});



