const Voluntary = require('../models/voluntaries');

module.exports = (app) => {
  app.post('/save', (req, res) => {
    const voluntary = req.body;

    Voluntary.insert(voluntary, res);
  });
};
