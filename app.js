const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevents default link behavior
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevents default link behavior
    wrapper.classList.remove('active');
});
