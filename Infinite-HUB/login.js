const users = [
    { username: 'admin', password: 'password' },
    { username: 'user1', password: 'user123' },
    { username: 'guest', password: 'guest123' },
    { username: 'Bharath', password: '1234' },
    { username: 'chandi', password: '1234' },

];

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim(); 
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    console.log('Username entered:', username);
    console.log('Password entered:', password);

    // Validate inputs
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log('User found:', user); 
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username); 
        window.location.href = 'index.html'; 
    } else {
        console.log('Invalid login attempt'); 
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});
