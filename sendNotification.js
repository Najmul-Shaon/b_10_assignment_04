function sendNotification(email) {
  const isIclude = email.indexOf("@");
  if (isIclude < 0) {
    return "Invalid Email";
  } else {
    const splitEmail = email.split("@");
    const message = `${splitEmail[0]} sent you an email from ${splitEmail[1]}`;
    return message;
  }
}
const email = "sadia8icloud.com";
console.log(sendNotification(email));
