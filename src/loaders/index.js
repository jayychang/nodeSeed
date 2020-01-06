const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const cronLoader = require('./cron');
const loggerLoader = require('./logger');

const loaders = async ({ app }) => {
  await loggerLoader({ app });

  await mongooseLoader({ app });

  await expressLoader({ app });

  await cronLoader({ app });
}

module.exports = loaders;
