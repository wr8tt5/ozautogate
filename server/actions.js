var email = require('emailjs/email');

exports.sendquote = function(req, res) {

  const quoteEmailUser = process.env.QUOTE_EMAIL_USER;
  const quoteEmailPwd = process.env.QUOTE_EMAIL_PWD;

  if (quoteEmailUser == '' || quoteEmailPwd == '') {
    console.log('No email credentials are present');
  }
  else {
    var server = email.server.connect({
           user: quoteEmailUser
      ,password: quoteEmailPwd
          ,host: 'smtp.mail.yahoo.com.au'
           ,ssl: true
    });

    var msg = `
Name:     ${req.body.name}
Email:    ${req.body.email}
Country:  ${req.body.country}
State:    ${req.body.state}
Comments: ${req.body.comments}
`;

    server.send({
      text: msg,
      from: `${quoteEmailUser}@yahoo.com.au`,
      to:   'mathew@ozautogate.com',
      subject: 'Autogate quote request'},
      function(err, message) {
        if (err) {
          console.log(err);
          res.json({success: false, msg: 'failed to send'});
        }
        else {
          res.json({success: true, msg: 'sent'});
        }
      }
    );
  }
}
