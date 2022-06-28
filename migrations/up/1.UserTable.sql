START TRANSACTION;
  create table users(
    id serial PRIMARY KEY ,
    login varchar NOT NULL ,
    password varchar NOT NULL,
    name varchar NOT NULL

  );

COMMIT;