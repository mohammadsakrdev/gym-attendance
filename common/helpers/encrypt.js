const crypto = require('crypto');

const config = require('../config/config');

const ENCRYPTION_KEY = Buffer.from(config.encryption.key, 'base64');
const iv = crypto.randomBytes(parseInt(config.encryption.ivLength, 10));

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(
    config.encryption.algorithm,
    Buffer.from(ENCRYPTION_KEY, 'hex'),
    iv
  );
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

module.exports = encrypt;
