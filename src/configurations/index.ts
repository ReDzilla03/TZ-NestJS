import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
  db_host: process.env.DB_HOST || 'localhost',
  db_port: process.env.DB_PORT || 5432,
  db_user: process.env.DB_USER || 'user',
  db_password: process.env.DB_PASSWORD || 'password',
  db_name: process.env.DB_NAME || 'database',
});
