const dotenv = require('dotenv');
dotenv.config();

const config = {
  api: {
    origin: process.env.API__ORIGIN,
    prefix: process.env.API__PREFIX,
    jwtHeader: process.env.API__JWT_HEADER,
    appIdHeader: process.env.API__APP_ID_HEADER,
  },
  port: process.env.PORT,
  key: {
    passwordSecret: process.env.KEY__PASSWORD_SECRET,
    jwtSecret: process.env.KEY__JWT_SECRET,
  },
  endpoint: {
    databaseUrl: process.env.ENDPOINT__DATABASE_URL,
  },
  appId: {
    default: process.env.APP_ID__DEFAULT,
  },
};

module.exports = config;
