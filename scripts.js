// Переключение темы
document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Открытие и закрытие модального окна
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('donateModal');
    const openModalBtn = document.getElementById('openDonateModal');
    const closeModalBtn = document.querySelector('.modal .close');

    if (openModalBtn && closeModalBtn && modal) {
        openModalBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });

        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// Функция для записи воды с лимоном
function recordWater() {
    const cupsCount = document.getElementById('cupsCount').value;
    const timeOfDay = document.getElementById('timeOfDay').value;

    if (!cupsCount || cupsCount < 1) {
        showNotification('Please enter a valid number of cups.', true);
        return;
    }

    // В данном примере просто показываем успешное уведомление через 1 секунду
    setTimeout(function() {
        showNotification('Water with lemon successfully recorded!', false);
        // Очистить поля формы или обновить UI при необходимости
        document.getElementById('cupsCount').value = '';
        document.getElementById('timeOfDay').value = '';
    }, 1000); // 1000 миллисекунд = 1 секунда
}

// Функция для показа уведомления
function showNotification(message, isError) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('error'); // Удалить класс ошибки, если он есть
    if (isError) {
        notification.classList.add('error'); // Добавить класс ошибки для красного фона
    }
    notification.style.display = 'block'; // Показать уведомление

    // Автоматически скрыть через 5 секунд
    setTimeout(function() {
        notification.style.display = 'none';
    }, 5000); // 5000 миллисекунд = 5 секунд
}

// Закрыть уведомление при клике на кнопку закрытия
document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.notification .close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const notification = document.getElementById('notification');
            notification.style.display = 'none';
        });
    }
});
