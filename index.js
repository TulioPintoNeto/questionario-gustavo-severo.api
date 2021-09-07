require('dotenv').config();
const cors = require('cors');
const express = require('./config/customExpress');
const connection = require('./infra/connection');
const Tables = require('./infra/tables');

const app = express();

app.use(cors({ origin: 'http://validapthsi-hcpa.com.br/' }));

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Table connection successful!');
    Tables.init(connection);
  }

  app.listen(3000, () => console.log('servidor rodando na porta 3000'));
});
