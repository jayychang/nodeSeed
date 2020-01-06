const { Router } = require('express');

const user = require('./routes/user');

const routes = () => {
  const route = Router();

	user(route);

	return route;
}

module.exports = routes;
