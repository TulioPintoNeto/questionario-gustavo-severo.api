const express = require('express');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = express();

  app.use(cors({ origin: 'https://validapthsi-hcpa.com.br/' }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  consign().include('controllers').into(app);

  return app;
};
