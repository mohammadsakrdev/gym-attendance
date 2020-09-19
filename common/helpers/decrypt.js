const crypto = require('crypto');

const config = require('../config/config');

const ENCRYPTION_KEY = Buffer.from(config.encryption.key, 'base64');

const decrypt = (text) => {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv(
    config.encryption.algorithm,
    Buffer.from(ENCRYPTION_KEY, 'hex'),
    iv
  );
  const decrypted = Buffer.concat([
    decipher.update(encryptedText),
    decipher.final()
  ]);
  return decrypted.toString();
};

module.exports = decrypt;
