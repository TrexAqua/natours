const morgan = require('morgan');
const express = require('express');

const app = express();
const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
module.exports = app;
