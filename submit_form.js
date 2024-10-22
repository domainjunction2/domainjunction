document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  console.log("Form submitted"); // Check if the form is being submitted

  // Get form data
  const firstname = document.getElementById('firstname').value;
  const secondname = document.getElementById('secondname').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;

  console.log("Form data:", firstname, secondname, email, company, message); // Check form data

  // Use SMTP.js to send email via SMTP2GO
  Email.send({
    Host: "mail.smtp2go.com", // SMTP2GO host
    Port: 587, // Use port 587 for TLS
    Username: "domainjunction", // Your SMTP2GO username
    Password: "yJ8LR4y96Je1Udbn", // Your SMTP2GO password
    To: "mail@domainjunction.com", // Replace with your email address
    From: email, // Send from the user's email
    Subject: "New Contact Form Submission",
    Body: `First Name: ${firstname}<br>Second Name: ${secondname}<br>Email: ${email}<br>Company: ${company}<br>Message: ${message}`
  }).then(function (response) {
    console.log("Email response:", response); // Log the email response
    if (response == "OK") {
      document.getElementById('formResponse').innerHTML = 'Your message has been sent successfully!';
      document.getElementById('contactForm').reset(); // Clear the form
    } else {
      document.getElementById('formResponse').innerHTML = 'There was an issue sending your message. Please try again.';
      console.error("Error response:", response); // Log error response
    }
  }).catch(function (error) {
    document.getElementById('formResponse').innerHTML = 'An error occurred. Please try again.';
    console.error("Catch error:", error); // Log any errors in catch
  });
});
