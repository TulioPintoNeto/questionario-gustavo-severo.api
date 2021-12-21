require('dotenv').config();
const cors = require('cors');
const express = require('express');
const consign = require('consign');
const connection = require('./infra/connection');
const Tables = require('./infra/tables');

const app = express();
const frontEndApp = 'https://validapthsi-hcpa.com.br';

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', frontEndApp);
  res.header('Access-Control-Allow-Methods', 'POST');
  app.use(cors({ origin: frontEndApp }));
  next();
});
app.use(express.urlencoded({ extended: true }));
consign().include('controllers').into(app);

connection.connect((error) => {
  if (error) {
    console.log('here is something');
    console.log(error);
  } else {
    console.log('Connected to DB!');
    Tables.init(connection);
  }

  app.listen(process.env.PORT || 3000);

  connection.end();
});
