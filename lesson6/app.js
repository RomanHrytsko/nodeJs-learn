const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./router/api.router');

const app = express();

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(5000, () => {
    console.log('Port 5000 is active');
});

function _connectDB() {
    mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopolog: true });
    const { connection } = mongoose;
    connection.on('error', (error) => {
        console.log(error);
    });
}
