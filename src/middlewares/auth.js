const { Unauthorized, Conflict } = require('http-errors');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { SECRET_KEY } = process.env;

const auth = (workplaces, roles = 'USER') => {
  return async (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }

    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    try {
      if (bearer !== 'Bearer') {
        throw new Unauthorized('Not authorized');
      }

      const { id } = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id, '-password -updatedAt');

      if (!user || !user.token) {
        throw new Unauthorized('Not authorized');
      }

      if (user.isNotLocked) {
        throw new Unauthorized('User is locked');
      }

      let hasRoles = false;
      let isAdmin = false;
      let hasWorkplace = false;

      user.roles.forEach(role => {
        if (roles.includes(role)) {
          hasRoles = true;
        }
        if (role === 'ADMIN') {
          isAdmin = true;
          hasRoles = true;
        }
      });
      if (!hasRoles) {
        throw new Conflict('No access rights');
      }

      if (!isAdmin)
        user.workplaces.forEach(workplace => {
          if (workplaces.includes(workplace)) {
            hasWorkplace = true;
          }
        });
      if (isAdmin || workplaces === 'ALL') {
        hasWorkplace = true;
      }
      if (!hasWorkplace) {
        throw new Conflict('No access rights to this workplace');
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.message === 'Invalid signature') {
        error.status = 401;
      }
      next(error);
    }
  };
};

module.exports = auth;
