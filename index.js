const customExpress = require('./config/customExpress');
const connection = require('./infra/connection');
const Tables = require('./infra/tables');

const app = customExpress();

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Table connection successful!');
    Tables.init(connection);
  }

  app.listen(3000, () => console.log('servidor rodando na porta 3000'));
});
