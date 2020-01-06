const morgan = require('morgan');

const loggerLoader = async ({ app }) => {
  app.use(morgan('tiny'));
}

module.exports = loggerLoader;
