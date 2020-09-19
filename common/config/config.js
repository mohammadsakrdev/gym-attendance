const config = {
  app: {
    port: parseInt(process.env.PORT, 10) || 3000
  },
  db: {
    mongoURI: process.env.MONGO_URI
  },
  jwt: {
    key: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE
  },
  baseUrl: process.env.BASE_API_URL,
  salt: process.env.BCRYPT_SALT_ROUNDS
};

module.exports = config;
