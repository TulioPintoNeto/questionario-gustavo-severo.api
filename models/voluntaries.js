const connection = require('../infra/connection');

class Voluntary {
  // eslint-disable-next-line class-methods-use-this
  insert(voluntary, res) {
    const sql = 'INSERT INTO voluntaries SET ?';

    console.log(voluntary);
    return connection.query(sql, voluntary, (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json(result);
      }
    });
  }
}

module.exports = new Voluntary();
