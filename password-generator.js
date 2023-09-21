const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,            // Change the length as desired
    numbers: true,         // Include numbers
    symbols: true,         // Include symbols
    uppercase: true,       // Include uppercase letters
    lowercase: true,       // Include lowercase letters
    strict: true           // Ensure at least one of each type (number, symbol, uppercase, lowercase)
  });

  return password;
}

// Generate and log a random password
const randomPassword = generateRandomPassword();
console.log('Random Password:', randomPassword);
