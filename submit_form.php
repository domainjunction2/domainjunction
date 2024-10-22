<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and capture form data
    $firstname = htmlspecialchars($_POST['firstname']);
    $secondname = htmlspecialchars($_POST['secondname']);
    $email = htmlspecialchars($_POST['email']);
    $company = htmlspecialchars($_POST['company']);
    $message = htmlspecialchars($_POST['message']);
    
    // Prepare the email content
    $body = "First Name: $firstname\n";
    $body .= "Second Name: $secondname\n";
    $body .= "Email: $email\n";
    $body .= "Company: $company\n";
    $body .= "Message: $message\n";

    // Replace with your recipient email
    $to = "mail@domainjunction.com"; 
    $subject = "New Contact Form Submission";
    
    // Use mailx to send the email
    $command = 'echo "' . $body . '" | mailx -s "' . $subject . '" ' . $to;
    $output = shell_exec($command);

    // Check if the email was sent successfully
    if ($output === null) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
