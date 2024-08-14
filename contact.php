<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "ftallawouoto@usf.edu";
    $subject = $_POST['subject'];
    $message = "Name: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\n\nMessage:\n" . $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        $logFile = 'contact_log.txt';
        $logMessage = "Name: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\nSubject: " . $_POST['subject'] . "\nMessage: " . $_POST['message'] . "\n\n";

        if (file_put_contents($logFile, $logMessage, FILE_APPEND)) {
            echo "Message logged successfully!";
        else
            echo "Failed to send message.";
    }
}
?>
