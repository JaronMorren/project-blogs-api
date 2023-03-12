const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Batatinha';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };

// https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/6.4/src/auth/authFuctions.js