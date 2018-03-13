var email = require('emailjs/email');

exports.sendquote = function(req, res) {

  const emailRelayUser = process.env.EMAIL_RELAY_USER;
  const emailRelayPwd = process.env.EMAIL_RELAY_PWD;
  const emailRelayHost = process.env.EMAIL_RELAY_HOST;

  const emailToUser = process.env.EMAIL_TO;

  if (!emailRelayUser || !emailRelayPwd) {
    console.log('No email credentials are present');
  }
  else {
    var server = email.server.connect({
           user: emailRelayUser
      ,password: emailRelayPwd
          ,host: emailRelayHost
           ,ssl: true
    });

    var msg = `
Name:     ${req.body.name}
Email:    ${req.body.email}
Country:  ${req.body.country}
State:    ${req.body.state}
Gate type: ${req.body.gateType}
Gate colour: ${req.body.gateColour}
Gate width: ${req.body.gateWidth}
Gate opening: ${req.body.gateOpening}
Posts supplied: ${req.body.postsSupplied}
Comments: ${req.body.comments}
`;

    server.send({
      text: msg,
      from: `${emailRelayUser}`,
      to:   emailToUser,
      subject: 'Customer enquiry'},
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
