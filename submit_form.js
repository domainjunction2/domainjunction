// Include the EmailJS library
<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

<script type="text/javascript">
  (function(){
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
  })();
</script>

// Send email using EmailJS
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    firstname: document.getElementById('firstname').value,
    secondname: document.getElementById('secondname').value,
    email: document.getElementById('email').value,
    company: document.getElementById('company').value,
    message: document.getElementById('message').value,
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
  .then(function(response) {
    document.getElementById('formResponse').innerHTML = 'Your message has been sent successfully!';
    document.getElementById('contactForm').reset(); // Clear form
  }, function(error) {
    document.getElementById('formResponse').innerHTML = 'There was an issue sending your message. Please try again.';
    console.error("Email error:", error);
  });
});
