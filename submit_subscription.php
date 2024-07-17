<?php
session_start();
require 'db.php';
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Check request method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form data
    $tariff = htmlspecialchars($_POST['tariff']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $nickname = htmlspecialchars($_POST['nickname']);
    $telegram = htmlspecialchars($_POST['telegram']);
    
    // Check for empty fields
    if (empty($tariff) || empty($email) || empty($nickname) || empty($telegram)) {
        echo "Please fill out all fields.";
        exit();
    }

    // Prepare SQL query to insert data into database
    $sql = "INSERT INTO subscriptions (tariff, email, nickname, telegram) VALUES (?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);

    try {
        // Execute SQL query to insert data into database
        $stmt->execute([$tariff, $email, $nickname, $telegram]);

        // Send subscription notification using PHPMailer
        $mail = new PHPMailer(true);
        try {
            // SMTP settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.helgablue.xyz';  // Replace with your SMTP server
            $mail->SMTPAuth   = true;
            $mail->Username   = 'admin@helgablue.xyz';  // Replace with your SMTP username
            $mail->Password   = 'your_email_password';  // Replace with your SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            // Sender and recipient
            $mail->setFrom('admin@helgablue.xyz', 'No Reply');
            $mail->addAddress('olgatelb@gmail.com'); // Replace with your recipient address

            // Email content
            $mail->isHTML(true);
            $mail->Subject = 'New NFT Course Subscription';
            $mail->Body    = "Tariff: $tariff<br>Email: $email<br>Nickname: $nickname<br>Telegram: $telegram";

            // Send email
            $mail->send();

            // Redirect to success page
            header("Location: success.html");
            exit();
        } catch (Exception $e) {
            // Redirect to error page with message
            header("Location: error.html?message=" . urlencode('Error sending email: ' . $mail->ErrorInfo));
            exit();
        }
    } catch (\PDOException $e) {
        // Redirect to error page with message
        header("Location: error.html?message=" . urlencode('Error saving data: ' . $e->getMessage()));
        exit();
    }
} else {
    echo "Invalid request method.";
}

// Check user session for course access
if (!isset($_SESSION['user_email'])) {
    header("Location: payment.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module 1: History of NFTs</title>
</head>
<body>
    <h1>Module 1: History of NFTs</h1>
    <p>Module content...</p>
</body>
</html>
