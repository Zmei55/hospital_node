const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/utils/swagger.json');

const authRouter = require('./src/routes/api/auth');
const usersRouter = require('./src/routes/api/users');
const patientsRouter = require('./src/routes/api/patients');
const servicesRouter = require('./src/routes/api/services');
const requestsRouter = require('./src/routes/api/requests');
const requestDetailsRouter = require('./src/routes/api/requestDetails');
const laborsRouter = require('./src/routes/api/laboratories');
const addressesRouter = require('./src/routes/api/addresses');

const app = express();

const upload = multer({
  dest: 'uploads/',
});

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'https://zmei55.github.io',
      'https://hospital-3upz.onrender.com/',
    ],
  })
);
app.use(express.json());

app.use('/api/auth', upload.none(), authRouter);
app.use('/api/users', upload.none(), usersRouter);
app.use('/api/patients', upload.none(), patientsRouter);
app.use('/api/services', upload.none(), servicesRouter);
app.use('/api/requests', upload.none(), requestsRouter);
app.use('/api/requestDetails', upload.none(), requestDetailsRouter);
app.use('/api/labors', upload.none(), laborsRouter);
app.use('/api/addresses', upload.none(), addressesRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

const { DB_HOST, PORT } = process.env;

mongoose.set('strictQuery', true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    // swaggerDocs(app, port);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
