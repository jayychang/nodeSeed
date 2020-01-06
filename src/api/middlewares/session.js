const jwt = require('jsonwebtoken');

const config = require('../../../config');

const { User } = require('../../models/user');

const validateSession = async (req, res, next) => {
  const { headers: { [config.api.jwtHeader]: token } } = req;

  try {
    const userState = jwt.verify(token, config.key.jwtSecret);
    const user = await User.findOne({ id: userState.id }); // TODO use projection options?

    req._user = user;
    next();
  } catch {
    return res.status(401).json();
  }
}

module.exports = {
  validateSession,
}
