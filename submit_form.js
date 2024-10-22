document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const firstname = document.getElementById('firstname').value;
  const secondname = document.getElementById('secondname').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;

  // Use SMTP.js to send email via SMTP2GO
  Email.send({
    SecureToken: "api-3E70A6A1DEA94E9886CEB95A5143473F",  // Your SMTP2GO Secure Token
    To: "your-email@example.com", // Replace with your email address
    From: email, // Send from the user's email
    Subject: "New Contact Form Submission",
    Body: `First Name: ${firstname}<br>Second Name: ${secondname}<br>Email: ${email}<br>Company: ${company}<br>Message: ${message}`
  }).then(function (response) {
    if (response == "OK") {
      document.getElementById('formResponse').innerHTML = 'Your message has been sent successfully!';
      document.getElementById('contactForm').reset(); // Clear the form
    } else {
      document.getElementById('formResponse').innerHTML = 'There was an issue sending your message. Please try again.';
    }
  }).catch(function (error) {
    document.getElementById('formResponse').innerHTML = 'An error occurred. Please try again.';
  });
});
