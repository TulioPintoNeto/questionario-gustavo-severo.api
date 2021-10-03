const voluntaryQuery = `
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
  childBirthDate date NOT NULL,
  procedureAge int NOT NULL,
  followingCity varchar(255),
  followingState varchar(100),
  followingType enum ('Público', 'Privado', 'Misto'),
`;

module.exports = voluntaryQuery;
