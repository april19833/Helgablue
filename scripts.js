document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const openDonateModal = document.getElementById('openDonateModal');
    const donateModal = document.getElementById('donateModal');
    const closeBtn = donateModal.getElementsByClassName('close')[0];

    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme');
        
        // Сохранение выбора пользователя
        localStorage.setItem('darkModeEnabled', this.checked);
    });

    // Проверка состояния при загрузке страницы
    if (localStorage.getItem('darkModeEnabled') === 'true') {
        document.body.classList.add('dark-theme');
        darkModeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-theme');
        darkModeToggle.checked = false;
    }

    // Открытие модального окна
    openDonateModal.addEventListener('click', function() {
        donateModal.style.display = 'block';
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        donateModal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target == donateModal) {
            donateModal.style.display = 'none';
        }
    });

    // Функция записи воды с лимоном
    window.recordWater = function() {
        const cupsCount = document.getElementById('cupsCount').value;
        const timeOfDay = document.getElementById('timeOfDay').value;

        if (cupsCount && timeOfDay) {
            const waterRecords = document.getElementById('waterRecords');
            const recordDiv = document.createElement('div');
            recordDiv.className = 'waterRecord';
            recordDiv.innerHTML = `<strong>${timeOfDay}:</strong> ${cupsCount} cup(s) of water with lemon`;
            waterRecords.appendChild(recordDiv);
        }
    };
});
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const openDonateModal = document.getElementById('openDonateModal');
    const donateModal = document.getElementById('donateModal');
    const closeBtn = donateModal.getElementsByClassName('close')[0];
    const notification = document.getElementById('notification');

    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme');
        
        // Сохранение выбора пользователя
        localStorage.setItem('darkModeEnabled', this.checked);
    });

    // Проверка состояния при загрузке страницы
    if (localStorage.getItem('darkModeEnabled') === 'true') {
        document.body.classList.add('dark-theme');
        darkModeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-theme');
        darkModeToggle.checked = false;
    }

    // Открытие модального окна
    openDonateModal.addEventListener('click', function() {
        donateModal.style.display = 'block';
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        donateModal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target == donateModal) {
            donateModal.style.display = 'none';
        }
    });

    // Функция записи воды с лимоном
    window.recordWater = function() {
        const cupsCount = document.getElementById('cupsCount').value;
        const timeOfDay = document.getElementById('timeOfDay').value;

        if (cupsCount && timeOfDay) {
            const waterRecords = document.getElementById('waterRecords');
            const recordDiv = document.createElement('div');
            recordDiv.className = 'waterRecord';
            recordDiv.innerHTML = `<strong>${timeOfDay}:</strong> ${cupsCount} cup(s) of water with lemon`;
            waterRecords.appendChild(recordDiv);

            // Показ уведомления
            notification.textContent = 'Record added successfully!';
            notification.classList.add('show');
            setTimeout(function() {
                notification.classList.remove('show');
            }, 3000);
        }
    };
});
