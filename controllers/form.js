const Form = require('../models/form');

const handle = (req, res, callback) => {
  const formAnswers = req.body;

  console.log(formAnswers);
  callback(formAnswers, res);
};

module.exports = (app) => {
  app.post('/form/pedsql-0', (req, res) => handle(req, res, Form.insertPedsql0));
  app.post('/form/pedsql-1', (req, res) => handle(req, res, Form.insertPedsql1));
  app.post('/form/pedsql-2-4', (req, res) => handle(req, res, Form.insertPedsql24));
  app.post('/form/pedsql-5-7', (req, res) => handle(req, res, Form.insertPedsql57));
  app.post('/form/pedsql-8-12', (req, res) => handle(req, res, Form.insertPedsql812));
  app.post('/form/pedsql-13-18', (req, res) => handle(req, res, Form.insertPedsql1318));
};
