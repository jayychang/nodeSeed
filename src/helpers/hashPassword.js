const crypto = require('crypto');

const config = require('../../config');

const hashPassword = password => {
  return crypto.createHmac('sha256', config.key.passwordSecret).update(password).digest('hex');
}

module.exports = hashPassword;
