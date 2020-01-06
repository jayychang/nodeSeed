const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const hashPassword = require('../helpers/hashPassword');
const config = require('../../config');

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    immutable: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    index: true,
  },
});

UserSchema.pre('save', function(next) {
  const user = this;

  if (user.password) {
    const hash = hashPassword(user.password);
    user.password = hash;
  }

  next();
});

UserSchema.pre(/^update/, function(next) {
  const user = this._update;

  if (user.password) {
    const hash = hashPassword(user.password);
    user.password = hash;
  }

  next();
});

UserSchema.pre(/^find/, function(next) {
  const conditions = this._conditions;

  if (conditions.password) {
    const hash = hashPassword(conditions.password);
    conditions.password = hash;
  }

  next();
});

UserSchema.methods.generateJwt = function() {
  return jwt.sign({
    id: this.id,
  }, config.key.jwtSecret, {
    expiresIn: '1000 days',
  });
}

const User = mongoose.model('Users', UserSchema);

module.exports = {
  User,
}
