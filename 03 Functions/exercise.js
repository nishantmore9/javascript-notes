function maskMail(email) {
  let username = email.slice(0, email.indexOf("@"));
  let domain = email.slice(email.indexOf("@"));
  let maskedMail = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1]

  return `${maskedMail}${domain}`;
}

console.log(maskMail("more23940@gmail.com"))

