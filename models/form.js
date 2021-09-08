const connection = require('../infra/connection');

class Form {
  static insert(tableName, formAnswers, res) {
    const sql = `INSERT INTO ${tableName} SET ?`;
    console.log(formAnswers);

    return connection.query(sql, formAnswers, (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json(result);
      }
    });
  }

  static insertPedsql0(formAnswers, set) {
    Form.insert('pedsql_0', formAnswers, set);
  }

  static insertPedsql1(formAnswers, set) {
    Form.insert('pedsql_1', formAnswers, set);
  }

  static insertPedsql24(formAnswers, set) {
    Form.insert('pedsql_2_4', formAnswers, set);
  }

  static insertPedsql57(formAnswers, set) {
    Form.insert('pedsql_5_7', formAnswers, set);
  }

  static insertPedsql812(formAnswers, set) {
    Form.insert('pedsql_8_12', formAnswers, set);
  }

  static insertPedsql1318(formAnswers, set) {
    Form.insert('pedsql_13_18', formAnswers, set);
  }
}

module.exports = Form;
