module.exports = {
  BearerAuth: {
    type: 'http',
    scheme: 'bearer'
  },
  ApiKeyAuth: {
    type: 'apiKey',
    in: 'header',
    name: 'Authorization'
  },
  PayKeyAuth: {
    type: 'apiKey',
    in: 'header',
    name: 'x-auth-pay'
  }
};
