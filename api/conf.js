const nodemailer = require("nodemailer");

var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

module.exports = { mail }