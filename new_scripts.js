// Example scripts for new functionality

// Get the modal
var modal = document.getElementById('paymentModal');

// Get the button that opens the modal
var btn = document.getElementById("donateCourseBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form validation for subscription form
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    var email = document.getElementsByName('email')[0].value;
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
