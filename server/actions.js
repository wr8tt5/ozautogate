var email = require('emailjs/email');

exports.sendquote = function(req, res) {

  if (false) {
  var server = email.server.connect({
         user: 'wr8tt5'
    ,password: 'blahblah'
        ,host: 'smtp.mail.yahoo.com.au'
         ,ssl: true
  });

  server.send({
    text: 'This is a test',
    from: 'wr8tt5@yahoo.com.au',
    to:   'wr8tt5@yahoo.com.au',
    subject: 'This is a test'},
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

  console.log('quote sent');
  console.log(req.body);
  res.json({success: true, msg: 'quote sent'});
}
