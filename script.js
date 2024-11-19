
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        document.getElementById('form-status').innerHTML = 'Please fill in all fields!';
        document.getElementById('form-status').style.color = 'red';
        return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('form-status').innerHTML = 'Please enter a valid email address.';
        document.getElementById('form-status').style.color = 'red';
        return;
    }

    setTimeout(function() {
        document.getElementById('form-status').innerHTML = 'Message sent successfully!';
        document.getElementById('form-status').style.color = 'green';

        document.getElementById('contact-form').reset();
    }, 1000);
});
