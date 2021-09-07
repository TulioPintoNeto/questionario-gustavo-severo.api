class Tables {
  init(connection) {
    console.log('Tables was called');
    this.connection = connection;
    this.createVoluntary();
  }

  createVoluntary() {
    const query = `
      CREATE TABLE IF NOT EXISTS voluntaries (
        id int NOT NULL AUTO_INCREMENT,
        parentName varchar(255) NOT NULL,
        age int NOT NULL,
        schooling enum (
          'Fundamental Incompleto',
          'Fundamental Completo',
          'Médio Incompleto',
          'Médio Completo',
          'Superior Incompleto',
          'Superior Completo ou maior'
        ) NOT NULL,
        schoolingOther varchar(50),
        income double(12,2),
        incomeRefuse boolean,
        relatives varchar(50) NOT NULL,
        skinColor enum (
          'Branca',
          'Parda',
          'Preta',
          'Outra'
        ) NOT NULL,
        skinColorOther varchar(50),
        city varchar(255) NOT NULL,
        state varchar(100) NOT NULL,
        childName varchar(255) NOT NULL,
        childAge int NOT NULL,
        procedureAge int NOT NULL,
        followingCity varchar(255) NOT NULL,
        followingState varchar(100) NOT NULL,
        followingType enum ('Público', 'Privado', 'Misto') NOT NULL,
        PRIMARY KEY(id))
    `;

    this.connection.query(query, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Table Voluntaries was created');
      }
    });
  }
}

module.exports = new Tables();
