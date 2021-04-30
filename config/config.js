require('dotenv').config();

let {
  USERINFO = 'root',
  PASSWORD,
  DATABASE = 'bookswallow_test',
  HOST = '127.0.0.1',
  DATABASE_PORT = '3306',
} = process.env;

module.exports = {
  username: USERINFO,
  password: PASSWORD,
  database: DATABASE,
  host: HOST,
  port: DATABASE_PORT,
  dialect: 'mysql',
};
