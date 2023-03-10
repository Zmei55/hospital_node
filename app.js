const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./src/routes/api/auth');
const usersRouter = require('./src/routes/api/users');
const patientsRouter = require('./src/routes/api/patients');
const servicesRouter = require('./src/routes/api/services');

const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/patients', patientsRouter);
app.use('/api/services', servicesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set('strictQuery', true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
