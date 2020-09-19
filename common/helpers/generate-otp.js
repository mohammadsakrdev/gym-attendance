/**
 * Generates random OTP
 * @function
 *
 * @returns {number} - Generated OTP random number
 */
function generateOTP() {
  return 1000 + Math.floor(Math.random() * 9000);
}

module.exports = generateOTP;
