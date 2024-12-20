const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the subject ? ', function (emailSubject) {
  rl.question('What is the body ? ', function (body) {
    console.log(`Subject--->${emailSubject} --------------- BODY ----------> ${body}`);
   
    // rl.close();


// rl.on('close', function () {
//   console.log('\nBYE BYE !!!');
//   process.exit(0);
// });

const nodemailer = require('nodemailer');
//const emailSubject = interaction.options.getString("Subject: ");
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b3c79a217199ee",
      pass: "e2466ce249fcef"
    }
  });

  message = {
    from: "iporter@saacharter.org",
    to: "iporter@saacharter.org",
    subject: emailSubject,
    //subject: "yo",
    text: body
}
transporter.sendMail(message,  function (err, info){
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
})  
});
});