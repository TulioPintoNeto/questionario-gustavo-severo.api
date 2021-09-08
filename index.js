require('dotenv').config();
const cors = require('cors');
const express = require('./config/customExpress');
const connection = require('./infra/connection');
const Tables = require('./infra/tables');

const app = express();
app.use(cors({ origin: 'https://validapthsi-hcpa.com.br/' }));

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected to DB!');
    Tables.init(connection);
  }

  app.listen(process.env.PORT || 3000);
});
