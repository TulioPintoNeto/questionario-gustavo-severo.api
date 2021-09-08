const voluntary = require('./voluntaryQuery');
const pedsql0 = require('./pedsql_tables/pedsql_0');
const pedsql1 = require('./pedsql_tables/pedsql_1');
const pedsql24 = require('./pedsql_tables/pedsql_2_4');
const pedsql57 = require('./pedsql_tables/pedsql_5_7');
const pedsql812 = require('./pedsql_tables/pedsql_8_12');
const pedsql1318 = require('./pedsql_tables/pedsql_13_18');
const pthsi = require('./pthsiQuery');

class Tables {
  init(connection) {
    console.log('Tables was called');
    this.connection = connection;
    this.createTable(pedsql0);
    this.createTable(pedsql1);
    this.createTable(pedsql24);
    this.createTable(pedsql57);
    this.createTable(pedsql812);
    this.createTable(pedsql1318);
  }

  static defaultQuery({ name, query }) {
    return `
    CREATE TABLE IF NOT EXISTS ${name} (
      id int NOT NULL AUTO_INCREMENT,
      ${voluntary}
      ${query}
      ${pthsi}
      PRIMARY KEY(id));
    `;
  }

  createTable(pedsql) {
    const query = Tables.defaultQuery(pedsql);

    this.connection.query(query, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
}

module.exports = new Tables();
