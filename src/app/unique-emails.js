function uniqueEmails() {
    var emails = [
      'test.email+alex@kavak.com',
      'test.e.mail+bob.cathy@kavak.com',
      'test.email+alex@ka.vak.com'
    ];
    var emailsReplaced = [];
    for(var i = 0; i < emails.length; i++) {
      var mail = emails[i];
      var splitAt = mail.split('@');
      var username = splitAt[0];
      var domain = splitAt[1];
      var originalMail = '';
      if (username.includes('+')) {
        var checkPlus  = username.split('+');
        originalMail = checkPlus[0];
      }
      if (username.includes('.')) {
        originalMail  = (originalMail) ? originalMail.replace(/\./gi, '') : username.replace(/\./gi, '') ;
      }
      emailsReplaced.push(originalMail + '@' + domain);
    }
    var uniquesEmail = emailsReplaced.filter( this.onlyUnique );
    debugger;
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }