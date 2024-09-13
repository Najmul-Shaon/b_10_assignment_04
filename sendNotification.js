function sendNotification(email) {
    const splitEmail = email.split("@");
    const message = `${splitEmail[0]} sent you an email from ${splitEmail[1]}`;
  console.log(splitEmail, message);
}
const email = "en.nhshaongmail.com";
sendNotification(email);
