const express = require('express');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = express();

  app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
  console.log(`Allowed CORS: ${process.env.ALLOWED_ORIGIN}`);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  consign().include('controllers').into(app);

  return app;
};
