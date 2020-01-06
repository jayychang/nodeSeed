const express = require('express');

const config = require('./config');

const startServer = async () => {
  const app = express();

  await require('./src/loaders')({ app });

  app.listen(config.port, () => console.log(`running on port ${config.port}`));
}

startServer();
