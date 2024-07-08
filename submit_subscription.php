<?php
session_start();

// Проверка метода запроса
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы подписки
    $tariff = htmlspecialchars($_POST['tariff']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $nickname = htmlspecialchars($_POST['nickname']);
    $telegram = htmlspecialchars($_POST['telegram']);
    
    // Проверка данных на пустоту
    if (empty($tariff) || empty($email) || empty($nickname) || empty($telegram)) {
        echo "Пожалуйста, заполните все поля.";
        exit();
    }

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
    <title>Модуль 1: История NFT</title>
</head>
<body>
    <h1>Модуль 1: История NFT</h1>
    <p>Контент модуля...</p>
</body>
</html>
