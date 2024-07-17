// Скрипт для открытия и закрытия модального окна
const mainButton = document.getElementById('mainButton');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

mainButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Обработчики для каждой кнопки доната
const donateButtons = document.querySelectorAll('.donate-button');

donateButtons.forEach(button => {
  button.addEventListener('click', function() {
    const amount = this.getAttribute('data-amount');
    const url = this.getAttribute('data-url');

    if (url) {
      window.location.href = url;
    } else {
      alert(`You selected Bitcoin for a custom amount.`);
      // Handle Bitcoin custom amount logic here
    }
  });
});
