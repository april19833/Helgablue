<?php
session_start();
require 'db.php';
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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

    // Подготовка запроса для вставки данных в базу данных
    $sql = "INSERT INTO subscriptions (tariff, email, nickname, telegram) VALUES (?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);

    try {
        // Вставка данных в базу данных
        $stmt->execute([$tariff, $email, $nickname, $telegram]);

        // Отправка уведомления о подписке с помощью PHPMailer
        $mail = new PHPMailer(true);
        try {
            // Настройки сервера
            $mail->isSMTP();
            $mail->Host       = 'smtp.example.com';  // Укажите SMTP-сервер
            $mail->SMTPAuth   = true;
            $mail->Username   = 'your_email@example.com';  // Ваш SMTP username
            $mail->Password   = 'your_email_password';  // Ваш SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            // Получатели
            $mail->setFrom('no-reply@yourdomain.com', 'No Reply');
            $mail->addAddress('olgatelb@gmail.com');

            // Содержимое письма
            $mail->isHTML(true);
            $mail->Subject = 'Новая подписка на курс NFT';
            $mail->Body    = "Тариф: $tariff<br>Email: $email<br>Ник: $nickname<br>Телеграм: $telegram";

            $mail->send();
            // Перенаправление на страницу успеха
            header("Location: success.html");
            exit();
        } catch (Exception $e) {
            // Перенаправление на страницу ошибки с сообщением
            header("Location: error.html?message=" . urlencode('Ошибка при отправке email: ' . $mail->ErrorInfo));
            exit();
        }
    } catch (\PDOException $e) {
        // Перенаправление на страницу ошибки с сообщением
        header("Location: error.html?message=" . urlencode('Ошибка при сохранении данных: ' . $e->getMessage()));
        exit();
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
<html lang="ru">
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
