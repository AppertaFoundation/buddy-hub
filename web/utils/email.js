// Email Configuration

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PWD
  }
});

exports.sendConfEmail = function(email, name, device, description) {

  console.log(email);
  console.log(name);
  console.log(device);
  // Send a confirmation email to user
  var mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Device Suggestion Form Received',
    text: 'Dear ' + name + ',\n\n' +
    'Your device suggestion form had been received. ' +
    'We will notice you once we have reviewed your suggestion.\n\n' +
    'Device: ' + device + '\n' +
    'Description: ' + description + '\n\n' +
    'Thank you for choosing BuddyHub!\n\n'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
