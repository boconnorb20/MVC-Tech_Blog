const { response } = require("express");

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email_login').value.trim();
    const password = document.querySelector('#password_login').value.trim();

    if (email && password)  {
        const response = await fetch('/api/users/login', {
            method: 'POST', 
            body: JSON.stringify({
                email, 
                password
            }),
            headers: { 'Content_Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login_form').addEventListener('submit', loginFormHandler);