var db = require("./db");

module.exports.handleSignup = (email, password) => {
  // Check if email already exists
  // Save the user to the database
  // send the welcome email

  db.saveUser({
    email: email,
    password: password
  });
};
