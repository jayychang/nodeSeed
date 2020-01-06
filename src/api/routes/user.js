const { Router } = require('express');

const config = require('../../../config');

const { validateSession } = require('../middlewares/session');

const ROUTE_NAME = '/user'
const user = (parentRoute) => {
  const route = Router();
  parentRoute.use(ROUTE_NAME, route);

  /* create account */
  route.post('/create', [validateSession], async (req, res) => {
    return res.json().status(200);
  });
}

module.exports = user;
