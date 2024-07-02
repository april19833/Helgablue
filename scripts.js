/* Общие стили для контейнера */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Стили для header */
header {
    background-color: #0077cc;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

header h1 {
    font-size: 36px;
    margin: 0;
    text-transform: uppercase;
    font-family: 'Great Vibes', cursive;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

nav ul li {
    margin: 5px 10px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    background-color: #005fa3;
    border-radius: 5px;
    transition: background-color 0.3s;
}

nav ul li a:hover {
    background-color: #004080;
}

.donate-button {
    background-color: #28a745;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.donate-button:hover {
    background-color: #218838;
}

.theme-switch {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme-switch input {
    margin-right: 10px;
}

/* Стили для модального окна */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    transition: display 0.3s;
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 8px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Стили для уведомлений */
.notification {
    display: none;
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: #28a745;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 1000;
}

.notification.show {
    display: block;
}

/* Стили для разделов */
section {
    margin: 20px 0;
}

section h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

/* Переходы */
body, header, section, footer {
    transition: background-color 0.3s, color 0.3s;
}

nav ul li a {
    transition: background-color 0.3s, color 0.3s;
}

.donate-button {
    transition: background-color 0.3s;
}

/* Темная тема */
body.dark-theme {
    background-color: #121212;
    color: #e0e0e0;
}

body.dark-theme header {
    background-color: #1f1f1f;
}

body.dark-theme nav ul li a {
    background-color: #333;
}

body.dark-theme nav ul li a:hover {
    background-color: #555;
}

/* Стили для кнопок */
button, .donate-button {
    transition: transform 0.3s;
}

button:hover, .donate-button:hover {
    transform: scale(1.05);
}
