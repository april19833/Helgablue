<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tariff = $_POST['tariff'];
    $email = $_POST['email'];
    $nickname = $_POST['nickname'];
    $telegram = $_POST['telegram'];
    
    // Здесь можно добавить код для обработки данных, например, сохранение в базу данных или отправка на email
    // Пример отправки на email
    $to = "your-email@example.com";
    $subject = "Новая подписка на курс";
    $message = "Тариф: $tariff\nEmail: $email\nНик: $nickname\nТелеграм: $telegram";
    $headers = "From: no-reply@yourdomain.com";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Подписка успешно оформлена!";
    } else {
        echo "Произошла ошибка при оформлении подписки.";
    }
} else {
    echo "Неверный метод запроса.";
}
?>
<?php
session_start();

// Проверка сессии
if (!isset($_SESSION['user_email'])) {
    header("Location: payment.php");
    exit();
}

// Здесь находится материал курса, доступный только для подписанных пользователей
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
    <p>Контент модуля...</p>
</body>
</html>
