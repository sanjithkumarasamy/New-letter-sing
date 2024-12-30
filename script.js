document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    const contactNumber = document.getElementById('contact-number').value;

    if (!username || !email || !password || !message || !contactNumber) {
        document.getElementById('error-message').innerText = 'All fields are required.';
        return;
    }

    if (username.length < 3) {
        document.getElementById('error-message').innerHTML = 'username must 3 letters.';
        return;
    }

    if (password.length < 8) {
        document.getElementById('error-message').innerText = 'Password must be at least 8 characters.';
        return;
    }

    if (!password.match(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,}$/)) {
        document.getElementById('error-message').innerText = 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.';
        return;
    }

    if (!contactNumber.match(/^[0-9]{10}$/)) {
        document.getElementById('error-message').innerText = 'Contact number must be exactly 10 digits.';
        return;
    }
});
