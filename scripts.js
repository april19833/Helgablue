<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Helga Blue</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
        }
        .container {
            width: 80%;
            margin: 0 auto;
        }
        header {
            background-color: #4FC3F7;
            color: #ffffff;
            padding: 10px 0;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 2em;
        }
        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            margin: 10px 0 0 0;
        }
        nav ul li {
            margin: 0 15px;
        }
        nav ul li a {
            color: #ffffff;
            text-decoration: none;
            font-size: 1.2em;
        }
        .donate {
            position: relative;
            display: inline-block;
            margin-left: auto;
        }
        .flower-widget {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
            background-color: white;
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .flower-widget p {
            margin: 0;
            font-size: 14px;
            color: #333;
        }
        .flower-petal {
            width: 20px;
            height: 40px;
            background-color: #FFD700;
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
        }
        .flower-petal:nth-child(1) {
            transform: translate(-50%, -20%) rotate(30deg);
        }
        .flower-petal:nth-child(2) {
            transform: translate(-50%, -20%) rotate(90deg);
        }
        .flower-petal:nth-child(3) {
            transform: translate(-50%, -20%) rotate(150deg);
        }
        .flower-petal:nth-child(4) {
            transform: translate(-50%, -20%) rotate(210deg);
        }
        .flower-center {
            width: 10px;
            height: 10px;
            background-color: #FFD700;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
        }
        .flower-widget.active {
            display: block;
        }
        .moon-widget {
            cursor: pointer;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
        }
        .moon {
            width: 30px;
            height: 30px;
            background-color: #ffffff;
            border-radius: 50%;
            border: 2px solid #333;
            position: relative;
        }
        .moon::before, .moon::after {
            content: '';
            position: absolute;
            background-color: #ffffff;
        }
        .moon::before {
            width: 20px;
            height: 2px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .moon::after {
            width: 2px;
            height: 20px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .dark-mode .moon {
            background-color: #333;
            border-color: #ffffff;
        }
        .dark-mode .moon::before, .dark-mode .moon::after {
            background-color: #333;
        }
        .dark-mode .moon::before {
            width: 20px;
        }
        .dark-mode .moon::after {
            height: 20px;
        }
        .dark-mode .flower-petal {
            background-color: #333;
        }
        .dark-mode .flower-center {
            background-color: #333;
        }
        #water-lemon {
            margin-top: 30px;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 5px;
        }
        #water-lemon h2 {
            font-size: 1.5em;
            color: #333;
        }
        #water-lemon p {
            color: #666;
        }
        #water-lemon form {
            margin-top: 20px;
        }
        #water-lemon form label {
            display: block;
            margin-bottom: 5px;
            color: #333;
        }
        #water-lemon form input[type="number"], #water-lemon form input[type="date"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            box-sizing: border-box;
        }
        #water-lemon form button {
            padding: 10px 20px;
            background-color: #4FC3F7;
            color: #ffffff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #water-lemon form button:hover {
            background-color: #3BA0E0;
        }
        #water-lemon table {
            width: 100%;
            margin-top: 20px;
            border-collapse: collapse;
        }
        #water-lemon table th, #water-lemon table td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        #water-lemon table th {
            background-color: #f2f2f2;
        }
        #notification {
            display: none;
            position: fixed;
            z-index: 1000;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            width: 80%;
            max-width: 400px;
        }
        .dark-mode #notification {
            background-color: #333;
        }
        .notification p {
            margin: 0;
        }
        .notification.active {
            display: block;
        }
        .notification-close {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1><a href="https://april19833.github.io/Helgablue/" style="color: #ffffff; text-decoration: none;">Gallery</a></h1>
            <nav>
                <ul>
                    <li><a href="#gallery-monad">Gallery Monad</a></li>
                    <li><a href="#gallery-mezo">Gallery Mezo</a></li>
                    <li><a href="https://april19833.github.io/Helgablue/" style="color: #ffffff; text-decoration: none;">Helga Blue</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="gallery-monad" class="gallery-section">
        <!-- Your gallery Monad content here -->
    </section>

    <section id="gallery-mezo" class="gallery-section">
        <!-- Your gallery Mezo content here -->
    </section>

    <div class="donate">
        <button onclick="showWidget('flower')" class="button donate-flower-button">Donate via Beam Wallet</button>
        <div id="flower-widget" class="flower-widget">
            <div class="flower-petal"></div>
            <div class="flower-petal"></div>
            <div class="flower-petal"></div>
            <div class="flower-petal"></div>
            <div class="flower-center"></div>
            <p>Donate to support our projects</p>
        </div>
    </div>

    <div id="notification" class="notification">
        <span onclick="closeNotification()" class="notification-close">&times;</span>
        <p>Your record has been successfully saved!</p>
    </div>

    <script src="scripts.js"></script>
    <script src="confetti.js"></script>
    <script>
        // Theme toggle
        const themeToggleButton = document.getElementById('theme-toggle');
        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', function () {
                document.body.classList.toggle('dark-mode');
            });
        }

        // Nav toggle
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');
        if (burger) {
            burger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                burger.classList.toggle('active');
            });
        }

        // Modal
        const modal = document.getElementById("donateModal");
        const btn = document.querySelector(".donate-flower-button");
        const span = document.getElementsByClassName("close")[0];
        
        if (btn) {
            btn.onclick = function() {
                modal.style.display = "block";
            }
        }
        
        if (span) {
            span.onclick = function() {
                modal.style.display = "none";
            }
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Notifications
        function showNotification(message, isError) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.remove('error', 'success');
            if (isError) {
                notification.classList.add('error');
            } else {
                notification.classList.add('success');
            }
            notification.style.display = 'block';

            setTimeout(function() {
                notification.style.display = 'none';
            }, 5000);
        }

        // Record Water Function
        function recordWater() {
            const cupsCount = document.getElementById('cupsCount').value;

            if (!cupsCount || cupsCount < 1) {
                showNotification('Please enter a valid number of cups.', true);
                return;
            }

            const currentDate = new Date();
            const date = currentDate.toLocaleDateString();
            const time = currentDate.toLocaleTimeString();

            const newRow = document.createElement('tr');
            const dateCell = document.createElement('td');
            const timeCell = document.createElement('td');
            const cupsCell = document.createElement('td');

            dateCell.textContent = date;
            timeCell.textContent = time;
            cupsCell.textContent = cupsCount;

            newRow.appendChild(dateCell);
            newRow.appendChild(timeCell);
            newRow.appendChild(cupsCell);

            const tableBody = document.getElementById('waterRecords').getElementsByTagName('tbody')[0];
            tableBody.appendChild(newRow);

            showNotification('Water with lemon successfully recorded!', false);

            document.getElementById('cupsCount').value = '';
        }

        // Confetti
        function startConfetti() {
            confetti.start();
            setTimeout(() => {
                stopConfetti();
            }, 5000);
        }

        function stopConfetti() {
            confetti.stop();
        }

        // Adding event listener to the flower widget for theme toggle
        const flowerWidget = document.querySelector(".flower-widget");
        if (flowerWidget) {
            flowerWidget.addEventListener("click", () => {
                document.body.classList.toggle('dark-mode');
            });
        }

        // Adding event listener to the donate button in the gallery section
        const donateFlowerButton = document.querySelector(".donate-flower-button");
        if (donateFlowerButton) {
            donateFlowerButton.addEventListener("click", () => {
                modal.style.display = "block";
            });
        }
    </script>
</body>
</html>
<script>
    function showWidget(widgetName) {
        var widgets = document.getElementsByClassName(widgetName + "-widget");
        for (var i = 0; i < widgets.length; i++) {
            widgets[i].classList.toggle("active");
        }
    }

    function closeNotification() {
        var notification = document.getElementById('notification');
        notification.classList.remove('active');
    }

    // Добавленный код для работы виджета
    document.addEventListener('DOMContentLoaded', function () {
        var flowerWidget = document.getElementById('flower-widget');

        // При клике в любое место страницы, скрывать виджет цветка
        document.addEventListener('click', function (event) {
            if (!flowerWidget.contains(event.target)) {
                flowerWidget.classList.remove('active');
            }
        });

        // При клике на кнопку "Donate to support our projects", показывать/скрывать виджет
        var donateButton = document.querySelector('.donate .button');
        donateButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Остановить всплытие события, чтобы не сработал клик по document
            showWidget('flower');
        });
    });
</script>
