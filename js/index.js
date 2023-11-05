const button_Login = document.querySelector('#login-btn');
const modalLogin = document.querySelector('#modal-login');
const modalLoginSection = document.querySelector('.modal-login-section')


modalLoginSection.addEventListener('click', (e) => {
    e.stopPropagation();
})

button_Login.addEventListener('click', () => {
    modalLogin.classList.toggle('modal-login-container-show')
})

modalLogin.addEventListener('click', () => {
    modalLogin.classList.toggle('modal-login-container-show')
})