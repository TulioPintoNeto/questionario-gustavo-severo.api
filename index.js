require('dotenv').config();
const express = require('./config/customExpress');
const connection = require('./infra/connection');
const Tables = require('./infra/tables');

const app = express();

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected to DB!');
    Tables.init(connection);
  }

  app.listen(process.env.PORT || 3000);
});
