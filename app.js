const express = require('express');

const employeeRouter = require('./routes/employeeRouter');

const app = express();

app.use(express.json());


// // 3) ROUTES
app.use('/api/v1/employee', employeeRouter);

module.exports = app;
