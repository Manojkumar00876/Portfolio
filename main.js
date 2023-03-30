var typed = new Typed('.typer', {
    strings: ['Manojkumar..','a Developer..' ,'a Designer..'],
    typeSpeed: 100,
    backspeed:100,
    loop:true
  });

  function sendEmail () {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "manoj95973@gmail.com",
        Password : "A27AC25D831BB313FA2FCE56E3B842805CE1",
        To : 'manojkumarr24ecesnsct@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : document.getElementById("subject")
    }).then(
      message => alert(message)
    );
  }