document.getElementById('login-Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Define correct credentials
    var validUsername = 'admin';
    var validPassword = '123';

    // Validate login credentials
    if (username === validUsername && password === validPassword) {
        window.location.href = 'Infinite-HUB/index.html'; // Redirect to index.html
    } else {
        alert('Invalid username or password');
    }
});
