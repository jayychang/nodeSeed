const mongoose = require('mongoose');

const config = require('../../config');

const mongooseLoader = async ({ app }) => {
  await mongoose.connect(config.endpoint.databaseUrl, { useNewUrlParser: true, useCreateIndex: true, });
}

module.exports = mongooseLoader;
