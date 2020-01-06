const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('../../config');
const routes = require('../api');

const expressLoader = ({ app }) => {
  // Setup CORS whitelist
  app.use(cors({ origin: config.api.origin }));

  // Parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Validate appId
  app.use((req, res, next) => {
    const { headers: { [config.api.appIdHeader]: appId } } = req;
    if (!Object.values(config.appId).includes(appId)) {
      return res.status(403).json('Invalid app id');
    }
    next();
  });

  app.use(config.api.prefix, routes());

  // If nothing gets hit, return 404
  app.use((req, res, next) => {
    return res.status(404).json('Invalid path');
  });
}

module.exports = expressLoader;
