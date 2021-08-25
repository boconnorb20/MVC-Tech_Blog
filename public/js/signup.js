async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username_signup').value.trim();
    const email = document.querySelector('#email_signup').value.trim();
    const password = document.querySelector('#password_signup').value.trim();
    const twitter = document.querySelector('#twitter_signup').value.trim();
    const github = document.querySelector('#github_signup').value.trim(); 

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                github,
                twitter,
                password
            }),
            headers: { 'Content_Type': 'application/json' }
        });

        if (response.ok) {
            console.log('successful signup');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }

}

document.querySelector('.signup_form').addEventListener('sumbit', signupFormHandler);