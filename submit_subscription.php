<?php
session_start();

// Проверка метода запроса
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы подписки
    $tariff = $_POST['tariff'];
    $email = $_POST['email'];
    $nickname = $_POST['nickname'];
    $telegram = $_POST['telegram'];
    
    // Отправка уведомления о подписке
    $to = "olgatelb@gmail.com";
    $subject = "Новая подписка на курс NFT";
    $message = "Тариф: $tariff\nEmail: $email\nНик: $nickname\nТелеграм: $telegram";
    $headers = "From: no-reply@yourdomain.com";
    
    // Отправка уведомления на почту о новой подписке
    if (mail($to, $subject, $message, $headers)) {
        echo "Подписка успешно оформлена!";

        // Здесь можно добавить дополнительный код, например, сохранение данных в базу данных
        
    } else {
        echo "Произошла ошибка при оформлении подписки.";
    }
} else {
    echo "Неверный метод запроса.";
}

// Проверка сессии пользователя для доступа к материалам курса
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
    <p>Контент модуля...</p>
</body>
</html>
